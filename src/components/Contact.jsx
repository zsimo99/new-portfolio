import { social } from "../constants"
import logo from "../assets/logo.svg"

const Contact = () => {
    return (
        <section id="contact" className="bg-[#032324] pt-24 sm:pt-40 text-gray-300  ">
            <div className="rounded-t-[100px] min-h-[500px] bg-[#0A4F51] bg-gradient-to-r from-[#2c6f74] to-[#026468] relative p-10">
                <div className="w-48 h-48 sm:w-80 sm:h-80 top-0 left-0 rounded-full -translate-y-1/2 absolute -translate-x-1/2 opacity-30 bg-[#2aa2a7]" />
                <div className="w-48 h-48 sm:w-80 sm:h-80 top-0 right-0 rounded-full -translate-y-1/2 absolute translate-x-1/2 opacity-30 bg-[#2aa2a7]" />
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#40dcdf] text-center">Contact</h2>
                <div className="flex max-lg:flex-col-reverse lg:gap-20">
                    <div className="lg:basis-1/2 lg:p-4">
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#33afb1] mt-8">Drop Me a Message</h3>
                        <p className="max-w-md mt-4 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae beatae molestias culpa aspernatur, fugiat aperiam nisi dicta officia perspiciatis odit.</p>
                        <div className="flex max-lg:flex-col items-center">
                            <ul className="basis-1/2 flex-1 mt-8 flex  lg:flex-col gap-4 max-lg:justify-center flex-wrap">
                                {social.map((elm, id) => <li key={id}>
                                    <a href={elm.link} className="inline-block bg-gradient-to-r rounded-lg from-[#285c5c] to-[#0b6668] gap-4 p-2">
                                        <img className="w-10" src={elm.icon} alt="" />
                                    </a>
                                </li>)}
                            </ul>
                            <div className="basis-1/2 flex-1">
                                <img className="max-w-xs w-full" src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:basis-1/2 lg:p-20">
                        <form action="" className="hide duration-700 transition-[opacity,transform] p-10 mt-8 bg-gradient-to-l from-[#2c6f74] to-[#026468] space-y-4 rounded-3xl">
                            <input type="text" className="w-full text-lg bg-[#0d3536] pl-4 pr-2 py-2 rounded-md outline-none text-gray-200" placeholder="Name" />
                            <input type="text" className="w-full text-lg bg-[#0d3536] pl-4 pr-2 py-2 rounded-md outline-none text-gray-200" placeholder="Email" />
                            <textarea className="w-full h-24 bg-[#0d3536] pl-4 pr-2 py-2 rounded-md outline-none text-gray-200 resize-none" name="" placeholder="Message"></textarea>
                            <button type="submit" className="text-gray-200  px-10 py-2 mt-4 block rounded-md  text-lg font-bold  bg-gradient-to-r to-[#029699] from-[#1b7475] relative z-0">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md  opacity-0 hover:opacity-100 transition-opacity duration-200 w-full h-full bg-[#ffffff30] z-10" />
                                Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact