import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="../images/pp.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Profile"
        />
        <div className="text-center lg:text-left lg:ml-8">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="mt-2 mb-2">
            My name is Kacper Agatowski, and I am currently studying computer science at{" "}
            <a
              href="https://iadt.ie/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 font-bold"
            >
              IADT
            </a>
            . I am in my fourth year out of a four-year course.
          </p>
          <hr className="my-4 border-t-2 border-gray-300" />
          <p>
            I enjoy working in diverse environments and thrive on solving complex problems. In my
            academic journey, I've gained experience working with tools like Excel to analyze and
            manage data efficiently.
          </p>
          <hr className="my-4 border-t-2 border-gray-300" />
          <p>
            While my primary focus has been on backend development, I am open to exploring various
            aspects of computer science. Looking ahead, I am enthusiastic about the potential to
            contribute to projects in cybersecurity or AI, where I can apply my skills and passion
            for technology.
          </p>
          
          <b><p className="mt-4 text-sm">
            If you would like to contact me, click the "Contact Me" button below. If you want to see
            my certificates, click the "View Certificates" button.
          </p></b>
          <Link to="/contact"><button className="btn btn-primary mt-4">Contact Me</button></Link>
          <Link to="/certificates">
            <button className="btn btn-secondary ml-2">View Certificates</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
