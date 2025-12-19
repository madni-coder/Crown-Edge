import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ResponsiveWrapper from "../components/ResponsiveWrapper";

export default function Home() {
    return (
        <ResponsiveWrapper>
            <Header />
            <Hero />
            <Services />
                <Portfolio />

            <main className="main-content">
                <About />
                <Team />
                <Contact />
            </main>
            <Footer />
        </ResponsiveWrapper>
    );
}
