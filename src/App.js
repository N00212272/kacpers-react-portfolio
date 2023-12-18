import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//importing Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
//importing Projects
import ProjectsIndex from './pages/projects/Index';
import ProjectsDemo from './pages/projects/Demo';
import ProjectsShow from './pages/projects/Show'; 
//components
import MyNavBar from './components/MyNavBar';

function App() {
  return (
    <Router>
     <MyNavBar/>
      <div className='container mx-auto'>
        <Routes>
        <Route path='/projects/home' element={<ProjectsIndex />} />
        <Route path='/projects/:slug' element={<ProjectsShow />} />

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
