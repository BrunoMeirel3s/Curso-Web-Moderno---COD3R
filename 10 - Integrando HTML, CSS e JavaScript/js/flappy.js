/**
 * novoElemento apenas serve para agilizar o processo
 * de criação de novos elementos, onde precisamos
 * apeas passar o nome da tag e a classe
 */
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

//criador de barreira, recebe um parametro 'reversa' que diz se a barreira é em cima ou em baixo
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')//cria uma div que irá receber o cano

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    /**
     * Abaixo é verificado se reverse é true ou false
     * assim podemos criar primeiro o corpo ou primeiro
     * a borda, pois as barreias de cima e de baixo possuem
     * essa diferença
     */
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    /**
     * Função setAltura fica disponível para ser chamada externamente
     * a mesma é utilizada para definir a altura do corpo do cano
    */
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

//const b = new Barreira(true)
//b.setAltura(200)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

/**
 * ParDeBarreias recebe altura, abertura e posicionamento no eixo x
 * essa função é responsável por criar o Par de barreiras
 */
function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')//div que irá receber o par de barreiras

    /**
     * superior e inferior são instâncias de Barreira, ou seja
     * são as barreiras, observer que informamos como parametro
     * true ou false que indica se a barreira é reversa ou não
     */
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)//adiciona a barreira na div
    this.elemento.appendChild(this.inferior.elemento)//adiciona a barreira na div

    /**
     * sortearAbertura ajusta a altura dos canos, sendo assim iremos
     * criar a abertura entre eles e o posicionamento vertical dos 
     * canos na tela
     */
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)//usamos o math.random para criar uma altura aleatória
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    /**
     * getX é utilizado para obter o posicionamento do elemento, para isso
     * convertemos a string left em um inteiro, divindo a string usando
     * o split e pegando somente a primeira parte dessa divisão
     */
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`//ajusta o posicionamento no eixo x
    this.getLargura = () => this.elemento.clientWidth//getlargura pode ser utilizado para obter a largura o elemento

    this.sortearAbertura()//invocamos o sortear abertura para toda vez que criamos um bar de barreiras obtermos um novo posicionamento
    this.setX(x)
}

//const b = new ParDeBarreiras(700, 400, 800)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

/**
 * função Barreiras ficará responsável por criar as 4 barreiras de uma vez, 
 * bem como possui as funções de animação
 */
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    /**
     * cria 4 barreiras informando para a função ParDeBarreias a altura
     * abertura e a largura que no ParDeBarreias é usado para definir
     * o posicionamento da barreira no eixo x
     */
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3

    this.animar = () => {
        //percorre o vetor de barreias
        this.pares.forEach(par => {
            /**
             * definimos que o eixo x do elemento será igual o seu
             * eixo x atual - deslocamento, ou seja, toda vez que o vetor
             * for percorrido iremos fazer o elemento se deslocar mais e mais
             * no eixo x
             */
            par.setX(par.getX() - deslocamento)

            /*
                quando o elemento sair da área do jogo, iremos fazer
                o mesmo voltar para o inicio da aplicação, dessa forma sempre
                teremos barreias se deslocando na tela.

                if a posição atual do elemento for menor que a sua largura negativa
                significa que o mesmo não encontra-se na tela, sendo assim será
                deslocado multiplicando seu posicionamento de acordo com o espaço
                entre as barreiaras * a quantidade de barreiras
            */
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()//sortea uma nova abertura para fazer o jogo dinamico
            }


            const meio = largura / 2
            /**
             * const cruzouMeio será true se a posição atual do elemento + deslocamento
             * for maior do que o meio, sendo assim irá assionar o if
             */
            const cruzouMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio

            if (cruzouMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    //onkeydown é utilizado para verificar se a tecla está pressionada
    window.onkeydown = e => voando = true
    //onkeyup é utilizado para verificar se a tecla foi solta
    window.onkeyup = e => voando = false

    this.animar = () => {
        /**
         * novoY será igual o y atual + voando true ou false, se for
         * true será adicionado 8px no y atual, se for false será 
         * retirado 5px
         */
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        /**
         * If abaixo é utilizado para verificar se o passaro irá passar os limites da 
         * tela do jogo
         */
        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}


function Progresso(){
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos =>{
        this.elemento.innerHTML = pontos
    }
}

function EstaoSobrePostos(elementoA, elementoB){
    /**
     * getBoundingClientRect() obtém o retangulo que envolve
     * o elemento em questão
     */
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    /**
     * horizontal será true se a distância até o elementoA pelo lado esquerdo
     * + a largura do elementoA for maior do que a distância esquerda até o elementoB e vice versa
     */
    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left

    /**
     * vertical será true se a distância até o elementoA de baixo pra cima
     * + a altura do elementoA for maior do que a distância de baixo pra cima até o elementoB e vice versa
     */
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top    

    return horizontal && vertical    
}

//colidiu recebe os elementos que irá testar se colidem
function Colidiu(passaro, barreiras){
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if(!colidiu){
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento

            /**
             * colidiu testa se o passaro sobrepõem-se com as
             * barreias infeior ou superior
             */
            colidiu = EstaoSobrePostos(passaro.elemento, superior)
                || EstaoSobrePostos(passaro.elemento, inferior)
        }
    })

    return colidiu
}

function FlappyBird(){
    let ponto = 0
    const areaDoJogo = document.querySelector('[wm-flappy]')//recebe a area do jogo
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    /**
     * progresso.atualizarPontos é chamado na função barreiras
     * como a função notificarPontos, sendo assim é executada
     * quando o passaro cruza a metade da tela
     */
    const barreiras = new Barreiras(altura, largura, 200, 400, 
        () => progresso.atualizarPontos(++ponto))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    
    this.start = ()=>{
        //loop do jogo
        const temporizador = setInterval(()=>{
            barreiras.animar()
            passaro.animar()

            /**
             * se o passaro colidir é temporizador é zerado e não
             * mais é executado o jogo
             */
            if(Colidiu(passaro, barreiras)){
                clearInterval(temporizador)
            }
        },20)
    }
}

new FlappyBird().start()