import { state, trigger, animate, style, transition, group, keyframes } from '@angular/animations';

export const ShowStateTrigger =

// transition for void state is applied when an object is not displayed at the down

// also below there's an stateless trigger no there's no style  for the state just for the transitions
trigger('showState', [
    // transition('void => *', [
    //   style({
    //     opacity: 0
    //   }),
    //   animate(300, style({
    //     opacity: 1
    //   }))
    // ]),
    // transition('* => void', animate(300, style({
    //     opacity: 0
    //   }))
    // )

    // same as above but with suggar sintax
    transition(':enter', [
        style({
          opacity: 0
        }),
        animate(300, style({
          opacity: 1
        }))
      ]),
      transition(':leave', animate(300, style({
          opacity: 0
        }))
      )

  ]);



export const ListStateTrigger =
trigger('listState', [
    
    //example using group with 2 animations
  // transition(':enter', [
    //   style({
    //     opacity: 0,
    //     backgroundColor: 'white'
    //   }),
    //   group([
    //     animate(200, style({
    //       opacity: 0.7
    //     })),
    //     animate(500, style({
    //       backgroundColor: 'red'
    //     }))
    //   ]), 
    //   animate(300, style({
    //     backgroundColor: 'lightblue'
    //   })),
    //     animate(300, style({
    //       opacity: 1
    //     }))
    //   ]),
    transition(':enter', [
      style({
        opacity: 0,
        backgroundColor: 'white'
      }),
      group([
        animate(200, style({
          opacity: 0.7
        })),
       animate('5000ms ease-out', keyframes([
         
         style({
           backgroundColor: 'white',
          offset: 0
         }),
         style({
          backgroundColor: 'red',
         offset: 0.8
        }),
        style({
          backgroundColor: 'green',
         offset: 1
        })
       ]))
      ]), 
      animate(300, style({
        backgroundColor: 'lightblue'
      })),
        animate(300, style({
          opacity: 1
        }))
      ]),
      transition(':leave', animate(300, style({
          opacity: 0
        }))
      )

  ]);


export const AnimateStateTrigger =

trigger('animateState', [
    transition('* => *', [
        animate('400ms cubic-bezier(0,.86,.87,.2)', style({
          width: 0
        })),
        animate(400, style({
          width: '*'
        }))
      ])
  ]);
