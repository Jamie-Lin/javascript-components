(function () {
  const component = document.querySelector('.tabbed-component')
  const tabs = component.querySelectorAll('.tab')
  const contents = component.querySelectorAll('.tab-content')
  
  tabs.forEach( tab => {
    
    tab.addEventListener('click', e => {
  
      tabs.forEach(elem => elem.classList.remove('is-selected'))
      contents.forEach(elem => elem.classList.remove('is-selected'))
  
      const link = tab.children[0]
      const href = link.getAttribute('href')
      const tabContent = component.querySelector(href)
  
      tab.classList.add('is-selected')
      tabContent.classList.add('is-selected')
  
    })
  })

})()
