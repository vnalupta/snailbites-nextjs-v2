import { style } from '@vanilla-extract/css';
import { COLOR, FADE_TIMING } from "@/globals/tokens";

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

export const sidebarWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


    '@media': {
        'screen and (min-width: 1100px)': {
            flexDirection: 'row',
            alignItems: 'initial',
        }
    }
})

export const sidebar = style({
    flex: '1 1 100%',
    textAlign: 'center',


    '@media': {
        'screen and (min-width: 1100px)': {
            textAlign: 'left',
            flex: 'initial',
        }
    }
})

export const projectList = style({
    listStyleType: 'none',
})

export const projectListItem = style({
    marginBottom: '0.75rem',


    '@media': {
        'screen and (max-width: 1100px)': {
            display: 'inline',

            '::after': {
                content: '|',
            },
        }
    }
})

export const lastChild  = style({
    '@media': {
        'screen and (max-width: 1100px)': {
            '::after': {
                content: 'none'
            },
        }
    }
});

export const projectListLink = style({
    '@media': {
        'screen and (max-width: 1100px)': {
            margin: '0 8px',
        }
    }
})


export const projectWrapper = style({
    position: 'relative',
    width: '630px',
    height: '490px',

    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '40px',
    marginInlineEnd: '40px',

    flex: 'none',

    '@media': {
        'screen and (min-width: 1100px)': {
            flex: '0 0 630px',
        }
    },
})

export const project = style({
    margin: 0,
    position: 'absolute',
    top: '26px',
    left: '25px',
    width: '580px',
    height: '333px',
    overflow: 'hidden',
})

export const projectCaption = style({
    position: 'absolute',
    margin: 0,
    padding: '10px',
    backgroundColor: COLOR.sesame,
    transition: `bottom ${FADE_TIMING}ms ease-out`,
    zIndex: 20,
})

export const projectCaptionLink = style({
    textDecoration: 'none',
});

export const screenshotWrapper = style({
    transition: `opacity ${FADE_TIMING}ms ease-out`,
    opacity: 1,
})

export const screenshot = style({
    position: 'absolute',
    top: 0,
    left: 0,
})
