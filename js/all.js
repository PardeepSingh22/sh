$('.tour-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  prevArrow: $('.slick-pre'), 
  nextArrow: $('.slick-nex'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.testimonial-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  prevArrow: $('.slick-prev'), 
  nextArrow: $('.slick-next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Function to wrap every letter in a span for given class
function wrapLetters(className) {
  var textWrapper = document.querySelector(className);
  if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }
}

// Function to run the animation on each carousel item
function runAnimation(className) {
  anime.timeline({ loop: false })
    .add({
      targets: className + ' .letter', // Targeting each letter in the element
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 2500,
      delay: (el, i) => 30 * i // Delay for each letter based on index
    })
    .add({
      targets: className,
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    })
    .add({
      targets: '.animated4', // Animate the paragraph and link
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1500
    });
}

// Listen for the carousel's item change event
var carouselElement = document.querySelector('#carouselExampleCaptions');

if (carouselElement) {
  carouselElement.addEventListener('slid.bs.carousel', function () {
    // Check the active carousel item and trigger animation based on the class of the item
    var activeItem = document.querySelector('.carousel-item.active');
    if (activeItem) {
      var activeClass = activeItem.querySelector('h2').classList[0]; // Get the class (b1, b2, b3, b4)
      // Wrap letters and run animation for the active class
      wrapLetters('.' + activeClass);
      runAnimation('.' + activeClass);
    }
  });
}

// Initial trigger if the first carousel item is active on page load
if (document.querySelector('.carousel-item.active')) {
  var activeClass = document.querySelector('.carousel-item.active h2').classList[0];
  wrapLetters('.' + activeClass);
  runAnimation('.' + activeClass);
}