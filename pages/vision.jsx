import React from "react"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { storyBG, devBG, designBG } from "../public/assets/backgrounds/index"

const vision = () => {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-screen text-center font-robot "
    >
      <div className="flex flex-col justify-between lg:flex-row md:flex-row h-full sm:flex-col md:h-screen  sm:h-screen sm:justify-center md:justify-center lg:justify-center font-robot pt-20 sm:pt-20 md:pt-20">
        <div className=" bg-[#e2dddf]/40 hover:bg-[#e2dddf] hover:text-slate-700 text-slate-700/90 transform duration-300 lg:w-1/3 md:w-full h-full sm:w-full">
          <Image
            src={storyBG}
            alt="/"
            className="absolute inset-0 w-full h-full object-cover z--1 opacity-30 pointer-events-none"
            priority
            unoptimized={true}
          />

          <div className="flex-col lg:flex-col md:flex-col sm:flex-row sm:w-full justify-between h-full py-24  ">
            <h2 className="text-slate-700 font-phudu uppercase text-4xl tracking-titleWide hover:tracking-titleDefault transform duration-1000 cursor-default   bg-[#E4E1E3]/50 py-4">
              Storyteller
            </h2>
            <p className=" mt-16 bg-[#E4E1E3]/50 px-8 py-4">
              As a storyteller, I am drawn to the power of visuals and
              interactive experiences to captivate an audience. Inspired by the
              dynamic storytelling of anime and the immersive worlds of great
              movies, I aspire to create visually stunning narratives that
              transport viewers to new and exciting places. Through the medium
              of games, I seek to engage audiences in an interactive
              storytelling experience that allows them to be a part of the story
              and shape the outcome. With a professional approach and a passion
              for storytelling, I aim to craft compelling visual narratives that
              leave a lasting impression on those who experience them.
            </p>
          </div>
        </div>
        <div className=" bg-[#ff2a6d]/40 hover:bg-[#ff2a6d] hover:text-slate-800 text-slate-700/90 transform duration-300 lg:w-1/3 md:w-full h-full sm:w-full">
          <Image
            src={devBG}
            alt="/"
            className="absolute inset-0 w-full h-full object-cover z--1 opacity-30 pointer-events-none"
            priority
            unoptimized={true}
          />
          <div className="flex-col lg:flex-col md:flex-col sm:flex-row sm:w-full justify-between h-full py-24">
            <h2 className=" font-phudu uppercase text-4xl tracking-titleWide hover:tracking-titleDefault transform duration-1000  cursor-default text-slate-100  bg-[#CD3769]/50 py-4">
              Developer
            </h2>
            <p className=" mt-16 bg-[#CD3769]/50 px-8 py-4 text-white">
              As a dedicated developer, I'm excited to leverage the power of
              Web3 to create a cutting-edge gaming platform that offers players
              unparalleled levels of ownership, control, and security. Through
              the use of blockchain technology, DeFi, and NFTs, I plan to
              revolutionize the gaming industry and make a positive impact on
              people's lives. I'm committed to delivering a professional and
              innovative Web3 gaming experience that sets new standards for the
              industry. With my passion and creativity, I'm confident that I can
              deliver a truly game-changing platform that will exceed all
              expectations.
            </p>
          </div>
        </div>
        <div className="bg-[#ADD8E6]/40 hover:bg-[#ADD8E6] hover:text-slate-700 text-slate-700/90 transform duration-300  lg:w-1/3 md:w-full h-full sm:w-full">
          <Image
            src={designBG}
            alt="/"
            className="absolute inset-0 w-full h-full object-cover z--1 opacity-30 pointer-events-none"
            priority
            unoptimized={true}
          />
          <div className="flex-col lg:flex-col md:flex-col sm:flex-row sm:w-full justify-between h-full py-24 ">
            <h2 className="text-slate-700 font-phudu uppercase text-4xl tracking-titleWide hover:tracking-titleDefault transform duration-1000  cursor-default bg-[#79AFC0]/50 py-4">
              Designer
            </h2>
            <p className=" mt-16 bg-[#79AFC0]/50 px-8 py-4 overflow-hidden">
              As a lifelong learner and explorer, I am passionate about
              constantly expanding my knowledge and understanding of the world
              and all of its intricacies. One of my areas of interest is
              technology, which I believe can be combined with the beauty of
              life, art, and creativity to create something truly remarkable. I
              aspire to turn this passion into a professional pursuit, utilizing
              my broad range of skills and interests to develop innovative
              solutions and ideas that merge the worlds of technology and
              creativity. My goal is to bring a unique perspective and creative
              energy to any project or endeavor I pursue and enjoy.
            </p>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default vision
