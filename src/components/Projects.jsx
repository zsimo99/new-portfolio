import Project from "./Project"


const Projects = () => {
    return (
        <div className="container mx-auto px-4 projects flex flex-col gap-8" >
            {Array(5).fill(0).map((_, id) => <Project key={id} nm={id} />)}
        </div>
    )
}

export default Projects