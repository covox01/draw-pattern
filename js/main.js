

// var easeNone = Linear.easeNone
// TweenMax.defaultEase = Linear.easeNone;

// function animate(){


//    var tl = new TimelineMax({repeat: -1})
//    tl
//    .fromTo("#out-circle", .15, {drawSVG: "0 0"}, {drawSVG: "15% 0%", ease: easeNone})
//    .to("#out-circle", 1, {drawSVG:"85% 100%", ease: easeNone})
//    .to("#out-circle", .15, {drawSVG: "100% %", ease: easeNone})

//    var tl3 = new TimelineMax({ repeat: -1 })
//    tl3
//       .fromTo("#thin-circle", .15, { drawSVG: "100% 100%" }, { drawSVG: "85% 100%", ease: easeNone })
//       .to("#thin-circle", 1, { drawSVG: "0% 15%", ease: easeNone })
//       .to("#thin-circle", .15, { drawSVG: "0% 0%", ease: easeNone })


//    var tl2 = new TimelineMax
//    tl2.from("#pattern-1", 3, {drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone})
//       .from("#pattern-2", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
//       .from("#pattern-3", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
//       .from("#pattern-4", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
//       .from("#pattern-5", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
//       .from("#pattern-6", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
// }
MorphSVGPlugin.convertToPath("circle");
TweenLite.defaultEase = Linear.easeNone; // needed for seamless loops
TweenMax.set("#out-circle1, #out-circle2, #in-circle1, #in-circle2, #pattern-5-1, #pattern-5-2", { drawSVG: 0 }); // start lines at 0
var sp = 30; // line percentage to show (1-99)
var duration = 2; // change the duration
var duration2 = 2;
var tl = new TimelineMax({ onComplete: startAgain });
var tl2 = new TimelineMax({ onComplete: startAgain });
var overlapDuration = sp / 100 * duration; // allocate the proper percentage of the duration to the overlap
var mainDuration = duration - overlapDuration; // remainder of duration for main animation
var drawTurn = "0% " + sp + "%";

var overlapDuration2 = sp / 100 * duration2; // allocate the proper percentage of the duration to the overlap
var mainDuration2 = duration - overlapDuration2; // remainder of duration for main animation
var drawTurn2 = "0% " + sp + "%";

// -------

TweenMax.set("#pattern-1-1, #pattern-1-2, #pattern-3-1, #pattern-3-2", { drawSVG: 0 }); // start lines at 0
var sp3 = 30; // line percentage to show (1-99)
var duration3 = 3; // change the duration
var tl3 = new TimelineMax({ onComplete: startAgain3 });
var overlapDuration3 = sp3 / 100 * duration3; // allocate the proper percentage of the duration to the overlap
var mainDuration3 = duration3 - overlapDuration3; // remainder of duration for main animation
var drawTurn3 = "0% " + sp3 + "%";

var overlapDuration3 = sp3 / 100 * duration3; // allocate the proper percentage of the duration to the overlap
var mainDuration3 = duration3 - overlapDuration3; // remainder of duration for main animation
var drawTurn3 = "0% " + sp3 + "%";

// ----------

tl.to("#out-circle1, #pattern-5-1", overlapDuration, { drawSVG: drawTurn });
tl.add("startRepeat");
tl.to("#out-circle1, #pattern-5-1", mainDuration, { drawSVG: 100 - sp + "%" + " 100%" });
tl.add("overlap");
tl.to("#out-circle1, #pattern-5-1", overlapDuration, { drawSVG: "100% 100%" }, "overlap");
tl.to("#out-circle2, #pattern-5-2", overlapDuration, { drawSVG: drawTurn }, "overlap");

tl.set("#pattern-5-1", { drawSVG: drawTurn }, "switchPlaces");
tl.set("#pattern-5-2", { drawSVG: "0% 0%" }, "switchPlaces");

tl2.to("#in-circle1", overlapDuration2, { drawSVG: drawTurn2 });
tl2.add("startRepeat");
tl2.to("#in-circle1", mainDuration2, { drawSVG: 100 - sp + "%" + " 100%" });
tl2.add("overlap");
tl2.to("#in-circle1", overlapDuration2, { drawSVG: "100% 100%" }, "overlap");
tl2.to("#in-circle2", overlapDuration2, { drawSVG: drawTurn2 }, "overlap");

tl2.set("#in-circle1", { drawSVG: drawTurn2 }, "switchPlaces");
tl2.set("#in-circle2", { drawSVG: "0% 0%" }, "switchPlaces");

function startAgain() {
   this.play("startRepeat");
}

function startAgain2() {
   this.play("startRepeat");
}


tl3.to("#pattern-3-1, #pattern-1-1", overlapDuration3, { drawSVG: drawTurn3 });
tl3.add("startRepeat3");
tl3.to("#pattern-3-1, #pattern-1-1", mainDuration3, { drawSVG: 100 - sp3 + "%" + " 100%" });
tl3.add("overlap3");
tl3.to("#pattern-3-1, #pattern-1-1", overlapDuration3, { drawSVG: "100% 100%" }, "overlap3");
tl3.to("#pattern-3-2, #pattern-1-2", overlapDuration3, { drawSVG: drawTurn3 }, "overlap3");

tl3.set("#pattern-3-1, #pattern-1-1", { drawSVG: drawTurn3 }, "switchPlaces3");
tl3.set("#pattern-3-2, #pattern-1-2", { drawSVG: "0% 0%" }, "switchPlaces3");

function startAgain3() {
   this.play("startRepeat3");
}





function init(){
   TweenMax.set("svg", {xPercent: -50, yPercent: -50, transformOrigin: "center center"})
   // TweenMax.set("svg", {transf})

   // animate()
}

init()