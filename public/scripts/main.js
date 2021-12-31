import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que exixte com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //Adicinar a escuta
  button.addEventListener('click', handleClick)
})

//When the delete button is clicked, the modal opens
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault() //Evita a acrecimo de # ou outros caracteres na URL quando e clicado no Marcar como lido ou em Ecluir.
  const text = check ? 'Marcar como lido ' : 'Excluir '
  const roomId = document.querySelector('#room-id').dataset.id
  const slug = check ? 'check' : 'delete'
  const questionId = event.target.dataset.id // Pega o elemento que acontece no evento data-id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`) // Informaçoes para o formulasrio

  modalTitle.innerHTML = `${text} essa pergunta `
  modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  //open modal
  modal.open()
}
