import { style, globalStyle } from '@vanilla-extract/css';


export const wrapper = style({
    display: 'grid',
    marginTop: '100px',
    gridTemplateColumns: '3fr 1fr',
    maxWidth: '1200px',
    margin: '0 auto',
});

export const post = style({
    paddingRight: '50px',
});

globalStyle(`${post} img`, {
    maxWidth: '700px',
    margin: '0 auto',
    border: '1px solid black',
});