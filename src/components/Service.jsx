import image from "../assets/icons/ui.svg"

// eslint-disable-next-line react/prop-types
const Service = ({ title, icon, desc, id }) => {
    return (
        <div className={`max-w-xs bg-[#103c3d] px-5 py-14 text-white flex items-center justify-between space-y-3 flex-col  hide duration-700 transition-[opacity,transform] ${id === 1 && "md:-translate-y-10"}`}>
            <div className="w-24 p-4 bg-[#0c3131] rounded-[40px] rotate-45">
                <img className="w-20 -rotate-45" src={icon} alt="" />
            </div>
            <p className="text-2xl font-bold">{title}</p>
            <p className="mt-4 text-[13px] leading-5 text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, suscipit!</p>
        </div>
    )
}

export default Service