import { state, trigger, animate, style, transition } from '@angular/animations';

export const ClickedStateTrigger =

trigger('clickedState', [
    state('default', style({
      backgroundColor: 'orange',
      width: '100px',
      height: '100px'
    })),
    state('clicked', style({
      backgroundColor: 'blue',
      width: '300px',
      height: '50px'
    })),
    state('mousedown', style({
      backgroundColor: 'red',
      border: '1px solid black'
    })),
    transition('default => clicked', animate('1s 500ms ease-in')),
    // transition('clicked => default', animate('300ms 500ms ease-out'))
     transition('clicked => default', animate(300)),
     transition('mousedown <=> clicked', animate(300))
  ]);


export const NumberEnteredStateTrigger =
  trigger('numberEnteredState', [
    state('unselected', style({
      border: '1px solid black',
      padding: '5px',
      transform: 'scale(1)'
    })),
    state('selected', style({
      border: '2px solid blue',
      padding: '4px',
      backgroundColor: 'lightblue'
    })),
    transition('unselected => selected',
    [
    style({
      border: '2px solid black',
      padding: '4px'
    }),
    animate(300, style({
      backgroundColor: 'red',
      transform: 'scale(1.05)'
    })),
    animate(200),
    ])
  ]);
