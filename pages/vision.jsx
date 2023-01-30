import React, { useEffect } from "react"
import { motion as m } from "framer-motion"

const vision = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-screen text-center font-robot pb-16"
    >
      <div className="max-w-[1240px] w-full pt-28 h-full mx-auto p-2 flex justify-center items-center">
        <div className="pt-8">
          <p className="uppercase text-sm tracking-widest text-gray-400">
            Looking forward to the future
          </p>
          <div className="neonH2 flex items-center justify-center cursor-default">
            <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12 font-cyber opacity-60 hover:opacity-100 duration-200">
              Vision
            </h2>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default vision
