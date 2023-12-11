import { Link } from "react-router-dom";
const Home = () => {
    return(
        <div className="hero min-h-screen mt-5 mb-5 rounded overflow-hidden shadow-lg" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to my Porfolio Page</h1>
            <p className="mb-5">I am a Computer Science student at Iadt, based in Dun Laoghaire, Dublin, Ireland.</p>
            <p> I am passionate about web development, mainly focusing on backend technologies.</p>
            <Link to="/about"><button className="btn btn-primary mt-5">About Me</button></Link>
          </div>
        </div>
      </div>
    );
}
export default Home;