const colors= {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',

    //retorna a cor de acordo com a tag passada como parâmetro
    get(tag){
        return this[tag]? this[tag]: this.padrao
    }

}
/*
    varremos o documento procurando por elementos que possuem
    a classe .tag após listarmos isso aplicamos uma forEach
    que aplica uma função para cada elemento
*/
document.querySelectorAll('.tag').forEach(box=> {
    //tagName obtêm o nome(tipo) da tag
    const tagName = box.tagName.toLowerCase()

    //aplica a cor na borda do elemento de acordo com o tipo da tag
    box.style.borderColor = colors.get(tagName)

    /*
        Verifica se na tag atual existe uma classe chamada noLabel, caso
        houver não será aplicado os efeitos dentro do bloco if
    */
    if(!box.classList.contains('noLabel')){
        //label recebe a criação de um novo elemento do tipo label que é um 'rótulo'
        const label = document.createElement('label')

        //o label recebe como cor de background a cor definida para a tag atual
        label.style.backgroundColor = colors.get(tagName)

        //adicionamos o nome da tag atual no conteúdo html de label
        label.innerHTML = tagName

        //por fim inserimos o label antes da tag html atual
        box.insertBefore(label, box.childNodes[0])
    }
})