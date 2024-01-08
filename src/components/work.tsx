import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Color } from "@theme/theme";


import useIntersectionObserver from "../hooks/useIntersectionObserver";
import imac from "/public/images/screenshots/work-imac.png";
import Button from './button';
import Image from 'next/image';

const projects = [
    {
        'shortname': 'dls',
        'name': "Grubhub Design System",
        'caption': 'Creator and core maintainer of the Grubhub Design System - which has reached total adoption across all Web, Android and iOS teams across the entire company and forms the basis for all feature work at Grubhub.',
        'url': "https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2",
        'link': 'See my slides'
    },
    {
        'shortname': 'cfd',
        'name': "Grubhub Contact Free Delivery",
        'caption': 'Web team lead and IC for COVID-19 response critical feature launch - a full-company emergency feature launch that went from concept to production in just 3 days.',
        'url': 'https://blog.grubhub.com/health-and-safety',
        'link': 'Learn More'
    },
    {
        'shortname': 'closedbag',
        'name': "Grubhub Floating Cart",
        'caption': 'Redesigned the Grubhub web cart experience, moving it from a full height sidebar to a popover notification-style bag; unlocking valuable real estate for the design team to use for optimized layout and UX.',
        'url': 'https://www.grubhub.com/restaurant/hummus--pita-co-585-6th-ave-new-york/267853',
        'link': null
    },
    {
        'shortname': 'tgoodman',
        'name': "Tim Goodman Portfolio",
        'caption': 'Developed a fully responsive portfolio page for illustrator Timothy Goodman. For this early work with responsive design, my agency was awarded a CommArts Webpick of the Day.',
        'url': 'https://friendly-kare-ac2a16.netlify.app/',
        'link': 'See a demo'
    },
    {
        'shortname': 'jcrew-pdp',
        'name': "J.Crew Product Detail Page",
        'caption': 'Developed the front end functionality for an overhaul of the J.Crew, J.Crew Factory and Madewell product detail pages.',
        'url': 'https://www.jcrew.com/p/womens_category/sweaters/pullover/tippi-sweater/E1277',
        'link': null
    },
    {
        'shortname': 'mw-searchsale',
        'name': "Madewell Search & Sale",
        'caption': 'Refactored the search experience as a single page app and built a drop down navigation bar. Worked closedly with design to restyle the UX to be more in line with the overall Madewell brand experience.',
        'url': null,
        'link': null
    },
    {
        'shortname': 'espn-recruiting',
        'name': "ESPN Recruiting Landing Page",
        'caption': 'Designed within ESPN\'s content framework and developed the front end templates for ESPN\'s recruiting portal',
        'url': 'http://espn.go.com/college-sports/basketball/recruiting/school/_/id/120',
        'link': null
    },
    {
        'shortname': 'leadership',
        'name': "The Leadership Room",
        'caption': 'Designed and built several pages within the existing style direction of The Leadership Room branding.',
        'url': null,
        'link': null
    },
    {
        'shortname': 'richtu',
        'name': "Rich Tu Portfolio",
        'caption': 'Worked closely with award-winning illustrator Rich Tu to develop a horizontal scrolling portfolio page.',
        'url': 'https://pedantic-pare-72cabc.netlify.app/',
        'link': 'See a demo'
    },
    {
        'shortname': 'codeblue',
        'name': "CodeBlue Blog",
        'caption': 'Created an emergency preparedness blog for Seton Hall University. Worked closely with design to chop up a standard WordPress blog to look and feel like an actual comic book.',
        'url': 'https://blogs.shu.edu/project/code-blue/',
        'link': 'Read More'
    }
]

const FADE_TIMING = 350;

