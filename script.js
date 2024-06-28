document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  // Hide preloader and show content after 2 seconds
  setTimeout(function() {
    preloader.style.display = "none";
    content.style.display = "block";
  }, 2000); // Adjust the timeout (in milliseconds) as needed
});

// This is a function to add locomaotive JS for Scrolling

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotive();
  
  // This is a function to add animation in accessories
  function animateAccessories() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top -85%",
        scrub: 1,
      },
    });
    tl.from(
      ".line1.left",
      {
        opacity: 0,
        x: -250,
        duration: 0.5,
      },
      "#page2 .line1"
    );
    tl.from(
      ".line1.right",
      {
        opacity: 0,
        x: 250,
        duration: 0.5,
      },
      "#page2 .line1"
    );
    tl.from(
      ".line2.left",
      {
        opacity: 0,
        x: -250,
        duration: 0.5,
      },
      "#page2 .line2"
    );
    tl.from(
      ".line2.right",
      {
        opacity: 0,
        x: 250,
        duration: 0.5,
      },
      "#page2 .line2"
    );
    tl.from(
      ".line3.left",
      {
        opacity: 0,
        x: -250,
        duration: 0.5,
      },
      "#page2 .line3"
    );
    tl.from(
      ".line3.right",
      {
        opacity: 0,
        x: 250,
        duration: 0.5,
      },
      "#page2 .line3"
    );
    tl.from(
      ".line4.left",
      {
        opacity: 0,
        x: -250,
        duration: 0.5,
      },
      "#page2 .line4"
    );
    tl.from(
      ".line4.right",
      {
        opacity: 0,
        x: 250,
        duration: 0.5,
      },
      "#page2 .line4"
    );
  }
  animateAccessories();


////////////////////////////////
  // DELL TECHNOLOGY SHOWCASE///
////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  const controls = document.querySelectorAll('input[name="slider-control"]');
  const indicators = document.querySelectorAll('.js-slider-indi');
  let currentIndex = 0;
  const slideInterval = 4000; 

  // Function to go to a specific slide
  function goToSlide(index) {
      controls[index].checked = true;
      currentIndex = index;
  }

  // Function to go to the next slide
  function nextSlide() {
      let newIndex = currentIndex + 1;
      if (newIndex >= controls.length) {
          newIndex = 0;
      }
      goToSlide(newIndex);
  }

  // Set up automatic slide cycling
  let autoSlide = setInterval(nextSlide, slideInterval);

  // Pause auto sliding when mouse is over the slider
  document.querySelector('.js-slider').addEventListener('mouseenter', function() {
      clearInterval(autoSlide);
  });

  // Resume auto sliding when mouse leaves the slider
  document.querySelector('.js-slider').addEventListener('mouseleave', function() {
      autoSlide = setInterval(nextSlide, slideInterval);
  });

  // Add click event to indicators
  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', function() {
          goToSlide(index);
      });
  });

  // Add keyboard navigation
  document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
          nextSlide();
      } else if (event.key === 'ArrowLeft') {
          let newIndex = currentIndex - 1;
          if (newIndex < 0) {
              newIndex = controls.length - 1;
          }
          goToSlide(newIndex);
      }
  });
});

// Video Animation
function videoAnimation(){
  document.querySelector("#page4 #ftext button").addEventListener("mouseover", function(e) {
    gsap.to("#page4 #future video",{
        opacity: 1,
        duration: 1,
        ease: Power4,
    })
    gsap.to("#page4 #future #ftext h1",{
      opacity: 0,
      // display: "none",
      duration: 0.2,
      ease: Power4,
    })
    gsap.to("#page4 #future #ftext",{
      backgroundColor: "transparent",
      duration: 0.2,
      // ease: Power4,
    })
  } );
  
  document.querySelector("#page4 #ftext button").addEventListener("mouseleave", function(e) {
    gsap.to("#page4 #future video",{
        opacity: 0,
        duration: 1,
        ease: Power4,
    })
    gsap.to("#page4 #future #ftext h1",{
      opacity: 1,
      duration: 0.2,
      ease: Power4,
    })
  } );
}

videoAnimation();
