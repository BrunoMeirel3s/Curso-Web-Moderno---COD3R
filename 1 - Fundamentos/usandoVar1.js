/**
 * Variáveis do  tipo var possuem dois escopos o 
 * escopo global e o escopo de função
 */
{
    {
        {
            {
                var sera = 'Será?';
                console.log(sera);
            }
        }
    }
}
console.log(sera);

/**
 * Caso a variável do tipo var seja declarada no escopo
 * de função ela somente será visível nesse escopo
 */
function teste(){
    var local = 123;
    console.log(local);
}

teste();