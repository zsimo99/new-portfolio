import { useEffect, useRef, useState } from "react"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Work from "./components/Work"
import logo from "./assets/logo.svg"
import Loader from "./components/Loader"
import Services from "./components/Services"
import Contact from "./components/Contact"



function App() {
  const [section, setSection] = useState("home")
  const [show, setShow] = useState(false)
  const [showHero, setShowHero] = useState(false)

  const loader = useRef(null)



  useEffect(() => {

    const divs = document.querySelectorAll("section")
    let prevPos = 0
    const handleScroll = () => {
      document.querySelectorAll(".hide").forEach((elm) => {
        const rect = elm.getBoundingClientRect();
        const offsetTop = rect.top + scrollY
        if ((offsetTop - ((innerHeight * 2) / 3)) < scrollY) {
          console.log(elm)
          elm.classList.remove("hide")
        }
      })
      const newPos = scrollY
      if (newPos > prevPos) {
        setShow(false)
        document.querySelector("header").style.top = "-100px"
        prevPos = newPos
      } else if (window.scrollY <= 0 || newPos < prevPos) {
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
    setTimeout(() => {
      loader.current.style.transform = "translateY(-100%)"
      setShowHero(true)
    }, 2000)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  return (
    <div className="overflow-hidden">
      <Loader loader={loader} logo={logo} />
      <Header activeSection={section} show={show} setShow={setShow} />
      <Hero showHero={showHero} />
      <AboutUs />
      <Tech />
      <Work />
      <Services />
      <Contact />

    </div>
  )
}




export default App
