window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: '.dots',
    arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
    }
    } )
});
