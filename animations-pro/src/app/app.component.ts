import { Component } from '@angular/core';
import { ShowStateTrigger, AnimateStateTrigger, ListStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    ShowStateTrigger,
    AnimateStateTrigger,
    ListStateTrigger
  ]  
})
export class AppComponent {
 isShown = false;
 width = 400;
 animate = false;
 testResults = [];


 onAddElement(){
   this.testResults.push(Math.random());
 }


 onStart(event: AnimationEvent){
  console.log(event);
 }

 onDone(event: AnimationEvent){
  console.log(event);
 }
}



