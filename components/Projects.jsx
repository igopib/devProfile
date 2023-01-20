import React from "react"
import Image from "next/image"
import sibylImage from "../public/assets/projects/sibyl.png"
import cyberImage from "../public/assets/projects/cyber.png"
import Link from "next/link"
import ProjectsItems from "./ProjectsItems"

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto p-8 ">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12 font-cyber">
            Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItems
            title="NFT MINT PAGE"
            backgroundImg={sibylImage}
            stack="ReactJS / Solidity / Ethers"
            projectUrl="https://whimsical-kheer-5221bd.netlify.app/"
          />

          <ProjectsItems
            title="NFT MARKETPLACE"
            backgroundImg={cyberImage}
            stack="NextJS / Solidity"
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
