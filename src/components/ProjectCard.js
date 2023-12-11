import { Link} from 'react-router-dom';
const ProjectCard = ({project}) => {

    const tags = project.tags.map((tag,i)=>{
        return <div key={i} className="badge badge-neutral ">{tag}</div>
    })

        return(
    
            <div className="card w-96 base-content shadow-xl rounded-badge  ">
                <div className="card-body">
                    <h2 className="card-title">{project.title}</h2>
                    <figure><img src={project.images[0].path} alt={project.images[0].caption} /></figure>
                         <p><b>description: </b>{project.description}</p>
                         <div className="card-actions justify-end">
           {tags}
           {(project.website)?(<a href={project.website} target="_blank" rel="noreferrer" className="btn btn-primary">Website</a>):""}
           {(project.github)?(<a href={project.github} rel="noreferrer" target="_blank"className="btn btn-primary">Github</a>):"" }

            <Link to={`/projects/${project.slug}`}>Show</Link>
          </div>

                            
                </div>
            </div>
           
    
        );
    
}
export default ProjectCard;