//mongoose é a biblioteca odm, a mesma implementa a conexão com o banco MongoDB
const mongoose = require('mongoose')
//mongoose.connect não somente conecta com o banco como também já cria a tabela knowledge_stats
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })