import { Component, trigger, transition } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { style,query, animate } from '@angular/animations';
import { routeAdvancedStateTrigger } from './shared/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routeAdvancedStateTrigger]
})

export class AppComponent {
  
  getAnimationData(router: RouterOutlet){
    const routeData = router.activatedRouteData['animation']
    if(!routeData){
      return 'rootPage';
    }
    else{
      return routeData['page'];
    }
  }
}
