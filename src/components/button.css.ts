import { style } from '@vanilla-extract/css';
import { COLOR } from '@/globals/tokens';

export const base = style({
    display: 'inline-block',
    border: 'none',
    boxSizing: 'border-box',
    textDecoration: 'none',
    padding: '10px 25px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    borderRadius: '6px',
    transition: '250ms ease-in all',
    background: COLOR.neon,
    color: COLOR.sesame,
    opacity: 0.85,

    ':hover': {
        textDecoration: 'none',
        opacity: 1.0,
        outline: `1px solid ${COLOR.sesame}`,
    }
})