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

