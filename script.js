$(document).ready(function(){
    $('.slider').slick({
        arrows: true, //показать стрелки, навигацию//
        dots: true,
        adaptiveHeight:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing:'ease',
        infinite: true,
        initialSlide: 3,
        autoplay: false,
        autoplaySpeed: 500,
        centerMode: true,
        variableWidth:true,
    });
});