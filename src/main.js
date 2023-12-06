import { Application } from '@splinetool/runtime';
import barba from '@barba/core';
import { gsap } from "gsap/dist/gsap";

let spline, obj;
let isToggled = false;

// Initialize Spline only once
function initSpline() {
    if (spline) return; // Check if Spline is already initialized

    const canvas = document.getElementById('canvas3d');
    spline = new Application(canvas);

    spline.load('https://prod.spline.design/zBBaOmVltDuUag17/scene.splinecode')
    .then(() => {
        obj = spline.findObjectById('1abf83a1-5d8c-4819-a952-7bcd8afbcb11');
    });
}

// Handle click events using event delegation
function handleClick(event) {
    if (event.target.classList.contains('click-text')) {
        isToggled = !isToggled;
        if (isToggled) {
            spline.emitEvent('mouseDown', obj.name);
        } else {
            spline.emitEventReverse('mouseDown', obj.name);
        }
    }
}

// Attach event listener to a static parent element for delegation
const staticParent = document.body; // You can choose any static parent element
staticParent.addEventListener('click', handleClick);

// Initialize Barba.js with transitions
barba.init({
    transitions: [{
        leave(data) {
            return gsap.to(data.current.container, { opacity: 0 });
        },
        enter(data) {
            return gsap.from(data.next.container, { opacity: 0 });
        }
    }]
});

initSpline(); // Initial call to setup Spline
