import CustomCursor from "./components/CustomCursor"
import Home from "./components/Home/Home"
import Navbar from "./components/navbar/Navbar"

import Pages from "./components/Pages/Pages"
import Section from "./components/Section"

export default function App() {
  return (
    <>
    <CustomCursor />
      <Navbar />
      <Home></Home>
      <Pages></Pages>

      <div className="pt-20">
        
        

       

        <Section id="portfolio" title="Portfolio">
          Portfolio section
        </Section>

        <Section id="blog" title="Blog">
          Blog section
        </Section>

        <Section id="contact" title="Contact">
          Contact section
        </Section>
      </div>
    </>
  )
}
