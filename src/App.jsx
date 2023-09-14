import { useEffect, useState } from "react"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Work from "./components/Work"
import logo from "./assets/logo.svg"


function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [section, setSection] = useState("home")
  const [show, setShow] = useState(false)
  useEffect(() => {

    window.onload = () => {
      // The entire page, including all images and assets, has finished loading
      setPageLoaded(true);
    };

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
      window.onload = null;
    };
  }, [])
  return (
    <>
      <div className={`fixed duration-500 transition-[top] top-0 left-0 w-screen h-screen bg-[#032324] z-[2000] text-6xl flex flex-col items-center justify-center ${pageLoaded && "-top-full"}`}>
        <div className="w-1/2 h-2/3">
          <img className="h-full w-full object-contain" src={logo} alt="logo" />
        </div>
        <div className="dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      </div>
      <Header activeSection={section} show={show} setShow={setShow} />
      <Hero />
      <AboutUs />
      <Tech />
      <Work />

    </>
  )
}

export default App
