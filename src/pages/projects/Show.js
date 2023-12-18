import axios from 'axios';
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import ProjectHero from '../../components/ProjectHero';

const Show = () => {
    const [project,setProject]=useState(null);
    const {slug} = useParams();
   
    useEffect( () => {
        axios.get('https://portfolio-react-92097-default-rtdb.europe-west1.firebasedatabase.app/.json')
        .then(response => {
            setProject(response.data.find(project=>project.slug === slug));
        })
        .catch(error =>{
            error.message(error);
        })
    },[])
    if(!project)return(
        <div className="flex justify-center items-center h-screen">
                <span className="loading loading-infinity"></span>
            </div>
    )
    return (
        <ProjectHero
          project={project}
        />
      
    );
  
};

export default Show;