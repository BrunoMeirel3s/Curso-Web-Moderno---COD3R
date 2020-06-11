//Não aceita repetição/não indexada
/**
 * Set é uma estrutura similar ao vetor, por armazenar
 * vários valores porém não é indexada e não aceita
 * valores repetidos
 */
const times = new Set() //Usamos o new para criar um instância de set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)