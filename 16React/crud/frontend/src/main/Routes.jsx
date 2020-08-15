import React from 'react'

//imports responsáveis por criar o direcionamento entre páginas
import {Switch, Route, Redirect} from 'react-router'

import Home from '../componentes/home/Home'
import UserCrud from '../componentes/user/UserCrud'

export default props =>
    /**
     * Estrutura abaixo é a utilizada para criar o direcionamento
     * entre páginas, observer que de acordo com o path chamamos
     * um componente que será renderizado na página
     */
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCrud}/>        
    </Switch>