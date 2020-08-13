
$(function(){ 
        
$('.center').slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 8,
    arrows:false,
    autoplay:false,
    infinite:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  
});
