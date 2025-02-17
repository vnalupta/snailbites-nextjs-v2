import { style } from '@vanilla-extract/css';
import { COLOR, FADE_TIMING } from "@/globals/tokens";

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    transform: 'translateY(-1.7em)',
    color: COLOR.eggshell,
    backgroundColor: COLOR.plum
})

export const heading = style({
    marginBottom: '.5em',
})

export const list = style({
    margin: '0 0 .5em 0',
    padding: 0,
    listStyleType: 'none',
})

export const listItem = style({
    display: 'inline',
    marginLeft: '1em',
})