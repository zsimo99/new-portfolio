import { useState } from "react"
import Projects from "./Projects"

const Work = () => {
    const [service, setService] = useState("wa")

    return (
        <section id="portfolio" className="py-32 bg-[#032324] text-white">
            <h2 className="text-center text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#309092] mb-4">Portfolio</h2>
            <ul className="flex gap-4 sm:gap-5 lg:gap-10 w-fit mx-auto">
                <li className={`services ${service === "wa" && "before:w-full"}`} onClick={() => setService("wa")}>Web Application</li>
                <li className={`services ${service === "ui" && "before:w-full"}`} onClick={() => setService("ui")}>UI/UX Design</li>
                <li className={`services ${service === "anim" && "before:w-full"}`} onClick={() => setService("anim")}>2D Animation</li>
            </ul>
            <Projects />
        </section>
    )
}

export default Work