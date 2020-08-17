import React from 'react'
/**
 * exportando como const podemos importar
 * vários elementos de uma só vez no arquivo 
 * JS que irá incorporar o elemento a página
 */
export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

