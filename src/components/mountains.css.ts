import { style } from '@vanilla-extract/css';

export const wrapper = style({
    width: '100vw',
    height: '22vw',
    position: 'relative',
    overflow: 'hidden',
})

export const mountain = style({
    width: '100vw',
    height: '22vw',
    position: 'absolute',
    bottom: '-2px',
})

export const bg = style({
    opacity: .2,
    position: 'absolute',
    width: '110vw',
    top: '3vw',
    left: '-5vw',
    transform: 'translateY(-1.4vw) translateX(10vw) skew(40deg,6deg) scale(1.4)',
})
