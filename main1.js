/**First Slider */

 //$(".slider-one").slick();
$('.slider-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});

/**Second Slider */

 $('.slider-two')
 .not(".slick-initialized")
 .slick({
     prevArrow:".site-slider-two .prev",
     nextArrow:".site-slider-two .next",
     slidesToShow:5,
     slidesToScroll:1,
     autoplaySpeed: 3000
 });

/**Third Slider */

 $('.slider-three')
 .not(".slick-initialized")
 .slick({
     prevArrow:".site-slider-three .prev",
     nextArrow:".site-slider-three .next",
     slidesToShow:5,
     slidesToScroll:1,
     autoplaySpeed: 3000
 });

 /**Fourth Slider */

 $('.slider-four')
 .not(".slick-initialized")
 .slick({
     prevArrow:".site-slider-four .prev",
     nextArrow:".site-slider-four .next",
     slidesToShow:5,
     slidesToScroll:1,
     autoplaySpeed: 3000
 });

 /**Fifth Slider */

 $('.slider-five')
 .not(".slick-initialized")
 .slick({
     prevArrow:".site-slider-five .prev",
     nextArrow:".site-slider-five .next",
     slidesToShow:5,
     slidesToScroll:1,
     autoplaySpeed: 3000
 });

 let navbar = $(".navbar");

$(window).scroll(function(){
    let oTop = $(".section-1").offset().top - window.innerHeight;
 if($(window).scrollTop()>oTop){
     navbar.addClass("sticky");
 }else{
   navbar.removeClass("sticky")
 
 }
});

