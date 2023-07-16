import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Credit from "./components/Credit/Credit"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Services from "./components/Services.jsx/Services"
import Testimonials from "./components/Testimonials/Testimonials"
import GlobalStyles from "./utils/globalStyles"

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Projects />
      <Contact />
      <Credit />
    </div>
  )
}

export default App

