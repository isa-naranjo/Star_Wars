window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: '.dots',
    arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
  }
    } )
});

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista2'),{
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: '.dots',
    arrows: {
        prev: '.carousel__anterior2',
        next: '.carousel__siguiente2'
  }
    } )
});