
// WAYPOINTS FOR SCROLL EFFECT
    $(window).on('scroll', function() {
    var home = $('#home').height();
    var top = $(window).scrollTop();
    var nav = $('#nav');
    if (top < home*.30) {
       nav.removeClass('nav-solid').fadeIn(200);
    }
    else {
        nav.addClass('nav-solid').fadeIn(200);
    }
})
