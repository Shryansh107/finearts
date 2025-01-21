import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 font-bold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl lg:text-4xl font-bold mb-4">Finearts NITH</h3>
            <p className="text-gray-400">
              Nurturing creativity and artistic expression at National Institute of Technology Hamirpur.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xl">
            <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#aboutUs" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </a>
              </li> */}
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
             
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-xl ">
              NIT Hamirpur
              <br />
              Himachal Pradesh, India
              <br />
              Email: finearts@nith.ac.in
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t font-light border-gray-800 mt-8 font-sans text-sm pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Finearts NITH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

