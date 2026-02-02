import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/projects";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Work />
            {/* <Contact /> */}
            <Footer />
        </>
    )
};