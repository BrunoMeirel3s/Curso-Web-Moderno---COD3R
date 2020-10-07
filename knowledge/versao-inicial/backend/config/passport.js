const { authSecret } = require('../.env')
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt

//passport é quem realiza a validação do token de acesso ao sistema
module.exports = app => {
    
    //parametros a serem utilizados na estrategia que irá definir quem pode logar
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    
    //strategy recebe os parametros acima e um middleware que contém o payload definido em auth.js
    //onde contém as informações do usuário como id, name e outros
    const strategy = new Strategy(params, (payload, done) => {
        app.db('users')
            .where({ id: payload.id })
            .first()
            .then(user => done(null, user ? { ...payload } : false))
            .catch(err => done(err, false))
    })

    passport.use(strategy)

    return {
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
}