import {useEffect,useState,lazy, Suspense} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Demo = () => {
    const navigate = useNavigate();
    const [project,setProject]=useState(null);
    const {slug} = useParams();
    const App = lazy(()=> import(`./demos/${slug}/App`))
    useEffect( () => {
        axios
        .get('https://portfolio-react-92097-default-rtdb.europe-west1.firebasedatabase.app/.json')
        .then(response => {
            let proj = response.data.find(project=>project.slug === slug);
            if(!proj){
                navigate("/projects")
            }
            else if(!proj.demo){
                navigate(`/projects/${proj.slug}`)
            }
            else{
                setProject(proj)
            }
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

    return(
        <Suspense fallback={<p>Loading...</p>}>
            <App/>
        </Suspense>
    );
}
export default Demo;