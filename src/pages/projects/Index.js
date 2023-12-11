import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import axios from 'axios';

const Index = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://portfolio-react-92097-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then(response => {
        setProjects(response.data);
        console.log(response.data)
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  if (!projects) return "loading ...";

  const projectList = projects.map((project, i) => {
    return <ProjectCard key={i} project={project} />;
  });

  return (
    <div className='grid grid-cols-4 gap-6 '>
      {projectList}
    </div>
  );
};

export default Index;
