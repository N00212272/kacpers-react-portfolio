import React from "react";

const Contact = () => {
  return (
    <div className="hero min-h-screen bg-primary rounded flex items-center justify-center mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-8">
          <h1 className="text-5xl flex justify-center font-bold mb-4 text-white">Contact Me</h1>
          <p className="mt-2 mb-4 text-white">
            Feel free to reach out through the following channels:
          </p>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <div className="flex flex-col items-center">
              <span className="font-bold text-white">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/kacper-agatowski-342607274/"
                target="_blank"
                rel="noreferrer"
                className="btn bg-blue-500 text-black border-none "
              >
                Kacper Agatowski
              </a>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-white">Email:</span>{" "}
              <a
                href="mailto:kacperagatowski@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="btn bg-green-500 text-white border-none "
              >
                kacperagatowski@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-white">Discord:</span>{" "}
              <a
                href="https://discordapp.com/users/kapper2967"
                target="_blank"
                rel="noreferrer"
                className="btn bg-purple-500 text-white border-none "
              >
                kapper2967
              </a>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-white">Github:</span>{" "}
              <a
                href="https://github.com/N00212272?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="btn bg-neutral-500 text-white border-none "
              >
                N00212272
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
