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
  
  // Thsi is a function to add animation in accessories
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