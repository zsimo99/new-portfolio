import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import mongo from "../assets/mongodb.png"
import next from "../assets/nextjs.png"
import node from "../assets/node-js.png"
import react from "../assets/react.png"
import wordpress from "../assets/wordpress.png"
import { useEffect } from "react"



const Tech = () => {

    useEffect(() => {
        const slider = document.querySelector(".slider")
        const handleScroll = () => {
            const rect = slider.getBoundingClientRect();
            const offsetTop = rect.top + scrollY
            const offsetHeight = rect.height
            if (window.scrollY >= (offsetTop + offsetHeight - window.innerHeight) && offsetTop >= window.scrollY) {
                const scroll = scrollY + innerHeight - (offsetTop + offsetHeight)
                const perc = (scroll * 100) / innerHeight
                slider.style.transform = `translateX(-${perc}%)`
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <div className=" py-2 md:py-4 xl:py-6 overflow-hidden px-4 relative">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-300 to-transparent z-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-300 to-transparent z-10" />
            <div className='slider whitespace-nowrap '>
                <img className="image-tech" src={html} alt="" />
                <img className="image-tech" src={css} alt="" />
                <img className="image-tech" src={js} alt="" />
                <img className="image-tech" src={mongo} alt="" />
                <img className="image-tech" src={wordpress} alt="" />
                <img className="image-tech" src={next} alt="" />
                <img className="image-tech" src={react} alt="" />
                <img className="image-tech" src={node} alt="" />
                <img className="image-tech" src={html} alt="" />
                <img className="image-tech" src={css} alt="" />
                <img className="image-tech" src={js} alt="" />
                <img className="image-tech" src={mongo} alt="" />
                <img className="image-tech" src={wordpress} alt="" />
                <img className="image-tech" src={next} alt="" />
                <img className="image-tech" src={react} alt="" />
                <img className="image-tech" src={node} alt="" />
            </div>
        </div>
    )
}

export default Tech