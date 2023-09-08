import { useEffect, useState } from "react"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {
  const [section, setSection] = useState("home")
  useEffect(() => {
    const divs = document.querySelectorAll("section")
    const handleScroll = () => {
      divs.forEach(div => {
        if (window.scrollY > div.offsetTop && window.scrollY < (div.offsetTop + div.offsetHeight)) {
          setSection(div.id)
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <Header activeSection={section} />
      <Hero />
      <AboutUs />
    </>
  )
}

export default App
