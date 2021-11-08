// 0-verde
// 1-vermelho
// 2-amarelo
// 3-azul

let order = []
let clickedOrder = []
let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const black = document.querySelector('.black')

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random()*4)
  order[order.length]= colorOrder
  clickedOrder = []

  for (let i in order ){
    const elementColor = createElementColor(order[i])
    lightColor(elementColor, Number(i)+1)
  }
}

const lightColor = (element, number) => {
  number = number * 500
  setTimeout(()=>{
    element.classList.add('selected')
  }, number - 250)

  setTimeout(()=>{
    element.classList.remove('selected')
  })
}

const checkOrder = () => {
  for (let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      gameOver();
      break
    }
  }

  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\n voce acertou! iniciando proximo nivel `)
    nextLevel()
  }
}

const click = (color)=>{
  clickedOrder[clickedOrder.length] = color
  createElementColor(color).classList.add('selected')

  setTimeout(()=>{
    createElementColor(color).classList.remove('selected')
    checkOrder()
  },250)
}

const createElementColor = (color)=>{
  if(color == 0){
    return green
  }else if(color == 1){
    return red
  }else if(color == 2){
    return black
  }else if(color == 3){
    return blue
  }
}

const nextLevel = ()=>{
  score++
  shuffleOrder()
}

const gameOver = ()=>{
  alert(`Pontuação ${score}\n Voce perdeu o jogo\nClique em OK para iniciar o jogo`)
  order=[]
  clickedOrder=[]
  playGame()
}

const playGame = ()=>{
  alert('Bem vindo ao genesis')
  score = 0

  nextLevel()
}

green.onclick = ()=> click(0)
red.onclick = ()=> click(1)
black.onclick = ()=> click(2)
blue.onclick = ()=> click(3)

playGame()