import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process/Process";
import TechStack from "../components/TechStack/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ResponsiveWrapper from "../components/ResponsiveWrapper";
import SectionScroller from "../components/SectionScroller";
import EnquireNow from "../components/EnquireNow";
import { EnquireNowProvider } from "../context/EnquireNowContext";

export default function Home() {
    return (
        <EnquireNowProvider>
            <ResponsiveWrapper>
                <SectionScroller />
                <Header />
                <EnquireNow />
                <Hero />

                <main className="main-content">
                    <About />
                    <Services />
                    <Portfolio />
                    <Process />
                    <TechStack />
                    <Contact />
                </main>

                <Footer />
            </ResponsiveWrapper>
        </EnquireNowProvider>
    );
}
