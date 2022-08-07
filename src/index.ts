import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Flip, Draggable);

const bars = gsap.utils.toArray('.box'),
      container1 = document.querySelector('.container1'),
      container2 = document.querySelector('.container2');

document.querySelector('.linkbase').addEventListener('click', () => {
  // Get the initial state
  const state = Flip.getState(bars);
  

  //Switch the parent
  let newContainer = bars[0].parentElement === container1 ? container2 : container1;
  bars.forEach(bar => newContainer.appendChild(bar));
  
  // Do the animation!
  Flip.from(state, {
    // Optional properties related to HOW it's transitioned
    duration: 0.8,
    stagger: 0.05,
    absolute: true,
    scale: true,
    ease: "Power1.out"
  });
});
