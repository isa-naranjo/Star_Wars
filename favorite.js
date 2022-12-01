window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__listafilms'),{
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: '.dots',
    arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
  }
    } )
});


window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__listaseries'),{
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: '.dots',
    arrows: {
        prev: '.carousel__anterior2',
        next: '.carousel__siguiente2'
  }
    } )
});