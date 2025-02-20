import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '0 73px 200px',

    '@media': {
        'screen and (max-width: 540px)': {
            padding: '0 25px',
        }
    }
})

export const column = style({
    maxWidth: '450px',
    alignSelf: 'flex-end',
})

export const bioWrapper = style({
    width: '385px',
    position: 'absolute',
    left: '-145px',
    top: '-113px',
})

export const profile = style({
    position: 'relative',
    zIndex: 10,
})

export const profileHeading = style({
    marginBottom: '10px',
})

export const profileClosing = style({
    marginBottom: '30px',
})

export const rhs = style({
    transform: 'translateX(10px)',
    opacity: 0,
    transition: '250ms ease-in',
})

export const lhs = style({
    paddingRight: '50px',
    position: 'relative',

    '@media': {
        'screen and (max-width: 768px)': {
            display: 'none'
        }
    }
})

export const bioButton = style({
    '@media': {
        'screen and (max-width: 768px)': {
            margin: '0 auto',
        }
    }
})