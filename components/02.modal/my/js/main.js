const toggleButton = document.querySelector('.jsModalToggle')

toggleButton.addEventListener('click', _ => {
  document.body.classList.add('modal-is-open')
})

const closeButton = document.querySelector('.jsModalClose')

closeButton.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})

