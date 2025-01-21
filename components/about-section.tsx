"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="aboutUs" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-7xl font-extrabold mb-4 text-gray-400">About Us</h2>
          {/* <p className="text-gray-500 max-w-2xl text-3xl mx-auto font-semibold">
            Step into the vibrant world of artistic expression.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-400 text-2xl font-bold"
          >
            <p>
            Step into the vibrant world of the Fine Arts Club at NIT Hamirpur, where creativity thrives and artistic expression takes center stage            </p>
            <p>
            Discover the incredible talents of our student artists through vivid paintings, dynamic sculptures, and more. Our gallery reflects the diverse artistry of our college community.            </p>
            <p>
            Join us in celebrating the extraordinary talents shaping our artistic landscape. The Fine Arts Club is a space where students push their creative boundaries and showcase the beauty within every piece            </p>
            <p>
            Welcome to the heart of artistic expression at NIT Hamirpur, where every masterpiece tells a unique story.            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="https://res.cloudinary.com/dtxjhtjv2/image/upload/v1737457556/DSC_0964_jzqmuf.jpg" // Replace with your actual image URL
              alt="Fine Arts Club"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
