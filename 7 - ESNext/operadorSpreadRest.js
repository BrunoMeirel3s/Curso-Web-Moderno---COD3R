//Operador ...rest(juntar)/spread(espalhar)
//Usar rest com parâmetro de função

//Usar spread com objeto
const funcionario = { nome: "Maria", salario: 12348.99}
//Usando ...funcionarios podemos espalhar todos os atributos de funcionarios em um novo objeto
const clone = {ativo:true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)