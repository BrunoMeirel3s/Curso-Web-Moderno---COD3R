const funcs = []

for(let i = 0; i< 10; i++){
    funcs.push(function(){
        console.log(i)
    });
}

/**
 * Por possuir escopo de bloco a chamada
 * de uma atribuição dentro do escopo de bloco irá
 * resultar no valor que foi atribuído no momento exato
 */
funcs[2]();
funcs[8]();