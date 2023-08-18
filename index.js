function locomotive_scroll() {
      gsap.registerPlugin(ScrollTrigger);

      const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".main"),
            smooth: true
      });

      locoScroll.on("scroll", ScrollTrigger.update);


      ScrollTrigger.scrollerProxy(".main", {
            scrollTop(value) {
                  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                  return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
      });

      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();
}

locomotive_scroll();

// FOR MOVING MOUSE 

let crsr = document.querySelector(".cursor")
let main = document.querySelector(".main")

document.addEventListener("mousemove", function (dets) {
      crsr.style.left = dets.x + 20 + "px"
      crsr.style.top = dets.y + 20 + "px"
})

// FOR MOVING TEXT AND VIDEO ANIMATION

let tl = gsap.timeline({
      scrollTrigger: {
            // markers: true,
            trigger: ".page1 h1",
            scroller: ".main",
            start: "top 27%",
            end: "top 0",
            scrub: 3
      }
})

tl.to(".page1 h1", {
      x: -200,
}, "anime")

tl.to(".page1 h2", {
      x: 200,
}, "anime")

tl.to(".page1 video", {
      width: "90%",
}, "anime")

// FOR CHANGIN BGC 

let tl2 = gsap.timeline({
      scrollTrigger: {
            // markers: true,
            trigger: ".page1 h1",
            scroller: ".main",
            start: "top -100%",
            end: "top -130%",
            scrub: 3
      }
})

tl2.to(".main", {
      backgroundColor: "#fff",
})

//FOR CHANGING BGC

let tl3 = gsap.timeline({
      scrollTrigger: {
            // markers: true,
            trigger: ".page3-content",
            scroller: ".main",
            start: "top -20%",
            end: "top -40%",
            scrub: 3
      }
})

tl3.to(".main", {
      backgroundColor: "#0f0f0d"
})

//APPLYING EFFECT OF IMAGE POP on HOVER ON ROW

let Img = document.getElementsByClassName("hello");
let row = document.querySelectorAll(".b4-row")

row.forEach((elem) => {

      elem.addEventListener("mouseenter", function () {
            let atr = elem.getAttribute("b4-image");
            crsr.style.height = "20vw"
            crsr.style.width = "20vw"
            crsr.style.borderRadius = "0"
            crsr.style.backgroundImage = `url(${atr})`

      })
      elem.addEventListener("mouseleave", function () {
            crsr.style.height = "2vw"
            crsr.style.width = "2vw"
            crsr.style.borderRadius = "50%"
            crsr.style.backgroundImage = "none"
      })
})

// APPLYING NAVBAR DISPLAY

let head = document.querySelector(".heading")
let track = document.querySelector(".track")
let nav = document.querySelectorAll(".nav-part2 a")

nav.forEach(elem => {
      elem.addEventListener("mouseenter", function () {
            head.style.display = "flex"
            head.style.opacity = "1";
            console.log(elem.getAttribute("name"));
            if (elem.getAttribute("name") === "HOME") {
                  track.innerHTML = `<h1>HOME HOME HOME HOME HOME HOME</h1>`;
            }
            if (elem.getAttribute("name") === "WORK") {
                  track.innerHTML = `<h1>WORK WORK WORK WORK WORK WORK W</h1>`;
            }
            if (elem.getAttribute("name") === "SERVICES") {
                  track.innerHTML = `<h1>SERVICES SERVICES SERVICES SERVICES</h1>`;
            }
            if (elem.getAttribute("name") === "STUDIO") {
                  track.innerHTML = `<h1>STUDIO STUDIO STUDIO STUDIO STUDIO STD</h1>`;
            }
            if (elem.getAttribute("name") === "JOURNAL") {
                  track.innerHTML = `<h1>JOURNAL JOURNAL JOURNAL JOURNAL JO</h1>`;
            }
            if (elem.getAttribute("name") === "CONTACT") {
                  track.innerHTML = `<h1>CONTACT CONTACT CONTACT CONTACT CO</h1>`;
            }
            if (elem.getAttribute("name") === "ARCHIVE") {
                  track.innerHTML = `<h1>ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCH</h1>`;
            }
      })
      elem.addEventListener("mouseleave", function () {
            head.style.display = "none"
            head.style.opacity = "0";
      })
})

// APPplYING EFFECT OF MAGNETIC CURSOR ON BUBBLE

let circle = document.querySelector(".p5-circle");

circle.addEventListener("mousemove" , (e) =>{
      let x=e.offsetX
      let y=e.offsetY
      let circleW = circle.clientWidth;
      let circleH = circle.clientHeight;
      let moveX=(x-circleW/1);
      let moveY=(y-circleH/1);
      circle.style.transform=`translateX(${moveX}px) translateY(${moveY}px)`;
      crsr.style.display="none"
})

circle.addEventListener("mouseout",e => {
      circle.style.transform=``;
      crsr.style.display="block"
})
