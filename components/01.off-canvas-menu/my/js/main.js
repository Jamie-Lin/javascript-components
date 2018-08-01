(function () {
    
  const siteContainer = document.querySelector('.site-container')
  const menuIcon = siteContainer.querySelector('.js-toggle-menu')
  const sideMenu = document.querySelector('.side-menu')

  menuIcon.addEventListener('click', function () {

    sideMenu.classList.toggle('open-menu')
    
  })

})()