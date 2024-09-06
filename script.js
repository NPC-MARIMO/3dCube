document.addEventListener("DOMContentLoaded" , ()=>{

    let cube = document.querySelector(".cube");

    let buttons = document.querySelectorAll(".buttons");

    let cubeValues = [
        {
            X : 0,
            Y : 0,
            Z : 0
        },
        {
            X: 180,
            Y: 0,
            Z: 180
        },
        {
            X : 0,
            Y : 90,
            Z : 0
        },
        {
           X : 0,
           Y : -90,
           Z : 0 
        },
        {
            X : -90,
            Y : 0,
            Z : 0,
        },
        {
            X : 90,
            Y : 0,
            Z : 0,
        }
    ]

    let tl = gsap.timeline({repeat : -1});


    tl.to(cube,{
        rotateX : cubeValues[1].X,
        rotateY : cubeValues[1].Y,
        rotateZ : cubeValues[1].Z,
    }).to(cube,{
        rotateX : cubeValues[2].X,
        rotateY : cubeValues[2].Y,
        rotateZ : cubeValues[2].Z,
    }).to(cube,{
        rotateX : cubeValues[3].X,
        rotateY : cubeValues[3].Y,
        rotateZ : cubeValues[3].Z,
    }).to(cube,{
        rotateX : cubeValues[4].X,
        rotateY : cubeValues[4].Y,
        rotateZ : cubeValues[4].Z,
    }).to(cube,{
        rotateX : cubeValues[5].X,
        rotateY : cubeValues[5].Y,
        rotateZ : cubeValues[5].Z,
    }).to(cube,{
        rotateX : cubeValues[0].X,
        rotateY : cubeValues[0].Y,
        rotateZ : cubeValues[0].Z,
      })

})