var header = {

    menuApp: '',
    menuSuperior: '',
  
    init: function () {
      header.menuApp = $('#menuApp')
      header.menuSuperior = $('#menuSuperior')
  
      // menú burguer con animación al click
      if (window.matchMedia('(max-width: 991px)').matches) {
        header.menuApp.click(function () {
          header.menuApp.toggleClass('active')
        })
      }
    }
  
  }
  
  // DOM READY
  $(function () {
    header.init()
  })