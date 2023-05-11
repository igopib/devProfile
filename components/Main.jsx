import React, { useEffect } from "react"
import { motion as m } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Internal Imports
import { avatar } from "../public/assets/backgrounds"

const Main = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-screen pt-[64px] group text-zinc-100 bg-zinc-900"
    >
      <div className="flex lg:flex-col md:flex-col sm:flex-col w-full h-full justify-between">
        <div className="flex h-full lg:flex-row md:flex-row sm:flex-col">
          <div className="flex lg:w-[40%] md:w-[40%] sm:w-full flex-col gap-4 m-1 p-3 font-electro text-left bg-[#ff2a6d]/10 border border-[#ff2a6d]">
            <h1 className="text-4xl font-cyber text-[#ff2a6d] mb-8">Profile</h1>
            <Image
              src={avatar}
              alt="/"
              className="w-[170px] h-[170px] border border-[#ff2a6d] flex items-center justify-center opacity-40 hover:opacity-60 transform duration-300 cursor-pointeryar"
              priority
              unoptimized={true}
              style={{ margin: "0 auto" }}
            />
            <p className="text-center text-[#ff2a6d] text-xs mb-4 underline">
              avatar
            </p>
            <div className="mx-4">
              <h2 className="text-2xl tracking-tighter flex justify-between">
                Name:{" "}
                <span className="text-right text-[#ff2a6d]">
                  Gurpreet Singh
                </span>
              </h2>
              <h2 className="text-2xl tracking-tighter flex justify-between">
                Version: <span className="text-right">v.1998</span>
              </h2>
              <h2 className="text-2xl tracking-tighter flex justify-between">
                Location: <span className="text-right">Manitoba, CA</span>
              </h2>
              <h2 className="text-2xl tracking-tighter flex justify-between">
                Alias: <span className="text-right">Gopinho</span>
              </h2>
            </div>
            <Link
              href="https://drive.google.com/file/d/1wM0f_5Z0fP6SfMVMZdNO6G_GSZCZrhn4/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 m-1 h-full lg:text-4xl md:text-2xl sm:text-xl items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
            >
              blockchain cv
            </Link>
            <Link
              href="https://drive.google.com/file/d/1wM0f_5Z0fP6SfMVMZdNO6G_GSZCZrhn4/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 m-1 h-full lg:text-4xl md:text-2xl sm:text-xl items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
            >
              cv
            </Link>
          </div>
          <div className="lg:w-[60%] md:w-[60%] sm:w-full flex flex-col gap-4 m-1 p-3 font-electro text-left bg-[#ff2a6d]/10 border border-[#ff2a6d]"></div>
        </div>
        <div>
          <div className="w-full lg:text-3xl md:text-2xl sm:text-sm">
            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 font-electro w-full justify-center text-center tracking-wider">
              <Link
                href="/projects"
                className="flex gap-4 py-4 m-1 items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
              >
                projects
              </Link>
              <Link
                href="/skills"
                className="flex gap-4 py-4 m-1 items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
              >
                skills
              </Link>
              <Link
                href="/contact"
                className="flex gap-4 py-4 m-1 items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Main
