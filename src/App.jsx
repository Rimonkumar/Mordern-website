import Blogs from "./components/Bolgs/Blogs"
import CustomCursor from "./components/CustomCursor"
import Home from "./components/Home/Home"
import Navbar from "./components/navbar/Navbar"
// import MarqueeText from "./components/Pages/Marquee"

import Pages from "./components/Pages/Pages"
import Section from "./components/Section"

export default function App() {
  return (
    <>
    <CustomCursor />
      <Navbar />
      <Home></Home>
      <Pages></Pages>
      <Blogs></Blogs>

      <div className="pt-20">
        
        

       

        <Section id="portfolio" title="Portfolio">
          Portfolio section
        </Section>

       
        <Section id="contact" title="Contact">
          Contact section
        </Section>
      </div>
    </>
  )
}
