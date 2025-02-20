import { style } from '@vanilla-extract/css';
import { COLOR } from '@/globals/tokens';

export const container = style({
    backgroundColor: COLOR.plum,
    overflow: 'hidden',
    padding: '1em 0',
    color: COLOR.eggshell
})

export const footerWrapper = style({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '20px 73px 60px',

    '@media': {
        'screen and (max-width: 540px)': {
            padding: '0 25px',
        }
    }
})

export const footerBody = style({
    zIndex: 10,
    position: 'relative',
})