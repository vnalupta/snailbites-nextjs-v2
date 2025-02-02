import { style } from '@vanilla-extract/css';


const container = style({
    marginTop: `110px`
});

const links = style({
    listStyleType: `none`,
    margin: 0,
    padding: 0,
});
console.log(container)
export { container, links };