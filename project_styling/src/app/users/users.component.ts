import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routeFadeStateTrigger({startOpacity: 0, duration: '5000ms'}),
    routeSlideStateTrigger
  ]
})
export class UsersComponent implements OnInit {
  //this child animations gets overiden by the angular router animations placed
  // at the appcomponent wich is the parent animation
  @HostBinding('@routeFadeState') routeAnimation = true;
  // @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
