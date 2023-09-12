import image from "../assets/about_us 1.svg";
import arrow from "../assets/arrow-right.svg";
// eslint-disable-next-line react/prop-types
const Project = ({ nm }) => {
    return (
        <div className="flex md:items-center max-md:flex-col-reverse relative py-8">
            <div className="md:basis-1/2 basis-full">
                <h2 className="max-md:hidden text-3xl lg:text-4xl xl:text-5xl font-bold text-[#32a6a8]">
                    Project {nm + 1}
                </h2>
                <div className="p-3">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl mt-4 mb-2">
                        Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
                        aperiam ab, vitae odio dolorem deleniti soluta, iste eaque, tempora
                        adipisci molestiae inventore minima. Illum praesentium autem vero
                        quaerat nulla accusamus!
                    </p>
                    <div className="flex gap-2 items-center">
                        <img className="h-10" src={arrow} alt="" />
                        <p className="font-semibold">Live View</p>
                    </div>
                </div>
            </div>
            <div className="max-md:basis-full basis-1/2 ">
                <h2 className="md:hidden text-3xl lg:text-4xl xl:text-5xl font-bold text-[#32a6a8] w-full">
                    Project {nm + 1}
                </h2>
                <div className="max-w-sm mx-auto">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;
