(function() {

  const toggleItem = document.querySelectorAll('.js-toggle-item')

  let lastOpen

  toggleItem.forEach( item => {

    if (lastOpen === undefined) {
      lastOpen = item.classList.contains('is-open') ? item : null
    }
    
    item.addEventListener('click', e => {
      // const content = item.querySelector('.accordion__content')

      if (lastOpen !== item) {
        lastOpen.classList.remove('is-open')
        lastOpen = item
      }

      lastOpen.classList.toggle('is-open')
        
    })

  })

  console.log(lastOpen)

})()