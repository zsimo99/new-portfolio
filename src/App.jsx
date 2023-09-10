import { useEffect, useState } from "react"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Tech from "./components/Tech"


function App() {
  const [section, setSection] = useState("home")
  useEffect(() => {
    // const slider = document.querySelector(".slider")
    // const children = slider.children;

    // let totalWidth = 0;

    // for (let i = 0; i < children.length; i++) {
    //   totalWidth += children[i].offsetWidth;
    // }
    // const theWidth = totalWidth - slider.offsetWidth;

    const divs = document.querySelectorAll("section")
    const handleScroll = () => {
      divs.forEach(div => {
        if (window.scrollY > div.offsetTop && window.scrollY < (div.offsetTop + div.offsetHeight)) {
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
      <Header activeSection={section} />
      <Hero />
      <AboutUs />
      <Tech />
      <div className="h-[2000px]"></div>
    </>
  )
}

export default App
