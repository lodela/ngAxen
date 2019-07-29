import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceInLeft = animation(
  animate('2s cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
    style({
      offset:0,
      opacity:0,
      transform: 'translate3d(-100%, 0, 0)'
    }),
    style({
      offset:.6,
      opacity:0.2,
      transform: 'translate3d(25px, 0, 0)'
    }),
    style({
      offset:.75,
      opacity:0.4,
      transform: 'translate3d(-10px, 0, 0)'
    }),
    style({
      offset:.9,
      opacity:0.6,
      transform: 'translate3d(5px, 0, 0)'
    }),
    style({
      offset:1,
      opacity:1,
      transform: 'translate3d(0, 0, 0)'
    }),
  ]))
);

export let bounceInDown = animation(
  animate('2s cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
    style({
      offset:0,
      opacity:0,
      transform: 'translate3d(0, -1000px, 0)'
    }),
    style({
      offset:0.6,
      opacity:0.5,
      transform: 'translate3d(0, 25px, 0)'
    }),
    style({
      offset:0.9,
      opacity:1,
      transform: 'translate3d(0, 5px, 0)'
    }),
    style({
      offset:1,
      transform:'translate3d(0, 0, 0)'
    })
  ]))
);

export let bounceOutTop = animation(
  animate('2s cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
    style({
      offset:0.2,
      opacity:1,
      transform : 'translate3d(0, 10px, 0)'
    }),
    style({
      offset:0.45,
      opacity: 0.5,
      transform: 'translate3d(0, -20px, 0)'
    }),
    style({
      offset:1,
      opacity:0,
      transform:'translate3d(0, -500px, 0)'
    })
  ]))
);

export let fadeInLeft = trigger('fadeInLeft', [
  transition(':enter',[
    useAnimation(bounceInLeft)
  ])
]);

export let fadeIn = trigger('fadeIn', [
  state('void', style({opacity:0})),
  transition(':enter',[
    animate('2s cubic-bezier(0.215, 0.61, 0.355, 1)')
  ])
]);

export let bounce = trigger('bounce',[
  // transition(':enter',[ useAnimation(bounceInDown)]),
  transition(':leave',[ useAnimation(bounceOutTop)])
]);
