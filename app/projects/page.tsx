import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Link as LinkIcon, Instagram as InstagramIcon } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import AnimatedCard
const AnimatedCard = dynamic(() => import("../components/AnimatedCard"), {
  ssr: false,
});

export const revalidate = 60;

export default async function ProjectsPage() {
  const featured = allProjects.find(
    (project) => project.slug === "switchvibes"
  )!;
  const top2 = allProjects.find((project) => project.slug === "launchpad")!;
  const top3 = allProjects.find((project) => project.slug === "dukka")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    );

  return (
    <div className="relative pb-16 animate-fade-in">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Gallery Moon & Stars
          </h2>
          <p className="mt-4 text-zinc-400">
            Here are a few of the projects I've worked on. I'm always building
            new stuff so do check back for updates.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {/* Card pertama dengan transisi */}
          <AnimatedCard>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="relative w-full pb-[56.25%]">
                  <img
                    src="/dokumentasi/wa2.JPG"
                    alt="Deskripsi gambar"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    Judul Card 1
                  </h3>
                  <p className="mt-2 text-zinc-400">
                    Ini adalah deskripsi singkat tentang isi card pertama.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <span className="text-zinc-500 text-xs flex items-center gap-1">
                    <Link
                      href="https://www.instagram.com/moonstars.vr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      className="text-zinc-200 hover:text-zinc-50 mr-6"
                    >
                      <InstagramIcon size={20} strokeWidth={2} />
                    </Link>
                    <Link
                      href="https://switch-vibes.vercel.app/"
                      target="_blank"
                      className="text-zinc-200 hover:text-zinc-50"
                    >
                      <LinkIcon size={20} />
                    </Link>
                  </span>
                </div>
              </article>
            </Card>
          </AnimatedCard>

          {/* Card kedua dengan transisi */}
          <AnimatedCard>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="relative w-full pb-[56.25%]">
                  <img
                    src="/dokumentasi/wa2.JPG"
                    alt="Deskripsi gambar"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    Judul Card 2
                  </h3>
                  <p className="mt-2 text-zinc-400">
                    Ini adalah deskripsi singkat tentang isi card kedua.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <span className="text-zinc-500 text-xs flex items-center gap-1">
                    <Link
                      href="https://www.instagram.com/moonstars.vr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      className="text-zinc-200 hover:text-zinc-50 mr-6"
                    >
                      <InstagramIcon size={20} strokeWidth={2} />
                    </Link>
                    <Link
                      href="https://switch-vibes.vercel.app/"
                      target="_blank"
                      className="text-zinc-200 hover:text-zinc-50"
                    >
                      <LinkIcon size={20} />
                    </Link>
                  </span>
                </div>
              </article>
            </Card>
          </AnimatedCard>

          <AnimatedCard>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="relative w-full pb-[56.25%]">
                  <img
                    src="/dokumentasi/wa2.JPG"
                    alt="Deskripsi gambar"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    Judul Card 3
                  </h3>
                  <p className="mt-2 text-zinc-400">
                    Ini adalah deskripsi singkat tentang isi card ketiga.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <span className="text-zinc-500 text-xs flex items-center gap-1">
                    <Link
                      href="https://www.instagram.com/moonstars.vr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      className="text-zinc-200 hover:text-zinc-50 mr-6"
                    >
                      <InstagramIcon size={20} strokeWidth={2} />
                    </Link>
                    <Link
                      href="https://switch-vibes.vercel.app/"
                      target="_blank"
                      className="text-zinc-200 hover:text-zinc-50"
                    >
                      <LinkIcon size={20} />
                    </Link>
                  </span>
                </div>
              </article>
            </Card>
          </AnimatedCard>

          <AnimatedCard>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="relative w-full pb-[56.25%]">
                  <img
                    src="/dokumentasi/wa2.JPG"
                    alt="Deskripsi gambar"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    Judul Card 4
                  </h3>
                  <p className="mt-2 text-zinc-400">
                    Ini adalah deskripsi singkat tentang isi card keempat.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <span className="text-zinc-500 text-xs flex items-center gap-1">
                    <Link
                      href="https://www.instagram.com/moonstars.vr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      className="text-zinc-200 hover:text-zinc-50 mr-6"
                    >
                      <InstagramIcon size={20} strokeWidth={2} />
                    </Link>
                    <Link
                      href="https://switch-vibes.vercel.app/"
                      target="_blank"
                      className="text-zinc-200 hover:text-zinc-50"
                    >
                      <LinkIcon size={20} />
                    </Link>
                  </span>
                </div>
              </article>
            </Card>
          </AnimatedCard>

          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />

          {/* Tambahkan transisi serupa pada card lainnya */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
