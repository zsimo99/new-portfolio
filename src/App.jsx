import { useEffect, useState } from "react"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Work from "./components/Work"


function App() {
  const [section, setSection] = useState("home")
  const [show, setShow] = useState(false)
  useEffect(() => {
    const divs = document.querySelectorAll("section")
    let prevPos = 0
    const handleScroll = () => {
      const newPos = scrollY
      if (newPos > prevPos) {
        setShow(false)
        document.querySelector("header").style.top = "-100px"
        prevPos = newPos
      } else if (window.scrollY === 0 || newPos < prevPos) {
        setShow(false)
        document.querySelector("header").style.top = "0"
        prevPos = newPos
      }
      divs.forEach(div => {
        if (window.scrollY >= div.offsetTop && window.scrollY < (div.offsetTop + div.offsetHeight)) {
          setSection(div.id)
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  return (
    <>
      <Header activeSection={section} show={show} setShow={setShow} />
      <Hero />
      <AboutUs />
      <Tech />
      <Work />
    </>
  )
}

export default App
