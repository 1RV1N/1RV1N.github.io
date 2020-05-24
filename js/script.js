///////////////////////////////  Ecrito Anomation  /////////////////////////
var tmax_optionsGlobal = {
  repeat: 0,
  // repeatDelay: 5,
  // yoyo: true
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = '.figure svg *',
    stagger_val = 0.0125,
    duration = 0.3;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-500, 500),
    y: '+=' + getRandom(-500, 500),
    rotation: '+=' + getRandom(-720, 720),
    scale: 0,
    opacity: 0
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeInOut
};

var $svg = $('svg');
// $svg.hover(
//   function() {
//     tl.timeScale(0.15);
//   },
//   function() {
//     tl.timeScale(1);
//   });

tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

///////////////////////////// Ecrito Anomation ///////////////////////////////////

