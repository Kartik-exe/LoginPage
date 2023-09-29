var playbtn = document.querySelector(".playbtn")

function movingCursor(){


    playbtn.addEventListener("mouseenter",function(){
        playbtn.style.opacity = 1
        playbtn.style.scale = 1
        gsap.to(playbtn,{
            scale:1,
            opacity:1
        })
    })

    playbtn.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left:dets.x-50,
            top:dets.y-50
        })  
    })
}

movingCursor();