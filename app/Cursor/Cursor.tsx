"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface CursorProps {
  isDesktop: boolean;
}

const Cursor: React.FC<CursorProps> = ({ isDesktop }) => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const follower = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isDesktop && document.body.clientWidth > 767) {
      const cursorElement = cursor.current;
      const followerElement = follower.current;

      if (cursorElement && followerElement) {
        cursorElement.classList.remove("hidden");
        followerElement.classList.remove("hidden");

        const moveCircle = (e: MouseEvent) => {
          gsap.to(cursorElement, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "none",
          });
          gsap.to(followerElement, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: "none",
          });
        };

        // Saat hover, kursor kecil mengecil dan outline membesar
        const hover = () => {
          gsap.to(cursorElement, {
            scale: 0.8, // Mengecilkan kursor
            duration: 0.3,
            ease: "power1.out",
          });
          gsap.to(followerElement, {
            scale: 2.5, // Membesarkan outline
            duration: 0.3,
            ease: "power1.out",
            borderWidth: 1, // Opsional: Membesarkan border outline
          });
        };

        // Saat un-hover, kursor dan outline kembali ke ukuran semula
        const unHover = () => {
          gsap.to(cursorElement, {
            scale: 1, // Kembali ke ukuran semula
            duration: 0.3,
            ease: "power1.out",
          });
          gsap.to(followerElement, {
            scale: 1, // Kembali ke ukuran semula
            duration: 0.3,
            ease: "power1.out",
            borderWidth: 1, // Opsional: Mengembalikan border ke semula
          });
        };

        document.addEventListener("mousemove", moveCircle);

        // Tambahkan efek hover pada elemen dengan class `.link`
        document.querySelectorAll(".link").forEach((el) => {
          el.addEventListener("mouseenter", hover);
          el.addEventListener("mouseleave", unHover);
        });

        return () => {
          document.removeEventListener("mousemove", moveCircle);
          document.querySelectorAll(".link").forEach((el) => {
            el.removeEventListener("mouseenter", hover);
            el.removeEventListener("mouseleave", unHover);
          });
        };
      }
    }
  }, [isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className="fixed -top-4 -left-4 select-none pointer-events-none z-50 hidden"
        style={{
          width: '24px', // Adjust the width of the SVG cursor
          height: '24px', // Adjust the height of the SVG cursor
          cursor: "none",
        }}
      >
        <Image
          src="/moonstars.svg"
          alt="Custom Cursor"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        ref={follower}
        className="bg-transparent border border-white/[0.2] rounded-full fixed -top-6 -left-6 w-10 h-10 select-none pointer-events-none z-50 hidden"
      />
    </>
  );
};

export default Cursor;
