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



<!-- ODOMETER 1 -->
<script>
// Run function for each element with the class .odometer._1
$('.odometer._1').each(function () {
  // Desired start value of the odometer
  var startValue = 123456;
  // Options for the odometer
  var odometer = new Odometer({
    // el tells the odometer script which element should be the odometer
    el: this,
    // value tells the odometer script what the start value should be
    value: startValue,
  });
  // Init odometer with the defined start value
  odometer.render(startValue);

  setInterval(function () {
    odometer.update(startValue++);
  }, 3000);
});
</script>


<!-- ODOMETER 2 -->
<script>
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
</script>


<!-- ODOMETER 3 -->
<script>
// Run function for each element with the class .odometer._3
$('.odometer._3').each(function () {

  var startValue = "1" + "0000,00" + "1";
  // To avoid layout shifting, the endValue is constructed just 
  // like the startValue - only this time with the desired end 
  // value in the middle.
  var endValue = "1" + "3999,99" + "1";
  // Options for the odometer
  var odometer = new Odometer({
    // el tells the odometer script which element should be the odometer
    el: this,
    // Change how digit groups are formatted, and how many digits 
    // are shown after the decimal point
    format: '(.ddd),ddd',
    // Change how long the javascript expects the CSS animation to take
    duration: 6000,
  });
  // Init odometer with the defined start value
  odometer.render(startValue);

  odometer.update(startValue);

  // Init GSAP scrollTrigger
  ScrollTrigger.create({
    // Our trigger should be the current odometer (so "this" is .odometer._3)
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
</script>


<!-- ODOMETER 4 -->
<script>
// Run function for each element with the class .odometer._4
$('.odometer._4').each(function () {
  // Desired start value of the odometer
  var startValue = 12804;
  // Options for the odometer
  var odometer = new Odometer({
    el: this,
    // value tells the odometer script what the start value should be
    value: startValue,
    // Change how digit groups are formatted, and how many digits 
    // are shown after the decimal point
    format: '(,ddd)',
    // Change how long the javascript expects the CSS animation to take
    duration: 2500,
  });
  // Init odometer with the defined start value
  odometer.render(startValue);

  setInterval(function () {
    odometer.update(startValue += 68);
  }, 2500);
});
</script>


<!-- ODOMETER 5 -->
<script>
// Run function for each element with the class .odometer._5
$('.odometer._5').each(function () {
  // Desired start value of the odometer
  var startValue = 812000;
  // Options for the odometer
  var odometer = new Odometer({
    // el tells the odometer script which element should be the odometer
    el: this,
    // value tells the odometer script what the start value should be
    value: startValue,
    // Change how digit groups are formatted, and how many digits 
    // are shown after the decimal point
    format: '(,ddd)',
    // Change how long the javascript expects the CSS animation to take
    duration: 2000,
  });
  // Init odometer with the defined start value
  odometer.render(startValue);

  // Set an interval that repeats everything in it every 3 seconds
  setInterval(function () {
    // We want to randomly generate a number in a range and add 
    // them to the current value
    // 1. Define your minimum value 
    const min = 1;
    // 2. Define your maximum value 
    const max = 60;
    // Safe a random number between your min and max values and round 
    // them to total numbers without decimals
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    // Optional: Show generated numbers each interval in dev console
    // console.log(randomNumber);

    // Update the odometer and increase by generated number "randomNumber"
    odometer.update(startValue += randomNumber);
  }, 3000);
});
</script>


<!-- ODOMETER 6 -->
<script>
// Run function for each element with the class .odometer._6
$('.odometer._6').each(function () {
  // Desired start value of the odometer
  var startValue = 11634;
  // Desired second value of the odometer
  var secondValue = 28563;
  // Desired third value of the odometer
  var thirdValue = 53247;
  // Options for the odometer
  var odometer = new Odometer({
    // el tells the odometer script which element should be the odometer
    el: this,
    // value tells the odometer script what the start value should be
    value: startValue,
    // Change how digit groups are formatted, and how many digits are shown after the decimal point
    format: '(,ddd)',
    // Change how long the javascript expects the CSS animation to take
    duration: 2500,
  });
  // Init odometer with the defined start value
  odometer.render(startValue);

  // Every time we click on the .odometer-button, the .active class 
  // should be removed from the siblings and added to the clicked button
  document.querySelectorAll('.odometer-button').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.odometer-button')
    .forEach(target => [...target.parentElement.children].filter(c => c === target)
    .forEach(sibling => sibling.classList.remove('active')));
    this.classList.add('active'); 
    });
  });
  // When clicking the first button, the .odometer._6 should animate to the startValue
  $('.odometer-button:nth-child(1)').on('click', function() {
    odometer.update(startValue);
  });
  // When clicking the second button, the .odometer._6 should animate to the secondValue
  $('.odometer-button:nth-child(2)').on('click', function() {
    odometer.update(secondValue);
  });
  // When clicking the third button, the .odometer._6 should animate to the thirdValue
  $('.odometer-button:nth-child(3)').on('click', function() {
    odometer.update(thirdValue);
  });
});
</script>