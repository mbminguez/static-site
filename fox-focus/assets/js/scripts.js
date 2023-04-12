$(function() {
	'use strict';

//DIRECT LINKS//

    if(window.location.href.indexOf("#go") > -1) {
        $('.slide--article-1').addClass('slide--show').delay(800);
        $('.walkingman-off').addClass('walkingman');
        $('.imgslideblur-off').addClass('imgslideblur');
    };

    if(window.location.href.indexOf("#like") > -1) {
        $('.slide--article-2').addClass('slide--show').delay(800);
        $('.shadowman-off').addClass('shadowman');
        $('.imgslideblur-off').addClass('imgslideblur');
    };

    if(window.location.href.indexOf("#humble") > -1) {
        $('.slide--article-3').addClass('slide--show').delay(800);
        $('.imgslideblur-off').addClass('imgslideblur');
    };

 //FOOTER NAV//
    $('.footer__articles__title').click(function (e) {   
          e.preventDefault();
          $('.slide').animate({scrollTop: 0}, 100);
        }
      );

 //HERO NAV//

    //TOGGLE//

        $('.toggle-article-1').click(function(){
            $('.slide--article-1').addClass('slide--show');
            $('.slide-close').addClass('slide-close--show');

            $('.noblur').addClass('blurthis');
            $('.noblur').removeClass('blurthisoff');

    //ARTICLES//

        //ARTICLE ONE//
        $('.revealme').addClass('revealfast');
        //ARTICLE TWO//
        $('.shadowman-off').removeClass('shadowman');
        //ARTICLE THREE//
        $('.imgslideblur-off').addClass('imgslideblur');       
	}); 
    
    //TOGGLE//
    
        $('.toggle-article-2').click(function(){
            $('.slide--article-2').addClass('slide--show');
            $('.slide-close').addClass('slide-close--show');

            $('.noblur').addClass('blurthis');
            $('.noblur').removeClass('blurthisoff');

            $('.droneflyaway-off').addClass('droneflyaway');
            $('.droneflyaway-off').removeClass('dronefly');

            $('.jumpout-off').addClass('jumpout');

            $('.swingsmall').removeClass('swingsmall-off');

    //ARTICLES//

        //ARTICLE ONE//
        $('.revealme').addClass('revealfast');
        //ARTICLE TWO//
        $('.shadowman-off').addClass('shadowman');
        //ARTICLE THREE//
        $('.imgslideblur-off').addClass('imgslideblur');
	}); 

    //TOGGLE//

        $('.toggle-article-3').click(function(){
            $('.slide--article-3').addClass('slide--show');
            $('.slide-close').addClass('slide-close--show');

            $('.noblur').addClass('blurthis');
            $('.noblur').removeClass('blurthisoff');

            $('.droneflyaway-off').addClass('droneflyaway');
            $('.droneflyaway-off').removeClass('dronefly');

            $('.jumpout-off').addClass('jumpout');

            $('.swingsmall').removeClass('swingsmall-off');

    //ARTICLES//

            //ARTICLE ONE//
            $('.revealme').addClass('revealfast');
            //ARTICLE TWO//
            $('.shadowman-off').removeClass('shadowman');
            //ARTICLE THREE ADD/
            $('.imgslideblur-off').addClass('imgslideblur');
        });

 //SLIDE NAV//
    
    $('.slide-close').click(function(){
        $(this).removeClass('slide-close--show');
        $('.slide').removeClass('slide--show');

        $('.noblur').removeClass('blurthis'); 
        $('.noblur').addClass('blurthisoff');
    
        $('.droneflyaway-off').addClass('dronefly'); 
        $('.droneflyaway-off').removeClass('droneflyaway');
        $('.jumpout-off').addClass('jumpout');
        
    //ARTICLES//

        //ARTICLE ONE//
        $('.revealme').removeClass('revealfast');
        //ARTICLE TWO//
        $('.shadowman-off').removeClass('shadowman');
        //ARTICLE THREE//
        $('.imgslideblur-off').removeClass('imgslideblur');
	}); 

    $('.slide-back').click(function(){       
        $('.slide').removeClass('slide--show');        
	});

    $('.slide-nav__1').click(function(){ 
        $('.article-1').scrollTop(0);      
        $('.slide').removeClass('slide--show');  
        $('.slide--article-1').addClass('slide--show');

  //ARTICLES//

        //ARTICLE ONE//
        $('.walkingman-off').addClass('walkingman');
        $('.walkingman-off').removeClass('walkingmanout');
        //ARTICLE TWO//
        $('.shadowman-off').removeClass('shadowman');
        //ARTICLE THREE//
        $('.imgslideblur-off').removeClass('imgslideblur');
	});

    $('.slide-nav__2').click(function(){ 
        $('.article-2').scrollTop(0);    
        $('.slide').removeClass('slide--show');  
        $('.slide--article-2').addClass('slide--show');

    //ARTICLES//

        //ARTICLE ONE//
        $('.walkingman-off').removeClass('walkingman');
        //ARTICLE TWO ADD//
        $('.shadowman-off').addClass('shadowman');
        //ARTICLE THREE//
        $('.imgslideblur-off').removeClass('imgslideblur');
	});

    $('.slide-nav__3').click(function(){   

        $('.slide').removeClass('slide--show');  
        $('.slide--article-3').addClass('slide--show');

    //ARTICLES//

        //ARTICLE ONE//
        $('.walkingman-off').removeClass('walkingman');
        //ARTICLE TWO//
        $('.shadowman-off').removeClass('shadowman');
        //ARTICLE THREE ADD//
        $('.imgslideblur-off').addClass('imgslideblur');
	});
    
});


class BeforeAfter {
    constructor(enteryObject) {

        const beforeAfterContainer = document.querySelector(enteryObject.id);
        const before = beforeAfterContainer.querySelector('.bal-before');
        const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
        const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
        const handle = beforeAfterContainer.querySelector('.bal-handle');
        var widthChange = 0;

        beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
        window.onresize = function () {
            beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
        }
        before.setAttribute('style', "width: 50%;");
        handle.setAttribute('style', "left: 50%;");

        //touch screen event listener
        beforeAfterContainer.addEventListener("touchstart", (e) => {

            beforeAfterContainer.addEventListener("touchmove", (e2) => {
                let containerWidth = beforeAfterContainer.offsetWidth;
                let currentPoint = e2.changedTouches[0].clientX;

                let startOfDiv = beforeAfterContainer.offsetLeft;

                let modifiedCurrentPoint = currentPoint - startOfDiv;

                if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10) {
                    let newWidth = modifiedCurrentPoint * 100 / containerWidth;

                    before.setAttribute('style', "width:" + newWidth + "%;");
                    afterText.setAttribute('style', "z-index: 1;");
                    handle.setAttribute('style', "left:" + newWidth + "%;");
                }
            });
        });

        //mouse move event listener
        beforeAfterContainer.addEventListener('mousemove', (e) => {
            let containerWidth = beforeAfterContainer.offsetWidth;
            widthChange = e.offsetX;
            let newWidth = widthChange * 100 / containerWidth;

            if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
                before.setAttribute('style', "width:" + newWidth + "%;");
                afterText.setAttribute('style', "z-index:" + "1;");
                handle.setAttribute('style', "left:" + newWidth + "%;");
            }
        })

    }
}