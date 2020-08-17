import React,{Fragment} from 'react'

export default props =>
/**
 * usamos fragment para envolver o conteúdo que quisermos
 * exportar quando precisarmos exportar mais de uma tag,
 * podemos também envolver por uma div
 */
    <Fragment>
        <h1>Bom dia {props.nome}, sua idade é:{props.idade}!</h1>
        <h2>Até logo</h2>
    </Fragment>



/*export default props =>
    <Fragment>
        <h1>Bom dia {props.nome}, sua idade é:{props.idade}!</h1>
        <h2>Até logo</h2>
    </Fragment>*/
