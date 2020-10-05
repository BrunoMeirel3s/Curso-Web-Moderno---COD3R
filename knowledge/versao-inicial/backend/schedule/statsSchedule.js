//schedule nos permite criar trabalhos agendados para acontecer em determinados intervalos de tempo
const schedule = require('node-schedule')

module.exports = app => {
    //o método scheduleJob recebe como parametro o tempo que irá ficar sendo chamada como no exemplo abaixo 1 minuto
    //e recebe uma função que será executada
    schedule.scheduleJob('*/1 * * * *', async function(){
        //abaixo é realizado a contagem de elementos inseridos nas tabelas users, categories e articles
        //percebe que contamos pelo id e utilizamos o first para não recebermos um vetor como resultado
        const usersCount = await app.db('users').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()

        //realizamos o destructuring de Stat que está em stat.js, dessa forma temos acesso ao modelo de Stat
        const { Stat } = app.api.stat

        //lastStat recebe a última estatística 
        const lastStat = await Stat.findOne({}, {}, 
            { sort: { 'createdAt' : -1}})

        /**
         * stat é a instância de Stat, ou seja recebe o modelo padrão de Stat
         * contendo user, categories e articles, abaixo todos recebem a contagem 
         * dos elementos realizado a cima
         */
        const stat = new Stat({
            users: usersCount.count,
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createdAt: new Date()
        })    

        /**
         * É verificado primeiramente se lastStat esta ativo, ou seja se já existe uma ultima estatistica
         * após isso é verificado que a última é diferente da atual
         */
        const changeUsers = !lastStat || stat.users !== lastStat.users
        const changeCategories = !lastStat || stat.categories !== lastStat.categories
        const changeArticles = !lastStat || stat.articles !== lastStat.articles

        //se alguma das estatísticas forem novas então é realizado o salvamento no banco e a exibição da msg
        if(changeUsers || changeCategories || changeArticles){
            stat.save().then(() => console.log('[Stats] Estatítiscas atualizadas!'))
        }
        
    })
}