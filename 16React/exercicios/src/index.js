import React from 'react'//Precisa ser importado para poder usar o React
import ReactDOM from 'react-dom'//ReactDOM é responsável por trabalhar os elementos da DOM

import BomDia from './componentes/BomDia'

//importando mais de um elemento do arquivo Multiplos
//import {BoaTarde, BoaNoite} from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo ="Bom dia" nome="Bruno"/>
    </div>    
, document.getElementById('root'))