import { style } from '@vanilla-extract/css';

export const container = style({
    position: 'relative',
    background: 'linear-gradient(180deg,rgba(48, 74, 129, 1) 0%, rgba(79, 28, 72, 1) 100%)'
})

export const cloud1 = style({
    transform: 'translate(35vw, 16vh)',
    opacity: .1,
})

export const cloud2 = style({
    opacity: .25,
    transform: 'translate(1vw, 20vh)',
})

export const cloud3 = style({
    transform: 'translate(74vw, 23vh)',
    opacity: .1,
})

export const sun = style({
    width: '18vh',
    position: 'absolute',
    right: '12vh',
    top: '-9vh',
    opacity: 0.85,
})