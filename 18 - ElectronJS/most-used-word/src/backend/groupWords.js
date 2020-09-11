//groupedWords é utilizado para agrupar e contar as palavras repetidas
module.exports = words => {
    return new Promise((resolver, reject)=>{
        try{
            //para realizar o agrupamento é realizado um reduce em cima de words recebido como parâmetro de groupedWords
            ///no caso abaixo iremos criar um novo vetor onde obj é o acumulador e word é o elemento
            const groupedWords = words.reduce((obj, word) =>{
                if(obj[word]){//verifica se já existe o elemento
                    obj[word] = obj[word] + 1//se o elemento já existe será somado +1 ao elemento
                }else{//caso não exista então será criado o primeiro elemento
                    obj[word] = 1
                }
                return obj
            },{})

            //após agrupar as palavras é realizado um map em cima dos elemento de groupedWords para criar um novo vetor
            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(key => ({name: key, amount: groupedWords[key]})) //novo vetor irá conter name, e amount que é a palavra e quantidade de vezes que ela aparece
                .sort((w1, w2) => w2.amount - w1.amount)//ordenarar do maior para o menor
                
              resolver(groupedWordsArray) 
        } catch(e){
            reject(e)
        }
    })
}