import { useState } from "react"
import Projects from "./Projects"

const Work = () => {
    const [service, setService] = useState("wa")

    return (
        <section id="portfolio" className="py-40 bg-[#032324] text-white relative">
            <h2 className="text-center text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#40dcdf] mb-4 hide duration-700 transition-[opacity,transform]">Portfolio</h2>
            <ul className="flex max-sm:flex-col gap-4 sm:gap-5 lg:gap-10 w-fit mx-auto hide duration-700 transition-[opacity,transform]">
                <li className={`services ${service === "wa" && "before:w-full"}`} onClick={() => setService("wa")}>Web Application</li>
                <li className={`services ${service === "ui" && "before:w-full"}`} onClick={() => setService("ui")}>UI/UX Design</li>
                <li className={`services ${service === "anim" && "before:w-full"}`} onClick={() => setService("anim")}>2D Animation</li>
            </ul>
            <Projects service={service} />
            <svg
                className="slant"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon points="0,100 100,0 100,100" />
            </svg>
        </section>
    )
}

export default Work