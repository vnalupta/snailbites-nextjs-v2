import styles from "./footer.module.scss"

import Social from '@/components/social';
import BlogFeed from '@/components/blogfeed';
import { getMetadata } from '@/utils/getMetadata';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.footerWrapper}>
                {/* Fixes zindex bug with mountain SVG above it */}
                <section className={styles.footerBody}>
                    <BlogFeed showHeading={false} />
                    <p className="small">This site was made with {" "}
                        <a
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            NextJS
                        </a>
                        ,{" "}
                        <a
                            href="https://www.sketch.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sketch
                        </a>
                        {" "}and ❤️
                    </p>
                    <p className="small" style={{transform: `translateY(-1em)`}}>
                        snailbit.es &bull; © {new Date().getFullYear()} all rights reserved
                    </p>
                </section>
                <Social />
        </div>
    </footer>
    )
}

export default Footer
