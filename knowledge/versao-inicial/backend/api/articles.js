//arquivos queries contém queries a serem utilizadas no banco
const queries = require('./queries')

module.exports = app => {
    //métodos utilizados para validação
    const { existsOrError, notExistsOrError } = app.api.validation

    //método utilizado para salvar os artigos no banco
    const save = (req, res) => {
        //article recebe o conteúdo enviado no body da requisição
        const article = { ...req.body }

        //se o id estiver setado na url article.id irá receber este id
        if (req.params.id) article.id = req.params.id

        //try utilizado para validar se os campos estão preenchidos caso contrário exibe mensagem para o usuário
        try {
            existsOrError(article.name, 'Nome não informado')
            existsOrError(article.description, 'Descrição não informada')
            existsOrError(article.categoryId, 'Categoria não informada')
            existsOrError(article.userId, 'Autor nã informado')
            existsOrError(article.content, 'Conteúdo não informado')
        } catch (msg) {
            res.status(400).send(msg)
        }

        //se article.id já estiver setado significa que iremos realizar um update no valor
        //por isso utilizamos o método update abaixo
        if (article.id) {
            app.db('articles')
                .update(article)//atualiza o artigo conforme recebido do front-end
                .where({ id: article.id }) //onde o id do artigo for igual ao id recebido na url
                .then(_ => res.status(204).send())//após a atualização é retornado o código de ok
                .catch(err => res.status(500).send(err))
        } else {
            //caso contrário iremos inserir um novo registro no banco
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    //método utilizado para excluir artigos do banco de dados
    const remove = async (req, res) => {
        try {
            //método para excluir um registro, no app.db('articles') é conectado a tabela de artigos
            //no where é selecionado o id de acordo com o recebido na url e depois o .del() apaga o valor
            const rowsDeleted = await app.db('articles')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Artigo não foi encontrado.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    
    const limit = 1 //usado para paginação
    const get = async (req, res) => {
        //page é a página atual dentro da paginação
        //caso não seja informado no front iremos adotar a página 1
        const page = req.query.page || 1
        
        
        const result = await app.db('articles').count('id').first()
        const count = parseInt(result.count)

        //É retornado articles de acordo com o limite de 10 e utilizando o offset
        app.db('articles')
            .select('id', 'name', 'description')
            .limit(limit).offset(page * limit - limit)
            .then(articles => res.json({ data: articles, count, limit }))//é retornado os artigos, a quantidade de artigos e o limite de resultado por busca
            .catch(err => res.status(500).send(err))
    }

    //getById é utilizado quando quisermos buscar um artigo informando o id do mesmo
    const getById = (req, res) => {
        app.db('articles')
            .where({ id: req.params.id })
            .first()
            .then(article => {
                article.content = article.content.toString()
                return res.json(article)
            })
            .catch(err => res.status(500).send(err))
    }

    const getByCategory = async (req, res) => {
        const categoryId = req.params.id
        const page = req.query.page || 1

        //categories recebe as categorias com suas subcategorias juntas, realizando uma busca que utiliza
        //a querie que encontra-se em queries.js
        const categories = await app.db.raw(queries.categoryWithChildren, categoryId)
        const ids = categories.rows.map(c => c.id)//é realizado um map em cima das rows de categories para pegar somente os ids

        /**
         * Abaixo é realizado um select que busca informações em duas planilhas diferentes
         * as planilhas articles e users, no whereRaw é definido o atributo que une as duas planilhas
         * no caso na planilha articles é o atributo userId que é o atributo id da planilha users
         */
        app.db({a: 'articles', u: 'users'})
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', {author: 'u.name'})
            .limit(limit).offset(page * limit - limit)
            .whereRaw('?? = ??', ['u.id', 'a.userId'])
            .whereIn('categoryId', ids)
            .orderBy('a.id', 'desc')
            .then(articles => res.json(articles))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById, getByCategory }
}