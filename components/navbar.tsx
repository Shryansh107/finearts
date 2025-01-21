"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 text-white/90 ${
        scrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent "
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors flex gap-2 items-center">
            <Image
            alt="logo"
            src='https://fineartsnith.vercel.app/static/media/logo.1ab76022eac87d8962db.png'
            width={1000}
            height={1000}
            className="w-10 "
            />
             {scrolled && "FineArts"}
          </Link>

          <div className="hidden md:flex space-x-8 ">
          {["home","aboutUs", "gallery" ].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="text-2xl font-bold hover:text-primary transition-colors mx-2"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

