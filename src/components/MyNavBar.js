import { Link } from 'react-router-dom';

const MyNavBar = () => {
    return (
        <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost bg-base-200 btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-white rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/projects/home'>Projects</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href className="btn btn-ghost normal-case text-xl text-white">Kacpers Porfolio</a>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>
    );
};

export default MyNavBar;