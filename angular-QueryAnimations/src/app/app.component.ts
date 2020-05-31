import { Component } from '@angular/core';
import { animate, style, transition, trigger, query, group, AnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        group([    
          query(':self', [
            style({
              opacity: 0
            }),
            animate(1000)
          ]),
          query('.panel-heading', [
            style({
              transform: 'translateY(-300px)',
              opacity: 0
            }),
            animate(300)
          ]),
          query('.panel-body', [
            style({
              transform: 'translateX(100%)',
              opacity: 0
            }),
            animate(300)
          ]),
          query('.panel-footer', [
            style({
              transform: 'translateY(300px)',
              opacity: 0
            }),
            animate(300)
          ])
        ]),
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateY(300px)',
          opacity: 0
        }))
      ]),
      transition('* => *', [
        query(':enter',[
          style({
            transform: 'scale(1)'
          }),
          animate(200, style({
            transform: 'scale(1.1)'
          })),
          animate(1000)
        ],{ optional: true }),
        query('div p, button', [
          animate(300, style({
            color: 'red'
          })),
          animate(200)
        ])

      ])

    ])
  ]
})
export class AppComponent {
  constructor(private builder: AnimationBuilder){}
  showPanel = false;
  showParagraph = false;

  onClick(element: any){
    const animation = this.builder.build([
      style({
        backgroundColor: 'red'
      }),
      animate(300, style({
        width: '500px'
      })),
      animate(200)
    ])
  
  const player = animation.create(element);
  player.play();
  }
}
