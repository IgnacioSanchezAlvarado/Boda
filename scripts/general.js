// javascript común que se usa en todas las páginas
res_lt_768 = function () { return ($(window).width() < 768) }

var general =
{
  scroll_height_activate: 200,

  init: function () {
    // animaciones en scroll

    AOS.init()

    // General resize

    $(window).resize(function () {
      general.resize()
    })

    // Girar los correos electrónicos que hay por código para evitar el spam de los robots
    general.email()

    // btn go to top
    general.go_to_top()

    // TOOLTIPS
    // Los ocultamos al cargar la página para evitar que se quede mostrado el último que se ha pulsado aún después de recargarla (Safari).
    $('[data-toggle="tooltip"]').tooltip('hide')

    // Ocultamos el tooltip si detectamos que el ratón sale del botón.
    $('[data-toggle="tooltip"]').on('mouseleave', function () {
      $(this).tooltip('hide')
    })

    // Ocultamos el tooltip después de unos segundos automáticamente después de mostrarlo.
    $(document).on('shown.bs.tooltip', function (e) {
      setTimeout(function () {
        $(e.target).tooltip('hide')
      }, 5000)
    })

    const toolOptions = {
      animation: true,
      placement: 'top',
      container: 'body'
    }
    $('[data-toggle="tooltip"]').tooltip(toolOptions)
  },

  email: function () {
    $('.backwards').each(function (i) {
      const email = $(this).html().split('').reverse().join('')
      $(this).html(email)
    })

    $('.mailto').click(function (e) {
      e.preventDefault()
      e.stopPropagation()

      const email = $(this).html()

      if (email !== '') { document.location.href = 'mailto:' + email }
    })
  },

  go_to_top: function () {
    const go_to_top = $('#go-to-top')

    // Go to top on click
    go_to_top.off('click').on('click', function () {
      $('html, body').stop(true, true).animate({ scrollTop: 0 })
    })

    // Show/hide go to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > general.scroll_height_activate) {
        go_to_top.removeClass('d-none').addClass('d-block')
      } else {
        go_to_top.removeClass('d-block').addClass('d-none')
      }
    })
  },
  resize: function () {
    if (res_lt_768()) {
      general.scroll_height_activate = 200
    } else {
      general.scroll_height_activate = 768
    }

    const main_class = $('main').attr('class')
    const sections = ['politica-privacidad', 'politica-cookies', 'aviso-legal', 'preguntas-frecuentes']

    // Initialize go to top
    if ($.inArray(main_class, sections) > -1) { general.go_to_top() }
  }

}

// DOM READY
$(function () {
  general.init()
})