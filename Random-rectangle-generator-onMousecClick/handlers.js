
function initCanvas() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
  
    ctx.clearRect(0,0,c.width,c.height);
    
  }
  
  function randomColor() {
    var r = (Math.random() * 256 | 0).toString(16);
    var g = (Math.random() * 256 | 0).toString(16);
    var b = (Math.random() * 256 | 0).toString(16);
    return "#" + r + g + b;
  }
  
  function drawBox(e) {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    
    
      let x=e.offsetX;
      let y=e.offsetY;
      let maxWidth=200
      let minWidth=50
      let maxHeight=100
      let minHeight=50
      let randomWidth=Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
      let randomHeight=Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
     
      ctx.fillStyle = randomColor()
      
      ctx.fillRect(x-(randomWidth/2),y-(randomHeight/2),randomWidth,randomHeight)
    
  }
  
  
  