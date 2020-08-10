import React from 'react'

import {childrenWithProps} from '../utils/utils'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {   /**
             * Para exibir os elementos gerados por outros componentes dentro do componente
             * Pai precisamos chamar uma função que irá buscar esses elementos filhos para
             * processa-los e depois executar na DOM
             */
                childrenWithProps(props)
                }
        </ul>
    </div>
