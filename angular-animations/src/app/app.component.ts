import { Component } from '@angular/core';
import { NumberEnteredStateTrigger, ClickedStateTrigger } from './animations';

// import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    NumberEnteredStateTrigger,
    ClickedStateTrigger
  ]
})
export class AppComponent {
  clickInfo = 'default';
  paragraphClick = 'default';

  numberEntered = 0;

  onClick(){
    this.clickInfo = 'clicked';

    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000)

  }
}
