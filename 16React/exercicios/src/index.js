import React from 'react'//Precisa ser importado para poder usar o React
import ReactDOM from 'react-dom'//ReactDOM é responsável por trabalhar os elementos da DOM

import BomDia from './componentes/BomDia'

//importando mais de um elemento do arquivo Multiplos
//import {BoaTarde, BoaNoite} from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Bruno" sobrenome=" Meireles">
            {/**
             * Como Passo os componentes Filhos aqui?
             */}
             <Filho nome="Jair "/>
             <Filho nome="Lorena " sobrenome="Meireles"/>
        </Pai>
    </div>
    , document.getElementById('root'))