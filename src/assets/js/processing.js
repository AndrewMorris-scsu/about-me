let sketch = function(p) {
    p.setup = function(){
      var can = p.createCanvas(640,480);
      can.style('display','block');
      can.style('margin','auto');
      p.background(100);
    }
    p.draw = function(){
      if (p.mouseIsPressed) {
        p.fill(100);
      } else {
        p.fill(150);
      }
      
      p.ellipse(p.mouseX, p.mouseY, 80, 40);
    }
  };
  new p5(sketch, 'gameframe');