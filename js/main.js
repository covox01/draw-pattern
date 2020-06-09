

var easeNone = Linear.easeNone
TweenMax.defaultEase = Linear.easeNone;

function animate(){


   var tl = new TimelineMax({repeat: -1})
   tl
   .fromTo("#out-circle", .15, {drawSVG: "0 0"}, {drawSVG: "15% 0%", ease: easeNone})
   .to("#out-circle", 1, {drawSVG:"85% 100%", ease: easeNone})
   .to("#out-circle", .15, {drawSVG: "100% %", ease: easeNone})

   var tl3 = new TimelineMax({ repeat: -1 })
   tl3
      .fromTo("#thin-circle", .15, { drawSVG: "100% 100%" }, { drawSVG: "85% 100%", ease: easeNone })
      .to("#thin-circle", 1, { drawSVG: "0% 15%", ease: easeNone })
      .to("#thin-circle", .15, { drawSVG: "0% 0%", ease: easeNone })


   var tl2 = new TimelineMax
   tl2.from("#pattern-1", 3, {drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone})
      .from("#pattern-2", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
      .from("#pattern-3", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
      .from("#pattern-4", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
      .from("#pattern-5", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
      .from("#pattern-6", 3, { drawSVG: "0", yoyo: true, repeat: -1, ease: easeNone })
}

function init(){
   TweenMax.set("svg", {xPercent: -50, yPercent: -50, transformOrigin: "center center"})
   // TweenMax.set("svg", {transf})

   animate()
}

init()