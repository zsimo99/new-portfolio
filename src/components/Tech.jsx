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
            if (window.scrollY >= (slider.offsetTop + slider.offsetHeight - window.innerHeight) && slider.offsetTop >= window.scrollY) {
                const scroll = scrollY + innerHeight - (slider.offsetTop + slider.offsetHeight)
                const perc = (scroll * 100) / innerHeight
                console.log(perc)
                slider.style.transform = `translateX(-${perc}%)`
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <div className="bg-gray-50 py-4">
            <div className="whitespace-nowrap overflow-hidden container mx-auto px-4">
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
        </div>
    )
}

export default Tech