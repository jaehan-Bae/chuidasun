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

// Slick Slider - Class
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
  infinite: true,
  speed: 10,
  slidesToShow: 4,
  slidesToScroll: 4
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

  // Slick Slider - Story
  $('.story-right').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 2
  });


// tip-modal
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

// story-item
// $(function() {
//   const prev = $('.controller:before');
//   const next = $('.controller:after');
//   const slides = document.querySelector('.story-slide');
//   const slideImg = document.querySelectorAll('.controller');
//   let currentIdx = 0;
//   const slideCount = slideImg.length;
//   const slideWidth = 550;
//   const slideMargin = 100;

//   slide.style.width = (slideWidth + slideMargin) * slideCount + 'px';

//   function storySlide(num) {
//     slides.style.left = -num * 450 * 'px';
//     currentIdx = num;
//   }

//   prev.on('click', function() {
//     if (currentIdx !== 0) {
//       storySlide(currentIdx -1);
//     }
//   });
//   next.on('click', function() {
//     if (currentIdx !== slideCount -1) {
//       storySlide(currentIdx +1);
//     }
//   });
// })
$(function(){
  $('.next').click(function(){
    var currentSlide = $('.controller.active');
    var nextSlide = currentSlide.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.controller:first');
    }
    currentSlide.removeClass('active');
    nextSlide.addClass('active');
  });
  $('.prev').click(function(){
    var currentSlide = $('.controller.active');
    var prevSlide = currentSlide.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.controller:last');
    }
    currentSlide.removeClass('active');
    prevSlide.addClass('active');
  });

});


