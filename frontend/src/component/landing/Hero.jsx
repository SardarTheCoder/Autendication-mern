import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/181/550/524/bmw-white-cars-car-vehicle-street-hd-wallpaper-preview.jpg')`,
      }}
    >
      {/* Overlay for Minimal Blur Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-32 w-full max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase mb-6">
          “If You Don't Know Where You Are Going, Any Road Will Get You There.”
        </h1>
        <p className="text-lg md:text-xl font-semibold italic mb-8">
          – Lewis Carroll
        </p>
        <a
          href="/register"
          className="px-6 py-3 bg-gradient-to-r from-gray-500 via-black to-gray-500 text-black font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-black hover:text-white"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default Hero;
