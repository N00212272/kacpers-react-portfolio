const ProjectHero = ({ project }) => {
  const tags = project.tags.map((tag, i) => (
    <div key={i} className="badge badge-neutral mr-2">
      {tag}
    </div>
  ));

  return (
    <div className="hero min-h-screen base-content shadow-xl mt-5 rounded-box border border-gray-300">
      <div className="hero-content grid lg:grid-cols-2 gap-4">
        <div className="lg:col-span-1">
          {/* Project Image */}
          {project.images && (
            <img
              src={project.images[0].path}
              alt="Project Image"
              className="py-3 max-w-full rounded-lg shadow-2xl"
              title={project.images[0].caption}
            />
            
          )}
        </div>
        <div className="lg:col-span-1 lg:pl-4">
          {/* Project details */}
          <h1 className="text-5xl font-bold py-4">{project.title}</h1>
          <p><b>Created in: </b>{project.date}</p>
          <div className="description-container py-2">
            <b>About this Project: </b>
            <p>{project.description}</p>
          </div>
          <p className="py-2">
            <b>Tags: </b>
            {tags}
          </p>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mr-2"
            >
              Website
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary mr-2"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
