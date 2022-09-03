canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseEvent="empty"
var lastx,lasty
color="black"
width=1
canvas.addEventListener("mousedown",clickfn)
function clickfn(e){
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",removeclick)
function removeclick(e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",leavefn)
function leavefn(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",drag)
function drag(e){
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.arc(currentx,currenty,30,0,2*Math.PI)
        ctx.stroke()
    }
    lastx=currentx
    lasty=currenty
}
