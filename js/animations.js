$(document).ready(function (){

$('.hero-text').waypoint(function(direction) {
    $('.hero-text').addClass('animate__animated animate__fadeInDown');
}, {
    offset: '50%'
});

$('.section-w').waypoint(function(direction) {
    $('.section-w').addClass('animate__animated animate__slideInLeft'); 
}, {
    offset: '50%' 
});


});