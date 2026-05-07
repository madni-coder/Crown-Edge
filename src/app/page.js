import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ResponsiveWrapper from "../components/ResponsiveWrapper";
import SectionScroller from "../components/SectionScroller";
import EnquireNow from "../components/EnquireNow";

export default function Home() {
    return (
        <ResponsiveWrapper>
            <SectionScroller />
            <Header />
            <EnquireNow />
            <Hero />
            <Services />
            <Portfolio />

            <main className="main-content">
                <About />

                <Contact />
            </main>
            <Footer />
        </ResponsiveWrapper>
    );
}
