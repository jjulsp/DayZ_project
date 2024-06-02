$(document).ready(function(){
    const navOffset = $('#nav').offset().top;
    $(window).scroll(function(){
        const scrolled = $(this).scrollTop();
            if (scrolled > navOffset) {
        // шапка прилипает
                $('#wrapper').addClass('nav-fixed');
            } else if (scrolled < navOffset) {
        // шапка отлипает        
                $('#wrapper').removeClass('nav-fixed');
            }

    })

})