import React, { useState } from "react"
import Link from "next/link"

const Contact = () => {
  const [linkText, setLinkText] = useState("discord")

  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto p-28  w-full">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12 font-cyber opacity-60 hover:opacity-100 duration-200">
            Contact
          </h2>
        </div>
        <div className="w-full h-full p-8  text-center items-center font-robot">
          <p className="text-slate-400 max-w-[70%] m-auto">
            I'm seeking out opportunities to collaborate with companies /
            agencies / individuals, not just work for them. I want to bring my
            collective design experience to the table where we can work together
            to solve real business-problems in a way that optimizes all of our
            respective experience and knowledge.
          </p>
          <div className="p-2"></div>
          <p className="text-slate-400 max-w-[70%] m-auto">
            Write me up to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 links items-center  justify-between max-w-[370px] m-auto p-4 font-cyber text-[#ff2a6d] mobile-center">
          <div className=" flex flex-col items-center justify-between ">
            <Link
              href="https://github.com/igopib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg  hover:border-b border-[#05d9e8]">
                github
              </h3>
            </Link>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <Link
              href="https://www.linkedin.com/in/gopinho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg  hover:border-b border-[#05d9e8]">
                linkedin
              </h3>
            </Link>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <Link
              href="https://twitter.com/gopiinho"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg  hover:border-b border-[#05d9e8]">
                twitter
              </h3>
            </Link>
          </div>

          <div className=" flex flex-col items-center justify-between ">
            <Link
              href="https://www.instagram.com/gopiinho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg  hover:border-b border-[#05d9e8]">
                instagram
              </h3>
            </Link>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <Link
              href="mailto:gopinho@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg  hover:border-b border-[#05d9e8]">
                email
              </h3>
            </Link>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <h3
              className="text-lg  hover:border-b border-[#05d9e8] cursor-pointer"
              onClick={() => setLinkText("Gopinho#6037")}
            >
              {linkText}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
