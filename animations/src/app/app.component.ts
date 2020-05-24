import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  courseGoals = [
//    { title: 'Master Angular Styling', isActiveGoal: true },
//    { title: 'Understand Angular Animations', isActiveGoal: false },
//    { title: 'Master Angular Animations', isActiveGoal: false }
//  ]
constructor(private renderer: Renderer2) {}
isFavorite = false;
showBoring = false;


onShowBoring(elemet: HTMLElement){
  //not recomended, throw an exception if dom is not accessible
  // elemet.style.display = 'block';

  this.renderer.setStyle(elemet, 'display', 'block');

  //if needs to change multiple properties prefer this approach with renderer instead of ngStyle
  // this.renderer.setStyle(elemet, 'display', 'block');
  // this.renderer.setStyle(elemet, 'display', 'block');
  // this.renderer.setStyle(elemet, 'display', 'block');
  // this.renderer.setStyle(elemet, 'display', 'block');
  // this.renderer.setStyle(elemet, 'display', 'block');
}
}
