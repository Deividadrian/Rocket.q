import Modal from './modal.js'

const modal = Modal()

//Pegar todos os botões que exixte com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //Adicinar a escuta
  button.addEventListener('click', event => {
    modal.open()
  })
})
