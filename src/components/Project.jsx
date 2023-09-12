import image from "../assets/projects/leon.png";
import arrow from "../assets/arrow-right.svg";
import github from "../assets/github.png";
// eslint-disable-next-line react/prop-types
const Project = ({ nm, project: { title, link, desc, live } }) => {
    return (
        <div className="flex md:items-center gap-8 max-md:flex-col-reverse relative pb-8">
            <div className="md:basis-1/2 basis-full">
                <h2 className="max-md:hidden text-3xl lg:text-4xl xl:text-5xl font-bold text-[#32a6a8]">
                    Project {nm + 1}
                </h2>
                <div className="p-3">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl mt-4 mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-300">
                        {desc}
                    </p>
                    <div className="flex items-center mt-3 gap-10">
                        {link && <a target="_blank" rel="noreferrer" href={link} className="flex gap-2 items-center cursor-pointer rounded-lg hover:bg-[#ffffff07] w-fit px-2 py-1 transition-colors duration-150">
                            <img className="h-10" src={github} alt="" />
                        </a>}
                        {live && <a target="_blank" rel="noreferrer" href={live} className="flex gap-2 items-center cursor-pointer  rounded-lg hover:bg-[#ffffff07] w-fit px-2 py-1 transition-colors duration-150">
                            <img className="h-10" src={arrow} alt="" />
                            <p className="font-semibold">Live View</p>
                        </a>}
                    </div>
                </div>
            </div>
            <div className="max-md:basis-full basis-1/2 ">
                <h2 className="md:hidden text-3xl lg:text-4xl xl:text-5xl font-bold text-[#32a6a8] w-full mb-10">
                    Project {nm + 1}
                </h2>
                <div className="max-w-xl mx-auto border-8 border-[#309092]">
                    <img className="translate-x-3 -translate-y-5" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;
