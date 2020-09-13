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

const modal = $('#modal__wrapper');

$('a[href="#modal"]').click(function(e){
  e.preventDefault();
  modal.css("display", "flex").hide().fadeIn();
  $('#modal__content-cross').click(function(e){
    e.preventDefault();
    modal.fadeOut();
  });
});

function getCookie(name) { 
  var nameEQ = name + "="; 
  var ca = document.cookie.split(';'); 
  for(var i=0 ;i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return 0;
}

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/"; 
}

const language = $('.language');

if (getCookie('bud-lang') == 'UA'){
  language.children('li').children('a').first().text(`${getCookie('bud-lang')}`);
  language.children('li:nth-child(2)').children('a').text('RU');
} else if ((getCookie('bud-lang') == 'RU')){
  language.children('li').children('a').first().text(`${getCookie('bud-lang')}`);
  language.children('li:nth-child(2)').children('a').text('UA');
}

language.children('li').click(function(e){
  e.preventDefault();
  alert(`Switched to ${$(this).children('a').text()} language`);
  $(this).prependTo(language);
  setCookie('bud-lang', $(this).children('a').text(), 360 );
});
