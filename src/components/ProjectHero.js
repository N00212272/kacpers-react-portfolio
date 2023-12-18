import { Link } from "react-router-dom";
const ProjectHero = ({project}) => {
    const tags = project.tags.map((tag,i)=>{
        return <div  key={i} className="badge badge-neutral mr-2 ">{tag}</div>
    })
      return (
        <div className="hero min-h-screen base-content shadow-xl mt-5 rounded-box">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              {/* Project details */}
              <h1 className="text-5xl font-bold py-4">{project.title}</h1>
              <p className="py-2"><b>About this Project: </b>{project.description}</p>
              <p className="py-2"><b>Tags: </b>{tags}</p>
              {(project.website)?(<a href={project.website} target="_blank" rel="noreferrer" className="btn btn-primary mr-2">Website</a>):""}
           {(project.github)?(<a href={project.github} rel="noreferrer" target="_blank"className="btn btn-primary mr-2">Github</a>):"" }
           {(project.demo)?(<Link to={`/projects/${project.slug}/demo`}><button>Demo</button></Link>):""}
    
        
    
             
    
              
            </div>
          </div>
        </div>
      );
    }
    export default ProjectHero;