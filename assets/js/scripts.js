$(function() {
	'use strict';

//DIRECT LINKS//

    if(window.location.href.indexOf("#go") > -1) {
        $('.slide--article-1').addClass('slide--show').delay(800);
        $('.walkingman-off').addClass('walkingman');
        $('.imgslideblur-off').addClass('imgslideblur');
    };

 //FOOTER NAV//
    $('.footer__articles__title').click(function (e) {   
          e.preventDefault();
          $('.slide').animate({scrollTop: 0}, 100);
        }
      );
    
});
