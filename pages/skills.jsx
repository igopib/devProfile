import React from "react"
import "devicon/devicon.min.css"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { stackBG } from "../public/assets/backgrounds/index"

const Skills = () => {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-screen bg-zinc-800 pt-[75px] font-robot"
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:flex-row w-full h-1/2">
          <div
            className="w-1/2 group pr-6 sm:w-full justify-between flex items-center border-r border-zinc-500 hover:bg-zinc-300 hover:text-black transform duration-300"
            style={{ height: "calc(50vh - 75px)" }}
          >
            <h2 className="writing-vertical rotate-180 h-full text-zinc-700 uppercase text-4xl text-center transform duration-300 cursor-default bg-zinc-800 group-hover:text-white px-2">
              Design
            </h2>
            <div className="flex flex-col h-full items-center justify-between py-12">
              <p>Photoshop</p>
              <p>Gimp</p>
              <p>Figma</p>
            </div>
            <div className="w-[60%] h-full py-8">
              <p>
                This is just to check how big can this shit get and how can I re
                arrange this. Probably would need to fix this.
              </p>
            </div>
          </div>
          <div
            className="w-1/2 group pl-6 sm:w-full justify-between flex items-center border-r border-zinc-500 hover:bg-zinc-300 hover:text-black transform duration-300"
            style={{ height: "calc(50vh - 75px)" }}
          >
            <div className="w-[60%] h-full py-8">
              <p>
                This is just to check how big can this shit get and how can I re
                arrange this. Probably would need to fix this.
              </p>
            </div>
            <div className="flex flex-col h-full items-center justify-between py-12">
              <p>Photoshop</p>
              <p>Gimp</p>
              <p>Figma</p>
            </div>

            <h2 className="writing-vertical h-full text-zinc-700 uppercase text-4xl text-center transform duration-300 cursor-default bg-zinc-800 group-hover:text-white px-2">
              Web
            </h2>
          </div>
        </div>
        <div
          className="w-full group h-1/2 flex flex-col items-center border-t border-zinc-500 hover:bg-zinc-300 hover:text-black transform duration-300"
          style={{ height: "calc(50vh)" }}
        >
          <div className="grid grid-cols-4 w-full h-full justify-center text-center">
            <div className="flex items-center justify-center hover:bg-zinc-800 transform duration-300">
              Solidity
            </div>
            <div className="flex items-center justify-center">Typescript</div>
            <div className="flex items-center justify-center">Typescript</div>
            <div className="flex items-center justify-center">Tailwindcss</div>
            <div className="flex items-center justify-center">Node.js</div>
            <div className="flex items-center justify-center">Solidity</div>
            <div className="flex items-center justify-center">Solidity</div>
            <div className="flex items-center justify-center">Solidity</div>
          </div>
          <div className="w-full rotate-180 uppercase text-4xl text-zinc-700 text-center transform duration-300 cursor-default bg-zinc-800 group-hover:text-white py-2">
            Stack
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Skills
