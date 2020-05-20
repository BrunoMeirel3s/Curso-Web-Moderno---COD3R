const valor = 'Global';

/**
 * Ao criar uma função ela guarda o contexto léxico
 * de onde está sendo criada, desta forma quando a mesma
 * for chamada ela irá procurar as variáveis de acordo
 * com seu contexto léxico original
 */
function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    /**
     * Minha função irá buscar o contexto léxico de onde
     * foi declarada
     */
    minhaFuncao();
}

exec();