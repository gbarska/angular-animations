import { trigger, state, style, animate, transition, group } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
   state('valid',style({
       backgroundColor: '#5cb85c',
       borderColor: 'green',
   })),
   state('invalid',style({
        backgroundColor: 'red',
        borderColor: 'darkred',
    })),
  transition('invalid => valid', [
    group([
        animate(100, style({
          transform: 'scale(1.1)'
        })),
        animate(200, style({
            backgroundColor: '#5cb85c'
          })),
      ]), 
      animate(200, style({
        transform: 'scale(1)'
      })),

    ]),
    transition('valid => invalid', [
      group([
          animate(100, style({
            transform: 'scale(1.1)'
          })),
          animate(200, style({
              backgroundColor: 'red'
            })),
        ]), 
        animate(200, style({
          transform: 'scale(1)'
        })),
  
      ])
]);

