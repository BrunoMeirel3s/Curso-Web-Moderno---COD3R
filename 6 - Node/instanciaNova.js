//Uma factory retorna um novo objeto
/**
 * Ao retornar uma função factory as variáveis
 * que derem require neste código irão sempre criar
 * uma nova instancia, não compartilhando os mesmos
 * valores de variáveis
 */
module.exports = () => {
    return {
        valor:1,
        inc(){
            this.valor++
        }
    }
}