$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        slidesToShow:3,
        autoplay:true,
        speed:777,
        autoplaySpeed:4000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        centerMode:true,
        asNavFor:".sliderBig",
        responsive:[
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow:2,
                }
            },{
                breakpoint: 1000,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });
    $('.sliderBig').slick({
        arrows:false,
        fade:true,
        asNavFor:".slider",
    });     
});