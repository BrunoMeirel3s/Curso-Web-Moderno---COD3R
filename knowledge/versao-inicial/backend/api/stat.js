module.exports = app => {
    //usando um model criamos uma especie de schema no banco não relacional
    const Stat = app.mongoose.model('Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    //retorna as estatísticas de quantos usuários, categorias e artigos existem no banco
    const get = (req, res) => {
        //é retornado os valores de forma decrescente enviando sempre a ultima estatistica gravada
        Stat.findOne({}, {}, { sort: { 'createdAt': -1 } })
            .then(stat => {
                const defaultStat = {
                    users: 0,
                    categories: 0,
                    articles: 0,            
                }
                res.json(stat || defaultStat)
            })
    }

    return { Stat, get }
}