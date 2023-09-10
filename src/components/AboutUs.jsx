import image from "../assets/about_us 1.svg";

const AboutUs = () => {
    return (
        <section
            id="aboutUs"
            className=" py-32  bg-[#BFFCFD25] "
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
                    <h2 className="text-5xl font-extrabold text-[#309092] mb-4">
                        About Us:
                    </h2>
                    <p className="text-lg text-justify font-medium text-gray-700">
                        As an adept developer, I specialize in crafting captivating3D visuals,
                        captivating user interfaces, and dynamic web applications. My
                        expertise lies in harnessing the power of JavaScript and its popular
                        frameworks, including React, Node.js, and Express. A testament to my
                        dedication is my continual growth as a quick learner, enabling me to
                        deliver exceptional results in every project.
                    </p>
                    <button className="px-14 py-4 bg-slate-500 mt-4 block ms-auto rounded-md text-2xl font-bold text-white bg-gradient-to-r to-[#309092] from-[#6CC6C8] ">Hire Us</button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
