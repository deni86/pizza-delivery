$(document).ready(function () {

   $('.js--pizzas').waypoint(function (direction) {
      if (direction == "down") {
          $('#nav-bar').addClass('sticky');
      } else {
          $('#nav-bar').removeClass('sticky');
      }
   }, { offset: '75px;' }); 


    /*Navigation scroll*/
    $(function () {//Ovdje smo skinuli neki code sa css-trics za smooth-scrolling navigaconih linkova do određenih sekcija kojim dajemo id a onda taj id povzujemo sa href="id" da kada kliknemo da nas odvede do sekcije
        $('a[href*="#"]:not([href="#"])').click(function () {//Selektuje link elem. koji pocinje sa #
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {//ako id tog elem. postoji onda ce nas scroll-ovati ka njemu u 1 sekundi
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Mobile nav */
    $('.js--nav-icon').click(function () {

        var nav = $('.js--main-nav');/*da ne ponavljamo stalno code stavili smo ga u prom. koju cemo koristiti*/
        var icon = $('.js--nav-icon i');/*ikona unutar elem. koji ima klasu .js--nav-icon*/

        nav.slideToggle(400);/*0.2 sec.*/

        if (icon.hasClass('ion-md-menu')) { /*ako elem. koji smo selekt. tj. i ima klasu .ion-navicon.round onda...*/
            icon.addClass("ion-md-close");/*...dodajemo mu ovu klasu*/
            icon.removeClass("ion-md-menu"); /*a brisemo staru*/
        } else {
            icon.addClass('ion-md-menu');/*radimo obrnuto*/
            icon.removeClass("ion-md-close");
        }

    });

});



