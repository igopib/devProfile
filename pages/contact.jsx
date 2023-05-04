import React, { useState } from "react"
import Link from "next/link"
import "devicon/devicon.min.css"
import { motion as m } from "framer-motion"

const Contact = () => {
  const [linkText, setLinkText] = useState("discord")

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen pt-[75px] group"
    >
      <div className="flex flex-row md:flex-row sm:flex-col w-full overflow-hidden">
        <div className="w-1/2 h-full">
          <div className="flex">
            <h2
              style={{ height: "calc(100vh - 75px)" }}
              className="writing-vertical font-cyber rotate-180 h-full text-zinc-500 uppercase text-3xl text-center transform duration-300 bg-[#3c3d42] group-hover:text-[#ff577d] px-2"
            >
              Contact
            </h2>
            <div className="flex flex-col w-full">
              <div className="h-[70%]">Paragraph here</div>
              <div className="h-[30%] w-full grid grid-cols-1 border-t border-zinc-700  text-center items-center justify-center">
                <Link
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 h-full items-center justify-center hover:bg-zinc-800 text-6xl font-phudu border border-zinc-700 hover:scale-105 hover:text-white transform duration-300"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 text-3xl font-phudu w-full h-full justify-center text-center font-semibold tracking-wider">
            <Link
              href="https://github.com/igopib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:scale-105 border border-zinc-700 hover:border-[#ff2a6d] hover:text-white transform duration-300"
            >
              Github
              <div className="devicon-github-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/gopinho/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:scale-105 border border-zinc-700 hover:border-[#ff2a6d] hover:text-[#0177B5] transform duration-300"
            >
              linkedin
              <div className="devicon-linkedin-plain text-3xl"></div>
            </Link>
            <Link
              href="https://twitter.com/gopiinho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:scale-105 border border-zinc-700 hover:border-[#ff2a6d] hover:text-[#1C9BEF] transform duration-300"
            >
              Twitter
              <div className="devicon-twitter-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.instagram.com/gopiinho/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:scale-105 border border-zinc-700 hover:border-[#ff2a6d] hover:text-[#37bcf8] transform duration-300"
            >
              Instagram
            </Link>
            <Link
              href="mailto:gopinho@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:scale-105 border border-zinc-700 hover:border-[#ff2a6d] hover:text-[#D04836] transform duration-300"
            >
              Email
            </Link>
            <h3
              onClick={() => setLinkText("Gopinho#6037")}
              className="flex gap-4 items-center justify-center cursor-pointer hover:bg-zinc-800 hover:scale-105 border border-zinc-700 hover:border-[#ff2a6d] select-text hover:text-[#7288DA] transform duration-300"
            >
              {linkText}
            </h3>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Contact
