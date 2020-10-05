//bcrypt será utilizado para criptografar a senha do usuário
const bcrypt = require('bcrypt-nodejs')
module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    //encryptPassword recebe a senha e gera um hash da senha
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    //função save é responsável por salvar o usuário no banco
    //observer que usamos o async pois os acessos ao banco precisam usar await
    const save = async (req, res)=>{

        //user recebe os parametros passados no corpo da requisição
        const user = { ...req.body}

        //se no corpo da requisição existir id o user receberá este id
        if(req.params.id) user.id = req.params.id

        //try utilizado para validar as informações passadas no frontEnd
        try{
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

            //obtém os emails que constam no banco para identificar se consta algum já cadastrado
            const userFromDB = await app.db('users')
                .where({email: user.email}).first()

            if(!user.id){
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
            
        } catch(msg){
            return res.status(400).send(msg)
        }

        //realiza a criptografia da senha do usuário bem como o delete da confirmação da senha
        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        //Verifica se user.id já está ativo e realiza a atualização
        if(user.id){
            app.db('users')
                .update(user)
                .where({id: user.id})
                .whereNull('deletedAt')
                .then( _ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }else{

            //caso user.id já não esteja definido então será realizado a inserção de um novo usuário
            app.db('users')
                .insert(user)
                .then( _ => res.status(204).send())
                .catch( err => res.status(500).send(err))
        }
    }

    //retorna todos os usuários do banco
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    //retorna usuário por id
    const getById = (req, res) =>{
        app.db('users')
        .select('id', 'name', 'email', 'admin')
        .whereNull('deletedAt')
        .where({id: req.params.id})
        .first()
        .then(users => res.json(users))
        .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try{
            const articles = await app.db('articles')
                .where({userId: req.params.id})
            notExistsOrError(articles, 'Usuário possui artigos.')

            const rowsUpdated = await app.db('users')
                .update({deletedAt: new Date()})
                .where({id: req.params.id})
            existsOrError(rowsUpdated, 'Usuário não foi encontrado.')

            res.status(204).send()
        } catch(msg){
            res.status(400).send(msg)
        }
    }

    //após tudo precisamos retornar os métodos que poderão ser acessados no routes
    return { save, get, getById, remove }
}