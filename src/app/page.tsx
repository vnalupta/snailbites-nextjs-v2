import "@/styles/styles.scss";

import Jumbotron from "@/components/jumbotron";
import Mountains from "@/components/mountains";
import Bio from "@/components/bio";

export default function Home() {
    return (
        <>
            <header>
                <Jumbotron />
                <Mountains />
            </header>
            <main role="main">
                <Bio />
            </main>
        </>
    );
}