const Work = () => {
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const [open, setDrawer] = useState(false)

    // intersection
    const figureRef = useRef(null);
    const [inView] = useIntersectionObserver(figureRef, {
        threshold: .5
    })

    // TODO: this should handle itself as a side effect
    // of projects being set
    useEffect(() => {
        setProject(projects[0])
        if (inView) {
            setTimeout(() => {
                setLoading(false);
                setDrawer(true);
            }, 100)
        }
    }, [inView])

    /**
     * Click handler for project selector  
     *     
     * @param {*} item     
     * @summary Sets loading state and begins fade animations     
     */
    function handleClick(item) {
        if (item.shortname === project.shortname) {
            return;
        }

        let start;
        let id;
        const tick = timestamp => {
            if (!start) {
                start = timestamp;
            }

            if (timestamp - start <= FADE_TIMING) {
                window.requestAnimationFrame(tick)
            } else {
                setProject(item);

                // This is firing too fast; see comment in useEffect
                setTimeout(() => {
                    setLoading(false);
                    setDrawer(true);
                }, 100)

                window.cancelAnimationFrame(id);
            }
        }

        setLoading(true);
        setDrawer(false);

        id = window.requestAnimationFrame(tick)
    }
    return (
        <>
          <h2 id="work" style={{textAlign: `center`}}>Featured Projects</h2>          
            <WorkContainer>
            <StyledWorkWrapper>
              <StyledSidebar>
                <StyledList>
                  {projects.map(item => (
                    <li key={item.shortname}>
                      <StyledLinkButton
                        selected={project && project.shortname === item.shortname}
                        onClick={() => handleClick(item)}
                      >
                        {item.name}
                      </StyledLinkButton>
                    </li>
                  )
                  )}
                </StyledList>
              </StyledSidebar>
              <StyledFigureWrapper ref={figureRef} 
                    style={{
                      background: `url(${imac.src}) no-repeat 0 0`
                    }}>
                <StyledFigure>
                  {project && (
                    <>
                    <StyledScreenshot
                      className={loading ? 'loading' : null}
                    >
                      <Image                      
                          src={`/images/screenshots/${project.shortname}.png`}
                          width={580}
                          height={333}
                          alt={project.caption}
                      />                                     
                    </StyledScreenshot>                    
                    <StyledCaption open={open} className="small">                
                      {project.caption}<br />
                      {project.url && ` `}
                      {project.url && <a href={project.url} rel="noopener noreferrer" target="_blank">
                        {project.link ? project.link : 'Link'} &rarr;
                        </a>}
                    </StyledCaption>
                    </>
                  )}
                </StyledFigure>
              </StyledFigureWrapper>
            </StyledWorkWrapper>
          
          </WorkContainer>
        </>
      )
    }
    
    const WorkContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0 73px;

    @media (max-width: 540px) {
        padding: 0 25px;
    }
`
    
    
    const StyledList = styled.ul`
      list-style-type: none;
    
      li {
        margin-bottom: .75rem;
    
        @media (max-width: 1100px) {
          display: inline;
          
          &:after {
            content: '|';
          }
    
          &:last-child:after {
            content: none;
          }
        }
      }
    
    `
    
    const StyledLinkButton = styled.button<{
        selected: boolean;
      }>`
      text-align: initial;
      background: inherit;
      border: none;
      text-decoration: none;
      transition: text-shadow 300ms ease-out, color 250ms ease-out;
    
      &:hover,
      &:focus {
        text-shadow: 1px 1px 1px rgb(0,0,0,.5);
        color: ${Color.eggshell};
        cursor: pointer;
      }
    
      &:focus {
        outline: none;
      }
      color: ${props => props.selected ? Color.eggshell : Color.neon};
    `;
   
    
    const StyledWorkWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    
      @media (min-width: 1100px) {
        flex-direction: row; 
        align-items: initial; 
      }  
    `
    
    const StyledSidebar = styled.aside`
      flex: 1 1 100%; 
      text-align: center;
    
      @media (min-width: 1100px) {
        text-align: left;
        flex: initial;  
      }  
    `
    const StyledFigureWrapper = styled.div`
      // default computed <figure> styles
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 40px;
      margin-inline-end: 40px;
    
      flex: none;
    
      @media (min-width: 1100px) {
        flex: 0 0 630px;    
      }  
    
      position: relative;
      width: 630px;
      height: 490px;    
    `
    const StyledFigure = styled.figure`
      margin: 0;
      position: absolute;
      top: 26px;
      left: 25px;
      width: 580px;
      height: 333px;
      overflow: hidden;              
    `
    
    const StyledScreenshot = styled.div`  
      transition: opacity ${FADE_TIMING}ms ease-out;
      opacity: 1;  
      &.loading {
        opacity: 0;
      }
    `
    
    const StyledCaption = styled.figcaption<{
        open: boolean;
      }>`
      position: absolute;      
      margin: 0;
      padding: 10px;
    
      background-color: ${Color.sesame};
    
      & a {
        text-decoration: none;
      }
      
      transition: bottom ${FADE_TIMING}ms ease-out;  
      bottom: ${props => props.open ? 0 : `-200px`}
    `;
    
    
    export default Work;