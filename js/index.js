$(function(){
    var mySwiper = new Swiper(".swiper-container", {
        direction: "vertical",
        onSlideChangeStart: function(sw){
            var sliders = $(".swiper-slide");
            sliders.eq(sw.activeIndex).addClass("play");
            sliders.eq(sw.previousIndex).removeClass("play");
        }
    })
})