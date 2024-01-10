"use client";

import { useState, useEffect, useRef } from "react";
import Color from "@/styles/color.module.scss";
import styles from "./work.module.scss";

import imac from "/public/screenshots/work-imac.png";
import Image from "next/image";
import useIntersectionObserver from "@/utils/useIntersectionObserver";

const SCREENSHOT_PATH = `/screenshots/`;

interface ProjectItem {
    shortname: string;
    name: string;
    caption: string;
    url: string | null;
    link: string | null;
}
const projects: Array<ProjectItem> = [
    {
        shortname: "dls",
        name: "Grubhub Design System",
        caption:
            "Creator and core maintainer of the Grubhub Design System - which has reached total adoption across all Web, Android and iOS teams across the entire company and forms the basis for all feature work at Grubhub.",
        url: "https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2",
        link: "See my slides",
    },
    {
        shortname: "cfd",
        name: "Grubhub Contact Free Delivery",
        caption:
            "Web team lead and IC for COVID-19 response critical feature launch - a full-company emergency feature launch that went from concept to production in just 3 days.",
        url: "https://blog.grubhub.com/health-and-safety",
        link: "Learn More",
    },
    {
        shortname: "closedbag",
        name: "Grubhub Floating Cart",
        caption:
            "Redesigned the Grubhub web cart experience, moving it from a full height sidebar to a popover notification-style bag; unlocking valuable real estate for the design team to use for optimized layout and UX.",
        url: "https://www.grubhub.com/restaurant/hummus--pita-co-585-6th-ave-new-york/267853",
        link: null,
    },
    {
        shortname: "tgoodman",
        name: "Tim Goodman Portfolio",
        caption:
            "Developed a fully responsive portfolio page for illustrator Timothy Goodman. For this early work with responsive design, my agency was awarded a CommArts Webpick of the Day.",
        url: "https://friendly-kare-ac2a16.netlify.app/",
        link: "See a demo",
    },
    {
        shortname: "jcrew-pdp",
        name: "J.Crew Product Detail Page",
        caption:
            "Developed the front end functionality for an overhaul of the J.Crew, J.Crew Factory and Madewell product detail pages.",
        url: "https://www.jcrew.com/p/womens_category/sweaters/pullover/tippi-sweater/E1277",
        link: null,
    },
    {
        shortname: "mw-searchsale",
        name: "Madewell Search & Sale",
        caption:
            "Refactored the search experience as a single page app and built a drop down navigation bar. Worked closedly with design to restyle the UX to be more in line with the overall Madewell brand experience.",
        url: null,
        link: null,
    },
    {
        shortname: "espn-recruiting",
        name: "ESPN Recruiting Landing Page",
        caption:
            "Designed within ESPN's content framework and developed the front end templates for ESPN's recruiting portal",
        url: "http://espn.go.com/college-sports/basketball/recruiting/school/_/id/120",
        link: null,
    },
    {
        shortname: "leadership",
        name: "The Leadership Room",
        caption:
            "Designed and built several pages within the existing style direction of The Leadership Room branding.",
        url: null,
        link: null,
    },
    {
        shortname: "richtu",
        name: "Rich Tu Portfolio",
        caption:
            "Worked closely with award-winning illustrator Rich Tu to develop a horizontal scrolling portfolio page.",
        url: "https://pedantic-pare-72cabc.netlify.app/",
        link: "See a demo",
    },
    {
        shortname: "codeblue",
        name: "CodeBlue Blog",
        caption:
            "Created an emergency preparedness blog for Seton Hall University. Worked closely with design to chop up a standard WordPress blog to look and feel like an actual comic book.",
        url: "https://blogs.shu.edu/project/code-blue/",
        link: "Read More",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const [loading, setLoading] = useState(true);
    const [open, setDrawer] = useState(false);

    // intersection
    const figureRef = useRef(null);
    const [inView] = useIntersectionObserver(figureRef, {
        threshold: 0.5,
    });

    // TODO: this should handle itself as a side effect
    // of projects being set
    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                setLoading(false);
                setDrawer(true);
            }, 100);
        }
    }, [inView]);

    /**
     * Click handler for project selector
     *
     * @param {*} item
     * @summary Sets loading state and begins fade animations
     */
    function handleClick(item: ProjectItem) {
        if (item.shortname === project.shortname) {
            return;
        }

        let start: EpochTimeStamp;
        let id: EpochTimeStamp;
        const tick = (timestamp: EpochTimeStamp) => {
            if (!start) {
                start = timestamp;
            }
            if (timestamp - start <= parseInt(styles.FADE_TIMING, 0)) {
                window.requestAnimationFrame(tick);
            } else {
                setProject(item);

                // This is firing too fast; see comment in useEffect
                setTimeout(() => {
                    setLoading(false);
                    setDrawer(true);
                }, 200);

                window.cancelAnimationFrame(id);
            }
        };

        setLoading(true);
        setDrawer(false);

        id = window.requestAnimationFrame(tick);
    }
    return (
        <div id="work">
            <h2 style={{ textAlign: `center` }}>Featured Projects</h2>
            <section className={styles.container}>
                <div className={styles.sidebarWrapper}>
                    <aside className={styles.sidebar}>
                        <ul className={styles.projectList}>
                            {projects.map((item) => (
                                <li
                                    key={item.shortname}
                                    className={styles.projectListLink}
                                >
                                    <button
                                        style={{
                                            color:
                                                project.shortname ===
                                                item.shortname
                                                    ? Color.eggshell
                                                    : Color.neon,
                                        }}
                                        onClick={() => handleClick(item)}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <div
                        className={styles.projectWrapper}
                        ref={figureRef}
                        style={{
                            background: `url(${imac.src}) no-repeat 0 0`,
                        }}
                    >
                        <figure className={styles.project}>
                            {project && (
                                <>
                                    <div
                                        className={styles.screenshotWrapper}
                                        style={{ opacity: loading ? 0 : 1 }}
                                    >
                                        {/* <Image
                                            src={`${SCREENSHOT_PATH}${project.shortname}.png`}
                                            width={580}
                                            height={333}
                                            priority={true}
                                            alt={project.caption}
                                        /> */}
                                        {projects.map((screenshot, i) => (
                                            <Image
                                                className={styles.screenshot}
                                                src={`${SCREENSHOT_PATH}${screenshot.shortname}.png`}
                                                width={580}
                                                height={333}
                                                alt={screenshot.caption}
                                                priority={screenshot.shortname === project.shortname}
                                                style={{
                                                    zIndex: screenshot.shortname === project.shortname ? 10 : -1
                                                }}
                                                key={i} />
                                        ))}
                                    </div>

                                    <figcaption
                                        className={`small ${styles.projectCaption}`}
                                        style={{
                                            bottom: open ? 0 : `-200px`,
                                        }}
                                    >
                                        {project.caption}
                                        <br />
                                        {project.url && ` `}
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                {project.link
                                                    ? project.link
                                                    : "Link"}{" "}
                                                &rarr;
                                            </a>
                                        )}
                                    </figcaption>
                                </>
                            )}
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
