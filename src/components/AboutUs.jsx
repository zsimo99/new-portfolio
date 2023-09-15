import image from "../assets/about_us 1.svg";

const AboutUs = () => {
    return (
        <section
            id="aboutUs"
            className=" py-32  bg-[#032324]"
        >
            <div className="container mx-auto px-4 flex gap-10 items-center">
                <div className="max-lg:hidden basis-1/2">
                    <div className="border-8 border-[#309092] max-w-sm mx-auto">
                        <img
                            src={image}
                            alt="about us"
                            className="-translate-x-10 -translate-y-20 animate-move"
                        />
                    </div>
                </div>
                <div className="lg:basis-1/2">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#309092] mb-4 hide duration-700 transition-[opacity,transform] ">
                        About Us:
                    </h2>
                    <p className="text-base text-start md:text-lg xl:text-xl md:text-justify font-medium text-white p-10 hide duration-700 transition-[opacity,transform]">
                        As an adept developer, I specialize in crafting captivating3D visuals,
                        captivating user interfaces, and dynamic web applications. My
                        expertise lies in harnessing the power of JavaScript and its popular
                        frameworks, including React, Node.js, and Express. A testament to my
                        dedication is my continual growth as a quick learner, enabling me to
                        deliver exceptional results in every project.
                    </p>
                    <button className="hide duration-700 transition-[opacity,transform] px-10 py-2 md:px-14 md:py-4 xl:px-16 xl:py-5 bg-slate-500 mt-4 block ms-auto rounded-md text-2xl font-bold text-white bg-gradient-to-r to-[#309092] from-[#6CC6C8] relative z-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md  opacity-0 hover:opacity-100 transition-opacity duration-200 w-full h-full bg-[#ffffff30] z-10" />
                        Hire Us</button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
