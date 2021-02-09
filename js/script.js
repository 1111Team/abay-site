$(document).ready(() => {
    $('.header_burger').click(function(){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
        });
});
    $('.slider').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        adaptiveWidht: true,
        slidestoShow: 1,
        slidestoScroll: 1,
        waitforanimate: false,
        speed: 100,
        infinite: true,
        autoplay: true,
        autoplayspeed: 1000,
        pauseonfocus: true,
        pauseonover: false,
        pauseondotshover: true,
        centerMode: false,
        variableWidht: false,
        touchthreshold: 25,
        variableWidht: false,
    });
$(document).on('click', function(divclose)
{
    if($(divclose.target).closest(".header_burger.active").length == 0 ){
        $('.header_burger.active, .header_menu.active').toggleClass('active');
        $('body').toggleClass('lock');
    }
});
