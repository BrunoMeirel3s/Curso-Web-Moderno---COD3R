import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

//os dois imports abaixo são os responsáveis por trabalhar a parte de direcionamento entre páginas
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'

import Footer from '../componentes/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            {/**Routes será usado para renderizar o componente
             * pelo qual iremos navegar
             */}
            <Routes/>       
            <Footer/>
        </div>
    </BrowserRouter>
    