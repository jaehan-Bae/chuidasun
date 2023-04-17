$(function(){
  /* Slick Slider - Welcome */
  $('.welcome-slide').slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });

// Slick Slide - Class
$('.class-head span').click(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  $('.class-slide').removeClass('active');
  $('#' + $(this).attr('data-alt')).addClass('active');
  $('.class-slide').slick('slickGoTo', 0);

  $('.class-slide').resize();
  $('.class-slide').slick('refresh');
});

$('.class-slide').slick({
  setPosition: 0,
  autoplay:true,
  infinite:true,
  autoplaySpeed:2000,
  dots: false,
  infinite: false,
  speed: 10,
  slidesToShow: 4,
  slidesToScroll: 4,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
// }).on('init', function(){
//   $(this).addClass('loaded');
});

// instar-slick
$('.instar-slide').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
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

// Slick Slide - instar
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
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

// tip-mpdal
$(function(){
  let modals = document.getElementsByClassName('tip-modal');
  let btns = document.getElementsByClassName('tip-item');
  let funcs = [];

  function Modal(num) {
    let modal = modals[num];
    let close = modal.getElementsByClassName('modal-close')[0];
    return function() {
      btns[num].onclick = function() {
        modal.style.display = "block";
      }
      close.onclick = function() {
        modal.style.display = "none";
      }
    }
  }

  for(let i=0; i<btns.length; i++){
    funcs[i] = Modal(i);
    console.log(funcs[i])
  }
  for(let j=0; j<btns.length; j++){
    funcs[j]();
  }

  window.addEventListener('click', function(event) {
    let modal = event.target.closest('.tip-modal');
    if(modal) {
      modal.style.display = "none";
    }
  });
});

// event
$(function() {
  // const photos = document.querySelectorAll('.event-photo');

  // photos.forEach(photo => {
  //   photo.addEventListener('click',()=>{
  //     photos.forEach(p=>{
  //       p.classList.add('gray-out');
  //       p.classList.remove('enlarge');
  //     });
  //     photo.classList.remove('gray-out');
  //     photo.classList.add('enlarge');
  //   });
  // });

})