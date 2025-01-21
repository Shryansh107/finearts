"use client"
import Typewriter from "typewriter-effect";

export default function HeroSection(){

    return(
        <> <div
        id='home'
        className=" bg-cover bg-no-repeat relative bg-center  h-[100vh] "
        style={{
            backgroundImage: `url(https://res.cloudinary.com/dsxllf6tt/image/upload/v1705477840/x9fe2enk2hwwvbsu4qjl.jpg)`,
        }}
    >
        <div className="text-white  h-[100vh] flex flex-col  justify-center items-center text-center bg-black bg-opacity-65 ">
            <div className="flex-grow flex justify-center items-center">
                <div className="mt-[3rem]">
                    <h1 className={`font-bold text-[3.3rem] lg:text-[6rem] tracking-wider `}>
                        FineArts
                    </h1>
                    <h1 className="font-normal text-[1.3rem] lg:text-[1.8rem] tracking-wider flex gap-2">
                        <Typewriter
                            options={{
                                strings: [
                                    "Unleashing Creativity, Celebrating Artistic Expression",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
            </div>
            <div className="mb-[3rem]">
                <a
                href="#gallery"
                className="bg-white font-sans text-gray-900 px-8 py-3 rounded-full font-poppins font-medium hover:bg-gray-100 transition-colors inline-block "
              >
                Explore Gallery
              </a>
            </div>
        </div>
    </div></>
    )
}