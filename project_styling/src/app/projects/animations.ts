import { trigger, state, style, animate, transition, query, keyframes, stagger } from '@angular/animations';

export const markedTrigger = 

trigger('markedState',[
    state('default', style({
        border: '1px solid black',
        backgroundColor: 'transparent',
        padding: '20px'
    })),
    state('marked', style({
        border: '2px solid blue',
        backgroundColor: '#caeff9',
        padding: '19px'
    })),
    transition('default => marked', [
        style({
            border: '2px solid black',
            padding: '19px'
        })  ,  
        animate('300ms ease-out', style({
            transform: 'scale(1.03)'
        })),
        animate(50)
    ]),
    transition('marked => default', [
        style({
            border: '1px solid blue',
            padding: '20px'
        })  ,  
        animate('300ms ease-out')
    ])
]);

export const itemStateTrigger = trigger('itemState', [
       transition(':leave',[
        animate('500ms ease-in', keyframes([
            style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 0
            }),
            style({
                opacity: 1,
                transform: 'translateX(-10%)',
                offset: 0.4
            }),
            style({
                opacity: 0,
                transform: 'translateX(100%)',
                offset: 1
            })
        ]))
    ]),
    transition('slidUp => slidDown', [
        style({
            transform: 'translateY(-100%)'
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(0)'
        }))
    ]),
    transition('slidDown => slidUp', [
        style({
            transform: 'translateY(0)',
            opacity:1
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);


export const slideStateTrigger = trigger('slideState', [
    transition(':enter',[
        style({
            transform: 'translateY(-100%)',
        }),
        animate('300ms ease-out', keyframes([
            style({
                transform: 'translateY(0)',
            }),
        ]))
    ]),
    transition(':leave',[
        style({
            transform: 'translateY(0)',
        }),
        animate('300ms ease-out', keyframes([
            style({
                transform: 'translateY(-100%)',
            }),
        ]))
    ])
]);



export const listStateTrigger = trigger('listState', [
    transition('* => *',[
        query(':enter',[
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
            }),
            stagger(100,  
                animate('800ms ease-out', keyframes([
                   
                    style({
                        opacity: 1,
                        transform: 'translateX(15%)',
                        offset: 0.4
                    }),
                    style({
                        opacity: 1,
                        transform: 'translateX(0)',
                        offset: 1
                    })
                ]))),
        ], {optional: true})
    ]),
]);



