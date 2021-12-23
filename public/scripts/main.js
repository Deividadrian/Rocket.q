import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que exixte com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //Adicinar a escuta
  button.addEventListener('click', event => {
    modalTitle.innerHTML = 'Marcar como lida'
    //open modal
    modal.open()
  })
})

//When the delete button is clicked, the modal opens
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => {
    modalTitle.innerHTML = 'Excluir essa pergunta'
    //open modal
    modal.open()
  })
})
