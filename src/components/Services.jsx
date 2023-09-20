import { services } from "../constants"
import Service from "./Service"

const Services = () => {
    return (
        <section id="services" className="py-40 bg-[#0A4F51] text-white">
            <div className="container mx-auto p-4">
                <div className="relative hide duration-700 transition-[opacity,transform] ">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl  font-extrabold text-[#40dcdf] text-center">Services</h1>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl absolute w-full h-fit translate-y-[55%] bottom-0 left-0 font-extrabold text-[#40dcdf]  text-center opacity-30">What We Are Great At</h2>
                </div>
                <div className="flex flex-wrap gap-20 justify-center items-center mt-28 ">
                    {services.map((service, id) => <Service key={id} id={id} {...service} />)}
                </div>
            </div>
        </section>
    )
}

export default Services