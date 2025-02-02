// import React from "react";
import RouterImage from "../assets/Homelab_Router.jpg";
import ServerArea from "../assets/Homelab_Servers_4.jpg";

const Hero = () => {
  return (
    <section className="pt-8 py-4 max-w-[900px] mx-auto">
      <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8">James' Homelab</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="relative group w-80 sm:w-100 mx-auto">
            <img
              src={RouterImage}
              alt="Homelab 1"
              className="rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-center px-4">
                Router and wireless AP area.
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group w-80 sm:w-100 mx-auto">
            <img
              src={ServerArea}
              alt="Homelab 2"
              className="rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-center px-4">
                Server area containing my server nodes and switches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
