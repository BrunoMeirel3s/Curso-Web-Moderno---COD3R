/**
 * process utiliza a entrada e saída padrão do sistema
 * que seria o teclado e a tela, na const abaixo ele procura pela tag -a na hora da execução do script
 * caso não encontre ele retorna true
 */
const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    //process.stdout.wite escreve direto no terminal do ambiente que tiver rodando este código
    process.stdout.write('Fala Anônimo!\n')
    process.exit()//process.exit() finaliza o canal de entrada e saída padrão
}else {
    process.stdout.write('Informe o seu nome: ')

    /**
     * process.stdin.on recebe a entra digitada pelo teclado do computador
     * em um objeto que no exemplo em questão está sofrendo um parser para
     * string, ao digitar o enter ele também vem na string no formato de \n
     * que está sendo removido utilizando o replace
     */
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}