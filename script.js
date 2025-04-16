function locoanimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp:0.055,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}


locoanimation();



function page2anim(){
    var rightElems = document.querySelectorAll('.right-elem')
rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
    })
    });
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
    })
    });
    elem.addEventListener("mousemove",function(e){
        gsap.to(elem.childNodes[3],{
            x:e.x - elem.getBoundingClientRect().x - 50,
            y:e.y - elem.getBoundingClientRect().y - 150
        });
    });
});
};

page2anim();

function navAnimation() {
    var nav = document.querySelector("nav .nav-part2")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.3
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.4
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
};
navAnimation();

function page3(){
    var click = document.querySelector(".page3-circle");
var start = document.querySelector("#page3 video");

click.addEventListener("click", function () {
  start.play(); // Correctly call the play() method
  gsap.to(start, { // The parentheses and braces were misplaced
    opacity: 1,
    transform: "scaleX(1) scaleY(1)",
    borderRadius: "0",
    ease:"allease",
    duration:0.7
  });
});

start.addEventListener("click",function(){
  start.pause();
  gsap.to(start, {
    opacity: 0,
    transform: "scaleX(0.7) scaleY(0)",
    borderRadius: "30%",
    ease:"allease",
    duration:0.7
  });  
})

}

page3();

function page4video(){
    var sections = document.querySelectorAll(".sec-right");
sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load();
    })
})
};

page4video();


function page8anim(){
    gsap.to("#btm8-part2 h4",{
        x:0,
        duration:1,
        stagger:{
            amount:0.6
        },
        scrollTrigger:{
            trigger:"#btm8-part2",
            start:"top 80%",
            end:"top -50%",
            marker:true,
            scrub:1,   
            scroller:"#main"     
        }
    })
    gsap.to("#btm8-part3 h4",{
        x:0,
        duration:1,
        stagger:{
            amount:0.6
        },
        scrollTrigger:{
            trigger:"#btm8-part2",
            start:"top 80%",
            end:"top -50%",
            marker:true,
            scrub:1,     
            scroller:"#main"      
        }
    })
    gsap.to("#btm8-part4 h4",{
        x:0,
        duration:1,
        stagger:{
            amount:0.6
        },
        scrollTrigger:{
            trigger:"#btm8-part2",
            start:"top 80%",
            end:"top -50%",
            marker:true,
            scrub:1,
            scroller:"#main"   
        }
    })
    

}
page8anim();    


function lodinganim(){
    var tl = gsap.timeline();

tl.from("#page1",{
    opacity:0,
    duration:0.3,
    delay:0.2
})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2)  translateY(80%)",
    borderRadius:"50px",
    ease:"expo.out",
    duration:1.8
})
tl.from("nav",{
    opacity:0,
})
tl.from("#page1 h1,#page1 p , #page1 div",{
    opacity:0,
    stagger:0.2,
    duration:0.5
})
}

lodinganim();

gsap.to(".sticky-element", {
    scrollTrigger: {
      trigger: ".sticky-element",
      scroller: "#main", // Use Locomotive Scroll's container
      start: "top top",
      end: "+=910", // Distance for sticky
      scrub: true,
      pin: true
    }
  });
  gsap.to(".strick", {
    scrollTrigger: {
      trigger: ".strick",
      scroller: "#main", // Use Locomotive Scroll's container
      start: "top top",
      end: "+=165", // Distance for sticky
      scrub: true,
      pin: true
    }
  });