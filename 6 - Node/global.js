//console.log(global)

/**
 * Utilizando global podemos passar um objeto
 * para todos os módulos presentes no node, sendo
 * assim todos terão acesso as funções e atributos
 */
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})