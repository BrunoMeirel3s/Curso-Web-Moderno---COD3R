class Lancamento{

    /**
     * o construtor é quem inicializa os atributos
     * da classe
     */
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    /**
     * AddLancamentos utiliza um foreach para preencher um vetor
     * com as informações dos lançamentos
     */
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    /**
     * Sumário utiliza um foreach para adicionar os valores das
     * contas na variável valorConsolidado
     */
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000);
const contaDeEnergia = new Lancamento('Energia', -220);

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeEnergia)

console.log(contas.sumario())