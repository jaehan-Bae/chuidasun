$(function(){
  // Header Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('header nav').toggleClass('active');
  });
  $('header nav a, section').click(function(){
    $('header nav, .trigger').removeClass('active');
  });
  
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

  /* Header Scroll Change */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .btn-top').addClass('active');
    } else {
      $('header, .btn-top').removeClass('active');
    }
  });


    /* Wow Scroll Reveal Animation */
    wow = new WOW({
      boxClass: 'wow',
      offset: 150,
      mobile: true
    })
    wow.init()
    
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
    });
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

// Section: class next&prev
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


