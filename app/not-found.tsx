import React from "react";
import Image from "next/image";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black text-white">
      <div className="w-64 h-34"> {/* Membesarkan ukuran container */}
        {/* Directly import the SVG */}
        <Image
          src="/404.svg"
          alt="404 Not Found"
          width={256} // Membesarkan lebar SVG
          height={256} // Membesarkan tinggi SVG
          className="object-contain"
        />
      </div>
      <h1 className="text-4xl font-bold mt-4">6.12</h1>
      <p className="text-lg mt-2">Maaf ya cantik page ini masih di kerjain admin</p>
    </div>
  );
};

export default Custom404;
