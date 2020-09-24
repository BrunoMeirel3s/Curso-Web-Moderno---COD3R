/**
 * neste exemplo estamos exportando um função que retorna salvar e obter
 * que são as função trabalhadas neste módulo, também trabalhamos os links direto no módulo
 * sendo app.post e app.get os métodos post e get da instância do express no módulo index.js
 */
module.exports = (app, texto)=>{    
    function salvar(req, res){
        res.send('Produto > salvar > ' + texto)
    }

    function obter(req, res){
        res.send('Produto > obter > ' + texto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter}
}