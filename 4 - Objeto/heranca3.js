const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai) // Object.create permite escolher de quem o objeto herdará
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

/**
 * Usamos o object.create para especificar de quem o objeto
 * herdará bem como ajustar os atributos, podemos permitir que 
 * determinado atributo sejá sobreescrito ou que possamos encontra-lo
 */
const filha2 = Object.create(pai,{
    nome: {value:'Bia', writable: false, enumerable: true}

})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

/**
 * Object.keys retorna o nome dos atributos porém não
 * seus valores
 */
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//hasOWnProperty testa se o objeto possui determinado atributo
//por herança ou se é dele mesmo
for(let key in filha2){
    filha2.hasOwnProperty(key)?
    console.log(key): console.log(`Por herança: ${key}`)
}