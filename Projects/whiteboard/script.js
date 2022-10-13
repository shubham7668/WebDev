let canvas=document.getElementById('canvas');

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let ctx=canvas.getContext('2d')

let x,y;
let mouseDown=false;

window.onmouseup=(e)=>{
    mouseDown=false;
}

window.onmousedown=(e)=>{
    ctx.moveTo(x,y)
    mouseDown=true;
}

window.onmousemove=(e)=>{
    x=e.clientX;
    y=e.clientY;
  
        if(mouseDown){
            
            ctx.lineTo(x,y);
            ctx.stroke()
        }
  
    
    
}
