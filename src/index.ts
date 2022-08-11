import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Scroll into view
function lineAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline_component",
      start: "top center",
      end: "bottom top",
      toggleActions: "restart none none reverse"
    }
  });
  tl.to(".page-frame_cutout", {
    width: '40%',
    ease: "power1.out",
    duration: 1.4
  });
    tl.to(".page-frame_scroll", {
    height: "0%",
    ease: "power3.out",
    duration: 1.1
  },
  0.5
  );
}
lineAnimation();

let cmsItem = $(".timeline_list-item");
let benefit = $(".sponsor-card_base");
let zIndex = 1;

$(".timeline_trigger-item").each(function (index) {
  let itemTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      toggleActions: "restart none none reverse"
    }
  });
  if (index > 0) {
    itemTimeline.from(cmsItem.eq(index), {
      opacity: 0,
      duration: 1.5
    });
  }
      if (index > 0) {
    itemTimeline.from(benefit.eq(index), {
      scale: 1,
      opacity: 1,
      duration: 1.5
    });
  }
  // Text timeline
  let textTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "center bottom",
      end: "bottom top",
      scrub: 1,
      onEnter: () => {
        zIndex = zIndex + 1;
        cmsItem.eq(index).css("z-index", zIndex);
      },
      onEnterBack: () => {
        zIndex = zIndex + 1;
        cmsItem.eq(index).css("z-index", zIndex);
      }
    }
  });
  textTimeline.from(cmsItem.eq(index).find(".heading-large .line, .text-size-regular .line"), {
    y: "100%",
    opacity: 0,
    stagger: { each: 0.15 },
    ease: "power2.out",
    duration: 1.5

  });
  if (index < cmsItem.last().index()) {
    textTimeline.to(cmsItem.eq(index).find(".heading-large .line, .text-size-regular .line"), {
    opacity: 0,
    scale: 0.92,
    stagger: { each: 0.15 },
    ease: "power2.out",
    duration: 1.5
    });
  }
   textTimeline.to({}, { duration: 1.5 });
   
    if (index < benefit.last().index()) {
  textTimeline.to(benefit.eq(index).find(".card-mover"), {
    scale: 1.15,
    opacity: 0,
    ease: "power1.out",
    duration: 1.5
   });
  }
  textTimeline.to({}, { duration: 1.5 });

});


// Run function for each element with the class .odometer._2
$('.odometer._2').each(function () {
  // The Odometer script always represents a single 0 with an 
  // initial value of 0 - no matter how many zeros are inserted. 
  // For this reason there is a "1" at the beginning and at the end, 
  // which is added to the desired value. 
  // Note: The 1 at the end and at the end is also displayed in the 
  // odometer, so you have to hide them via custom CSS. 
  // In the last section of this page you will learn how to do that.
  var startValue = "1" + "000000.00" + "1";
  // To avoid layout shifting, the endValue is constructed just 
  // like the startValue - only this time with the desired end 
  // value in the middle.
  var endValue = "1" + "123456.78" + "1";
  // Options for the odometer
  var odometer = new Odometer({
    // el tells the odometer script which element should be the odometer
    el: this,
    // value tells the odometer script what the start value should be
    value: startValue,
    // Change how digit groups are formatted, and how many digits 
    // are shown after the decimal point
    format: '(,ddd).ddd',
    // Change how long the javascript expects the CSS animation to take
    duration: 9000,
  });
  // Init odometer with the defined start value
  odometer.render(startValue);
  // Our trigger should be the current odometer (so "this" is .odometer._2)
  ScrollTrigger.create({
    // Our trigger should be the current odometer (so "this" is .odometer._2)
    trigger: this,
    // The following onEnter function should be triggered when 70% of the 
    // viewport reaches the vertical center of our odometer
    start: "center 70%",
    // When the above condition is reached, the odometer should 
    // be animated to the endValue
    onEnter: () => {
      odometer.update(endValue)
    },
  });
});
