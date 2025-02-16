import { style } from '@vanilla-extract/css';

export const wrapper = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '75vh',
})

export const titleWrapper = style({
    position: 'relative',
    transition: '500ms opacity ease-out, 150ms transform ease-out',
    opacity: 0,
})

export const title = style({
    textAlign: 'center',
    margin: 0,

    '@media': {
        'screen and (max-width: 540px)': {
            fontSize: '38px',
            lineHeight: '38px',
        }
    }
})

export const heading = style({
    margin: 0,
})

export const crown = style({
    position: 'absolute',
    right: '-29px',
    top: '-22px',
    height: '50px',
    width: '76px',
    transition: '350ms transform ease-out',
    transitionDelay: '150ms',
    transform: 'scale(0.5) rotate(5deg) translate(-16px, -8px)',
})