//Middleware pattern (chain of responsability)
/**
 * Os passos a baixo após serem executados chamam
 * a próxima função a ser executada
 */
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next)=>{
    ctx.valor2 = 'mid2'
    next()
}

/**
 * O passo 3 após sua execução não chama outro passo
 */
const passo3 = ctx => ctx.valor3 = 'mid3'

/**
 * A constante exec recebe como parametro
 * um contexto de execução que no exemplo foi
 * um objeto vazio e os middlewares que são
 * os passos a serem executados
 */
const exec = (ctx, ...middlewares)=>{
    /**
     * ExecPasso executa passo a passo as funções
     * passadas como parâmetro para exec, testando
     * se middlewares está ativa e se o índice é menor
     * que o tamanho de middlewares e executa o middleware
     * do indice atual(começa em zero) e ao executar soma + 1
     * para ir navegando entre os passos
     */
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    /**
     * inicia a execução do passo a passo, após
     * iniciar com o passo zero a função execPasso
     * chamas os demais passos
     */
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)