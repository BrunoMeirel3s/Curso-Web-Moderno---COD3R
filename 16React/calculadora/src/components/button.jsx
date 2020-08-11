import React from 'react'
import './button.css'

export default props => {
    let classes = 'button '
    /**
        props.operation ? verificar se foi passado como parâmetro
        para o props do button o atributo operation, se sim será setado
        o valor operation como sendo uma classe do botão, o mesmo
        se aplica as demais classes
    */
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button 
            /**
             * a função onclick do botão realiza um teste para ver se a função
             * click está definida e se estiver ele captura o label do botão
             */
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}