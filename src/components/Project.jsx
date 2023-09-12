
// eslint-disable-next-line react/prop-types
const Project = ({ nm }) => {
    return (
        <div className="flex">
            <div className="md:basis-1/2 basis-full">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#32a6a8]">Project {nm}</h2>
            </div>
            <h2 className="basis-1/2 max-md:hidden">test</h2>
        </div>
    )
}

export default Project