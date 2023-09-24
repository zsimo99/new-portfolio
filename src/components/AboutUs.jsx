import { useEffect } from "react";
// import image from "../assets/about_us 1.svg";
import video from "../assets/video/Last2.mp4"
import { DefaultPlayer as Video } from "react-html5video";
import 'react-html5video/dist/styles.css'

const AboutUs = () => {
    useEffect(() => {

    }, [])
    return (
        <section
            id="aboutUs"
            className=" py-40  bg-[#032324]"
        >
            <div className="container mx-auto px-4 flex max-lg:flex-col-reverse gap-10 items-center">
                <div className=" lg:basis-1/2">
                    <div className="border-8 border-[#309092] max-w-md xl:max-w-lg hide duration-700 transition-[opacity,transform]">
                        <Video autoPlay loop>
                            <source src={video} type="video/mp4" />
                        </Video>
                    </div>
                </div>
                <div className="lg:basis-1/2">
                    <h2 className=" text-5xl md:text-6xl xl:text-7xl  font-extrabold text-[#40dcdf] mb-4 hide duration-700 transition-[opacity,transform] ">
                        About Us:
                    </h2>
                    <p className="text-base text-start md:text-lg xl:text-xl md:text-justify font-medium text-white pl-4 lg:pl-10 hide duration-700 transition-[opacity,transform]">
                        At ZMT Agency, we take pride in crafting digital experiences that leave a lasting impact. Our team is dedicated to delivering excellence in web design and web application development. With a keen eye for aesthetics and a passion for innovation, we transform concepts into captivating websites and powerful web applications. Our commitment to quality and creativity has earned us a reputation for turning ideas into reality. Explore our portfolio to witness the expertise and dedication that defines us at ZMT Agency.
                    </p>
                </div>

            </div>
            <div className="container mx-auto p-4">
                <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/zakariami?source=gig_page" className=" mt-8 duration-700 transition-[opacity,transform] px-10 py-2 md:px-14 md:py-4 xl:px-16 xl:py-5 bg-slate-500 block w-fit ms-auto rounded-md text-2xl font-bold text-white bg-gradient-to-r to-[#309092] from-[#6CC6C8] relative z-0 hide">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md  opacity-0 hover:opacity-100 transition-opacity duration-200 w-full h-full bg-[#ffffff30] z-10" />
                    Hire Us</a>
            </div>
        </section>
    );
};

export default AboutUs;
