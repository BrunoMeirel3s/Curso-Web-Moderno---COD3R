/**
 * usamos a notação ../ para sair de uma
 * pasta
 */
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

/**
 * O require sempre irá procurar um arquivo
 * index caso realizarmos um require de uma
 * pasta
 */
const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)