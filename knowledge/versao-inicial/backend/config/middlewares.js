const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    //app.use aplica os middlewares
    app.use(bodyParser.json())
    app.use(cors())
}