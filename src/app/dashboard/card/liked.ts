import * as mojs from "mo-js";

function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

function Animocon(el, options) {
  this.el = el;
  this.options = extend({}, this.options);
  extend(this.options, options);

  this.timeline = new mojs.Timeline();

  for (var i = 0, len = this.options.tweens.length; i < len; ++i) {
    this.timeline.add(this.options.tweens[i]);
  }

  this.timeline.replay();
}

Animocon.prototype.options = {
  tweens: [new mojs.Burst({})]
};

function init(id) {
  if (!id) {
    return;
  }
  
  const el = document.querySelector(`button#button-${id}`);
	
	new Animocon(el, {
    tweens: [
      // ring animation
      new mojs.Shape({
        parent: el,
        duration: 750,
        type: "circle",
        radius: { 0: 40 },
        fill: "transparent",
        stroke: "#F35186",
        strokeWidth: { 35: 0 },
        opacity: 0.2,
        top: "45%",
        easing: mojs.easing.bezier(0, 1, 0.5, 1)
      }),
      new mojs.Shape({
        parent: el,
        duration: 500,
        delay: 100,
        type: "circle",
        radius: { 0: 20 },
        fill: "transparent",
        stroke: "#F35186",
        strokeWidth: { 5: 0 },
        opacity: 0.2,
        x: 40,
        y: 60,
        easing: mojs.easing.sin.out
      }),
      new mojs.Shape({
        parent: el,
        duration: 500,
        delay: 180,
        type: "circle",
        radius: { 0: 10 },
        fill: "transparent",
        stroke: "#F35186",
        strokeWidth: { 5: 0 },
        opacity: 0.5,
        x: -10,
        y: 80,
        isRunLess: true,
        easing: mojs.easing.sin.out
      }),
      new mojs.Shape({
        parent: el,
        duration: 800,
        delay: 240,
        type: "circle",
        radius: { 0: 20 },
        fill: "transparent",
        stroke: "#F35186",
        strokeWidth: { 5: 0 },
        opacity: 0.3,
        x: -70,
        y: 10,
        easing: mojs.easing.sin.out
      }),
      new mojs.Shape({
        parent: el,
        duration: 800,
        delay: 240,
        type: "circle",
        radius: { 0: 20 },
        fill: "transparent",
        stroke: "#F35186",
        strokeWidth: { 5: 0 },
        opacity: 0.4,
        x: 80,
        y: 50,
        easing: mojs.easing.sin.out
      }),
      new mojs.Shape({
        parent: el,
        duration: 1000,
        delay: 300,
        type: "circle",
        radius: { 0: 15 },
        fill: "transparent",
        stroke: "#F35186",
        strokeWidth: { 5: 0 },
        opacity: 0.2,
        x: 20,
        y: 100,
        easing: mojs.easing.sin.out
      }),
      new mojs.Shape({
        parent: el,
        duration: 600,
        delay: 330,
        type: "circle",
        radius: { 0: 25 },
        fill: "transparent",
        stroke: "#F35186",
        strokeWidth: { 5: 0 },
        opacity: 0.4,
        x: -40,
        y: 90,
        easing: mojs.easing.sin.out
      }),
      // icon scale animation
      new mojs.Tween({
        duration: 1200,
        easing: mojs.easing.ease.out,
        onComplete: function () {
          const shapes = document.querySelectorAll('[data-name=mojs-shape]');
          shapes.forEach(function(item) {
            item.parentNode.removeChild(item);
          })
        }
      })
    ],
  });
}

export {init}
