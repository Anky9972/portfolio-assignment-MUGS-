import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about-me";
import Projects from "./components/projects";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black">
     {/* <Navbar/> */}
     <Header/>
     <Hero/>
     <About/>
     <Services/>
     <Projects/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </main>
  );
}
