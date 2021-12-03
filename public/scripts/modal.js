export default function Modal() {
  function open() {
    //functionality to assign the active class to the modal
    document.querySelector('.modal-wrapper').classList.add('active')
  }
  function close() {
    //functionality to remove active class from modal
  }

  return {
    open,
    close
  }
}
