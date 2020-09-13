$('a[href*="#"]').not('[href="#"]').click(function(event) {
  if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }
});

var modal = $('#modal__wrapper');

$('a[href="#modal"]').click(function(e){
  e.preventDefault();
  modal.css("display", "flex").hide().fadeIn();
  $('#modal__content-cross').click(function(e){
    e.preventDefault();
    modal.fadeOut();
  });
});

