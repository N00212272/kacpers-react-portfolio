import { useState, useEffect } from 'react';
import ProjectHero from '../../components/ProjectHero';
import axios from 'axios';

const Index = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://portfolio-react-92097-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then(response => {
        setProjects(response.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  if (!projects) return "loading ...";

  return (
    <div>
      {projects.map((project, i) => (
        <div key={i} className="mb-4">
          <ProjectHero project={project} />
        </div>
      ))}
    </div>
  );
};

export default Index;
