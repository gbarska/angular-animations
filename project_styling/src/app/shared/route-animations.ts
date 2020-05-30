import { trigger, state, style, animate, transition } from '@angular/animations';
import { keyframes } from '@angular/animations';

export const routeFadeStateTrigger = 

trigger('routeFadeState',[
       transition(':enter', [
        style({
            opacity: 0
        }),  
        // animate('300ms ease-out', style({
        //     transform: 'scale(1.03)'
        // })),
        animate(300)
    ]),
    transition(':leave', [
        animate('300ms ease-out',style({
            opacity: 0
        }) )
    ])
]);


export const routeSlideStateTrigger = 

trigger('routeSlideState',[
       transition(':enter', [
        style({
           opacity: 0,
           transform: 'translateY(-100%)'
        }),  
        animate(300)
    ]),
    transition(':leave', [
        animate('300ms ease-out',style({
            transform: 'translateY(100%)',
            opacity: 0
        }) )
    ])
]);



