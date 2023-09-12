import Project from "./Project"


const Projects = () => {
    return (
        <div className="container mx-auto p-4 projects " >
            {Array(5).fill(0).map((_, id) => <Project key={id} nm={id} />)}
        </div>
    )
}

export default Projects