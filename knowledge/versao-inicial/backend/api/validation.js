//utilizado para realizar validações
module.exports = app => {
    function existsOrError(value, msg) {
        if (!value) throw msg //se o valor for falso é lançado o erro
        if (Array.isArray(value) && value.length === 0) throw msg //se o vetor for vazio é lançado o erro
        if (typeof value === 'string' && !value.trim()) throw msg //se a String for vazia é lançado o erro
    }

    //notrExistsOrError inverte o funcionamento de existOrError
    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch(msg) {
            return
        }
        throw msg
    }
    
    function equalsOrError(valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}