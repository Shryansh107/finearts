"use client";

import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const apiUrl = "https://fineartsnith-backend.vercel.app/";
const extradata = [
  { imageUrl: "https://res.cloudinary.com/dtxjhtjv2/image/upload/v1737458026/IMG_4191_us7osp.jpg", artist: "Pengu" },
  { imageUrl: "https://res.cloudinary.com/dtxjhtjv2/image/upload/v1737457936/IMG_4196_wlj3gv.jpg", artist: "Artists" }
];

export default function Gallery() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Filter items with "gallery" keyword here and limit to top 9 items
        const filteredData = response.data.filter((item) => item.keyword === "gallery");
        // Combine the fetched data with extra data
        setData([...filteredData.slice(0, 9), ...extradata]); // Add the extra images
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Data", data);
  }, [data]);

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-7xl font-extrabold mb-4 text-gray-400">Featured Artworks</h2>
          <p className="text-gray-500 max-w-2xl text-3xl mx-auto font-semibold">
            Discover our students&apos; creative brilliance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Show skeleton loaders while loading
            Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-200 animate-pulse"
              >
                {/* Skeleton Image */}
                <div className="w-full h-[400px] bg-zinc-900"></div>

                {/* Skeleton Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="h-6 w-3/4 bg-zinc-900 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-zinc-900 rounded"></div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : error ? (
            <p className="text-red-500 text-center">Error loading gallery: {error.message}</p>
          ) : (
            data &&
            data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.name}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-sm">{item.artist}</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
