import { trigger, state, style, animate, transition, keyframes, animateChild, animation, useAnimation, query, group } from '@angular/animations';

const fadeAnimation = animation([
    style({
        opacity: '{{ startOpacity }}'
    }),  
    animate('{{ duration }}')
], { params: {startOpacity: 0, duration: '100ms'}})


export const routeFadeStateTrigger = (params) => trigger('routeFadeState',[
       transition(':enter', [
        useAnimation(fadeAnimation, { params: params})
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




export const routeAdvancedStateTrigger = 

trigger('routeAdvancedState',[
       transition('* => *', [
        group([
            query(':enter', [
                //we can call the child animation  (usersComponent) and (projectComponent)
                // animateChild(),
                //or
                //overide force the animation as above 
                    style({
                    transform: 'translateY(-400px)',
                    opacity: 0
                    }),
                    animate('300ms ease-out')
               ], { optional: true}),
               query(':leave',[
                    animate('300ms ease-out',
                    style({
                        transform: 'translateY(100%)',
                        opacity: 0
                    }) )
                ],{ optional: true})
        ])
    ])
    
]);



