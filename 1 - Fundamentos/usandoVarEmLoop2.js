const funcs = []

for(var i = 0; i< 10; i++){
    funcs.push(function(){
        console.log(i)
    });
}

/**
 * Por conta de não possuir escopo de bloco a chamada
 * de uma atribuição dentro do escopo de bloco sempre
 * irá resultar no último valor da variável i
 */
funcs[2]();
funcs[8]();