import React from "react"
import ProjectsItems from "../components/ProjectsItems"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { projectBG } from "../public/assets/backgrounds/index"
import {
  sibylImage,
  dexImage,
  nftImage,
  untitledImage,
} from "../public/assets/projects/index"
const Projects = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-[1240px] mx-auto p-8 h-full justify-center pt-28"
    >
      <Image
        src={projectBG}
        alt="/"
        className="fixed inset-0 w-full h-full object-cover z-[-1] opacity-20 pointer-events-none"
        priority
        unoptimized={true}
      />
      <div className="neonH2 flex items-center justify-center cursor-default">
        <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12 font-cyber  duration-200">
          Projects
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectsItems
          title="NFT MINT PAGE"
          backgroundImg={sibylImage}
          stack="ReactJS / Solidity / Ethers"
          projectUrl="/sibyl"
          description="NFT project based on anime psycho pass. Each NFT is supposed to be an access token to every member in Sibyl system"
        />

        <ProjectsItems
          title="DEFI EXCHANGE"
          backgroundImg={dexImage}
          stack="NextJS / Solidity / TailWindCSS"
          projectUrl="https://singular-parfait-06cfa7.netlify.app/"
          description="Defi Exchange build using Solidity smart contracts. Follows Uniswap AMM, hardhat for contract development."
        />
        <ProjectsItems
          title="untitled"
          backgroundImg={untitledImage}
          stack="NextJS / TailWindCSS"
          projectUrl="https://boisterous-hamster-73490e.netlify.app/"
          description="As the title says, this project is still untitled. This may or may not change later on."
        />
        <ProjectsItems
          title="NFT SHOWCASE"
          backgroundImg={nftImage}
          stack="NextJS / Ethers"
          projectUrl="https://scintillating-monstera-c20172.netlify.app/"
          description="NFT showcase page, where it indexes all nft's from a certain address and displays them with link to opensea."
        />
      </div>
    </m.div>
  )
}

export default Projects
