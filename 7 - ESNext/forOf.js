/**
 * For Of é utilizado para percorrer não o índice de um vetor
 * mas sim os próprios valores, como no exemplo abaixo percorremos
 * uma string
 */
for(let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){
    console.log(i)//for in percorre os índices
}

for(let assunto of assuntosEcma){
    console.log(assunto)//for of percorre os valores 
}

const assuntosMap = new Map([
    ['Map',{abordado:true}],
    ['Set',{abordado:true}],
    ['Promise',{abordado:false}]
])

//Usando o for of em um map iremos primeiramente percorrer os registro, chave valor
for(let assunto of assuntosMap){
    console.log(assunto)
}

//Podemos percorrer somente os índices
for(let chave of assuntosMap.keys()){
    console.log(chave)
}

//Também podemos percorrer somente os valores
for(let valor of assuntosMap.values()){
    console.log(valor)
}

//É possível separar os índices do valores usando destructuring como abaixo
for(let [ch, vl] of assuntosMap){
    console.log(ch, vl)
}

//também podemos usar o For of com Set
const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}