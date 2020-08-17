import React from 'react'

export function childrenWithProps(props){
    /**React.children recebe os filhos que estão presentes em um componente
     * Utilizando o map podemos percorrer esses filhos, pegando o props.children
     * que é o vetor com os filhos, ao percorre-los estamos realizando um spread
     * dos atributos do pai e do filho no próprio filho
     */
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}