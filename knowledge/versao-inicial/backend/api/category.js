module.exports =  app => {
    //import dos métodos de validação
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        //category recebe os dados enviados no corpo do post realizado em cima
        //da rota que chama save
        const category = { 
            id: req.body.id,
            name: req.body.name,
            parentId: req.body.parentId
        }

        //se for enviado um id como parametro da url esse mesmo id é assumido como id de category pois posivelmente será atualizado
        //um valor já existente no banco
        if(req.params.id) category.id = req.params.id

        try{
            existsOrError(category.name, 'Não informado')//verifica se foi informado no nome da categoria ou mostra um erro
        }catch(msg){
            return res.status(400).send(msg)
        }

        //se o category.id estiver preenchido significa que será realizado a atualização
        //de um registro no banco por isso é realizado abaixo um update 
        if(category.id){
            app.db('categories')
                .update(category)
                .where({id: category.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }else{
            //caso não seja uma atualização é realizado a inserção de uma nova categoria no banco
            app.db('categories')
                .insert(category)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    //método para realizar a remoção de categorias do banco
    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código da Categoria não informado.')

            //abaixo antes de realizar a exclusão é identificado se a categoria possui atributos ligados a ela

            //É pesquisado se o id da categoria a ser excluída é o parentId de alguma outra categoria
            //o que significa que ela possui subcategorias
            const subcategory = await app.db('categories')
                .where({ parentId: req.params.id })
            notExistsOrError(subcategory, 'Categoria possui subcategorias.')

            //É pesquisado se a categoria possui artigos ligados a ela se sim é exibo o erro
            const articles = await app.db('articles')
                .where({ categoryId: req.params.id })
            notExistsOrError(articles, 'Categoria possui artigos.')

            //após as validações acima é realizado o delete da categoria de acordo com o id informado
            //porém também é validado se foi possível realizar ou não o delete
            const rowsDeleted = await app.db('categories')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Categoria não foi encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    //withPath busca o caminho completo das categorias, o que inclui toda as subcategorias
    const withPath = categories => {

        const getParent = (categories, parentId) =>{

            let parent = categories.filter(parent => parent.id === parentId)
            return parent.length ? parent[0] : null

        }

        const categoriesWithPath = categories.map(category => {
            let path = category.name
            let parent = getParent(categories, category.parentId)

            while(parent){
                path = `${parent.name} : ${path}`
                parent = getParent(categories, parent.parentId)
            }

            return { ...category, path}
        })

        categoriesWithPath.sort((a, b) => {
            if(a.path < b.path) return -1
            if(a.path > b.path) return 1
            return 0
        })

        return categoriesWithPath
    }

    //get retorna todas as categorias
    const get = (req, res) => {
        app.db('categories')
            .then(categories => res.json(withPath(categories)))
            .catch(err => res.status(500).send(err))
    }

    //retorna uma categoria de acordo com o id informado
    const getById = (req, res) => {
        app.db('categories')
            .where({id: req.params.id})
            .first()
            .then(category => res.json(category))
            .catch(err => res.status(500).send(err))
    }

    const toTree = (categories, tree) => {
        if(!tree) tree = categories.filter(c => !c.parentId)
        tree = tree.map(parentNode => {
            const isChild = node => node.parentId == parentNode.id
            parentNode.children = toTree(categories, categories.filter(isChild))
            return parentNode
        })
        return tree
    }

    const getTree = (req, res) =>{
        app.db('categories')
            .then(categories => res.json(toTree(categories)))
            .catch(err => res.status(500).send(err))
    }
    return { save, remove, get, getById, getTree}
}