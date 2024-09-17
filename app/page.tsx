"use client"; // Pastikan ini di paling atas

import Link from "next/link";
import React, { useEffect } from "react";
import Particles from "./components/particles";
import Cursor from "../app/Cursor/Cursor"; // Corrected import path

const navigation = [
  { name: "About M&S", href: "/abouts" },
  { name: "Gallery", href: "/projectss" },
];

export default function Home() {
  useEffect(() => {
    // Menyembunyikan kursor default di seluruh halaman, bahkan ketika hover
    document.body.style.cursor = "none"; // Untuk menyembunyikan kursor secara global

    return () => {
      // Mengembalikan kursor default saat komponen di-unmount
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black cursor-none">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
            key={item.href}
            href={item.href}
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 cursor-none link" // Menambahkan class 'link'
          >
            {item.name}
          </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-none text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Moon & Stars
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          Selamat datang di web moon & stars, disini adalah tempat asal muasal moon & stars.
        </h2>
      </div>

      {/* Add Cursor component */}
      <Cursor isDesktop={true} /> {/* Adjust the `isDesktop` prop as needed */}
    </div>
  );
}
