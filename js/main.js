$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        adaptiveHeight: true,
        speed:500,
        autoplay:true,
        autoSpeed:300,
        pauseOnHover:false,
        fade:false,
        responsive: [
            {
                breakpoint: 800,
                settings:{
                    arrows:false
                }
            }
        ]
    });
});


$(document).ready(function(){
    $('.feedback').slick({
        arrows:false,
        adaptiveHeight: true,
        speed:500,
        autoplay:true,
        autoSpeed:500,
        pauseOnHover:true,
        fade:false,
    });
});
