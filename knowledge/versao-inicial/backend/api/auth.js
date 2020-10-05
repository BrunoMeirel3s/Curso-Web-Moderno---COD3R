const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    //função signin será utilizada para realizar a validação de acesso do usuário junto ao banco
    const signin = async (req, res) => {

        //verifica primeiramente se email e senha foi passado no corpo da requisição
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!')//caso não tenha sido passado os dados é retornado erro 400 e a msg
        }

        //user recebe a busca no banco pelo email informado no frontend
        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        //se user for vazio ou seja não foi encontrado o email informado no banco
        if (!user) return res.status(400).send('Usuário não encontrado!')

        //isMatch recebe a comparação da senha informada no front-end com a senha do usuário salvo no back-end
        //pois as senhas ficam salvas como hash no banco
        const isMatch = bcrypt.compareSync(req.body.password, user.password)

        //caso o resultado de isMatch seja negativo significa que as senhas não conferem, desta forma retornamos informando que a senha não bate
        if (!isMatch) return res.status(401).send('Email/Senha inválidos!')

        //const now recebe a quantidade de horas em milisegundos de hoje até 1970
        const now = Math.floor(Date.now() / 1000)

        //payload recebe a carga de informações que serão transmitidas de forma segura
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        //por fim é respondido um json com o payload já contendo as informacões validadas
        //também é enviado para o usuário um token que corresponde ao acesso dele e ficará
        //válido durante três dias
        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    //validate token valida se o usuário possue o token que foi gerado durante o processo de login se sim ele acessa a aplicação
    //caso o cotrário ele é impedido de acessar
    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token
        }

        res.send(false)
    }

    return { signin, validateToken }
}