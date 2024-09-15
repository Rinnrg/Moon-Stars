// components/AnimatedSection.tsx
"use client"; // This ensures that the component is only rendered on the client-side

import { motion } from "framer-motion";
import React from "react";

const AnimatedSection = () => {
  return (
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
        >
          Apa Itu Moon & Stars
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="mt-4 text-zinc-400"
        >
          Hi again! Thanks for stopping by. If you're curious to learn more
          about me, well, here goes! I'm a Software Developer specializing in
          frontend development. I enjoy creating engaging and user-friendly
          experiences on the web.
          <br />
          <br />
          Fluent in TypeScript and React, I strive to deliver clean and
          accessible code while keeping the end user in mind. Collaboration is
          where I truly shine. I thrive when bouncing ideas off others and
          working together to solve problems.
          <br />
          <br />
          And when I'm not immersed in the world of tech, you'll probably find
          me buried in African literature or indulging in some sci-fi movie
          marathon. Oh, and here's a little secret: I actually made a career
          switch from Medicine to Software Development! But let's keep that
          between us 😉
        </motion.p>
      </div>

      <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
        >
          Apa Itu Moon & Stars
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="mt-1 text-zinc-400"
        >
          Hi again! Thanks for stopping by. If you're curious to learn more
          about me, well, here goes! I'm a Software Developer specializing in
          frontend development. I enjoy creating engaging and user-friendly
          experiences on the web.
          <br />
          </motion.p>
    </div>
  );
};

export default AnimatedSection;
