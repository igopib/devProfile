import React from "react"
import "devicon/devicon.min.css"

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-center my-12 font-cyber">
            Skills
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg-grid-cols-4 gap-8 tracking-widest">
          <div className="p-6  ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <div className=" logoNeonSol devicon-solidity-plain text-6xl text-[#d1f7ff] hover:text-[#c4c4c4] hover:scale-110 transform duration-700"></div>
              </div>
              <div className="neonH2 flex flex-col items-center justify-center">
                <h2 className="text-3xl">Solidity</h2>
              </div>
            </div>
          </div>

          <div className="p-6  ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <div className="logoNeonJS devicon-javascript-plain text-6xl text-[#d1f7ff] hover:text-[#f0db4f] hover:scale-110 transform duration-700"></div>
              </div>
              <div className="neonH2 flex flex-col items-center justify-center">
                <h2 className="text-3xl">JavaScript</h2>
              </div>
            </div>
          </div>

          <div className="p-6  ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <div className="devicon-tailwindcss-plain text-6xl text-[#d1f7ff] hover:text-[#37bcf8] hover:scale-110 transform duration-700"></div>
              </div>
              <div className="neonH2 flex flex-col items-center justify-center">
                <h2 className="text-3xl">Tailwind</h2>
              </div>
            </div>
          </div>

          <div className="p-6 5 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <div className="devicon-react-original text-6xl text-[#d1f7ff] hover:text-[#61d9fb] hover:scale-110 transform duration-700"></div>
              </div>
              <div className="neonH2 flex flex-col items-center justify-center">
                <h2 className="text-3xl">React</h2>
              </div>
            </div>
          </div>

          <div className="p-6 5 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <div className="devicon-nodejs-plain text-6xl text-[#d1f7ff] hover:text-[#3e883d] hover:scale-110 transform duration-700"></div>
              </div>
              <div className="neonH2 flex flex-col items-center justify-center">
                <h2 className="text-3xl">NodeJS</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
