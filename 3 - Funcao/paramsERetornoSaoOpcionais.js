function area(largura, altura){
    const area = largura * altura;
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2, 2));
console.log(area(2));//Podemos enviar menos parâmetros do que o declarado, porém o retorno será NaN
console.log(area());
/**
*Podemos utilizar mais parâmetros do que o declarado na construção
*da função, porém só iremos utilizar a quantidade declarada
*/
console.log(area(2, 3, 17, 22, 44));
console.log(area(5,5));