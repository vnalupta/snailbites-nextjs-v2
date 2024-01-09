import "@/styles/styles.scss";

import Jumbotron from "@/components/jumbotron";
import Mountains from "@/components/mountains";
import Bio from "@/components/bio";
import Work from "@/components/work";
import Gradient from "@/components/gradient";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function Home() {
    return (
        <>
            <header>
                <Navigation />
                <Jumbotron />
                <Mountains />
            </header>
            <main role="main">
                <Bio />
                <Work />
                <Gradient />
                <Footer />
            </main>
        </>
    );
}
