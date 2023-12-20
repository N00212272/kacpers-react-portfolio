import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//importing Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import PageNotFound from './pages/PageNotFound';
//importing Projects
import ProjectsIndex from './pages/projects/Index';
//components
import MyNavBar from './components/MyNavBar';

function App() {
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const [term, setTerm] = useState("");
  return (
    <Router>
     <MyNavBar handleChange={handleChange}/>
      <div className='container mx-auto'>
        <Routes>
        <Route path='/projects/home' element={<ProjectsIndex term={term} />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/certificates' element={<Certificates />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
