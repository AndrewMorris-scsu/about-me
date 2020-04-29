import { Component, OnInit } from '@angular/core';
import {ScriptLoaderService} from '../script-loader.service'
import * as p5 from "p5";
//import "p5/lib/addons/p5.sound";
//import "p5/lib/addons/p5.dom";
export {p5InstanceExtensions} from 'node_modules/@types/p5'


@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {
  private p5;

  constructor(private scriptLoader: ScriptLoaderService) { }

  ngOnInit(): void {
    this.loadScripts();
  }

  private loadScripts(): void{
    this.scriptLoader.load('p5js').then(data => {

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
    new p5(sketch,window.document.getElementById("gameframe"));

      //Script loaded successfully
    }).catch(error => console.log(error));
  }

}
