import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import Mountains from "@/components/mountains";
import Gradient from "@/components/gradient";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Blog - Snailbites - the digital home of Vincent Nalupta",
    description:
        "Snailbites is the digital home of Vincent Nalupta, an Engineering Manager in NYC.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header>
                <Navigation />
                <Mountains />
            </header>
            <main>
                {children}
                <Gradient />
                <Footer />
            </main>
        </>
    );
}
