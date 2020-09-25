//instância de Express, a mesma herda os métodos de express
const app = require('Express')()

//consign ajuda na gerência das dependências
const consign = require('consign')

//db recebe o exports de db.js, que nos permite acessar o banco
const db = require('./config/db')
app.db = db



//com o consign os arquivos podem conversar entre sí sem a necessidade de requires
//como os arquivos da api com o arquivo de rotas por exemplo
consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})