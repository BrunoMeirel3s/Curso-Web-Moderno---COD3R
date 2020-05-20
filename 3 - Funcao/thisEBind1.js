const pessoa = {
    saudacao: 'Bom dia',
    falar(){
       console.log(this.saudacao);
    }
}

/**
 * Ao tentar chamar um método de um objeto ou classe
 * é possível que o this varie de acordo com o contexto
 * de execução, por conta disso podemos chamar a função
 * bind() no qual podemos passar como parâmetro o contexto
 * no qual nossas função devem ser resolvidas
 */
pessoa.falar();
const falar = pessoa.falar;
falar();//conflito entre paradigmas: funcional e OO


const falarDePessoa = pessoa.falar.bind(pessoa);//pessoa.falar será executada no contexto de pessoa
falarDePessoa();//assim não terá erro ao executar o método