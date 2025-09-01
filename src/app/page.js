import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <About />
                <Services />
                <Portfolio />
                <Team />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
