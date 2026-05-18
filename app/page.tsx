"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MasAmicusWebsite() {
  const batches = [
    {
      year: "2023",
      name: "Batch Conquerors",
      role: "Rooted in 2 Samuel",
      motto:
        "A chapter of courage, covenant, and steadfast leadership shaped by David's story in 2 Samuel.",
      video: process.env.NEXT_PUBLIC_BLOB_CONQUERORS_VIDEO_URL ?? "/conquerors-video.mp4",
      themeLabel: "Courage under God",
      themeCopy:
        "Inspired by David's rise, repentance, and reliance on God through the highs and lows of leadership.",
      poster: "/logo.jpg",
    },
    {
      year: "2024",
      name: "Batch Exodus",
      role: "Rooted in Exodus",
      motto:
        "A chapter defined by deliverance, trust, and the journey from bondage into promise.",
      video: process.env.NEXT_PUBLIC_BLOB_EXODUS_VIDEO_URL ?? "/exodus-video.mp4",
      themeLabel: "Freedom and direction",
      themeCopy:
        "Inspired by Moses, the sea crossing, and the God who leads His people step by step.",
      poster: "/logo.jpg",
    },
    {
      year: "2025",
      name: "Batch Nevuah",
      role: "Rooted in Jonah",
      motto:
        "A chapter shaped by calling, repentance, and renewed direction after the deep place.",
      video: process.env.NEXT_PUBLIC_BLOB_NEVUAH_VIDEO_URL ?? "/nevuah-video.mp4",
      themeLabel: "Called again",
      themeCopy:
        "Inspired by Jonah's journey from resistance to obedience and a second chance to serve.",
      poster: "/logo.jpg",
    },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const playVideo = (index: number) => {
    const nextVideo = videoRefs.current[index];

    videoRefs.current.forEach((video, videoIndex) => {
      if (video && videoIndex !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    if (!nextVideo) {
      setPlayingIndex(index);
      return;
    }

    setPlayingIndex(index);
    void nextVideo.play();
  };

  const pauseVideo = (index: number) => {
    const nextVideo = videoRefs.current[index];

    if (nextVideo) {
      nextVideo.pause();
    }

    setPlayingIndex((current) => (current === index ? null : current));
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video || index === selectedIndex) {
        return;
      }

      video.pause();
      video.currentTime = 0;
    });
  }, [selectedIndex]);

  useEffect(() => {
    const cards = cardRefs.current.filter(
      (card): card is HTMLElement => card !== null,
    );

    if (cards.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            return;
          }

          const index = Number(entry.target.getAttribute("data-batch-index"));

          if (!Number.isNaN(index)) {
            pauseVideo(index);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [selectedIndex]);

  const syncSelectedIndex = () => {
    const container = carouselRef.current;

    if (!container) {
      return;
    }

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setSelectedIndex(closestIndex);
  };

  const goToBatch = (index: number) => {
    const targetCard = cardRefs.current[index];

    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }

    setSelectedIndex(index);
  };

  return (
    <main className="min-h-screen overflow-hidden text-[#12468f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,110,184,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(120,213,240,0.34),transparent_26%),linear-gradient(180deg,#f8fcff_0%,#edf8ff_48%,#e5f3ff_100%)]" />

      <header className="sticky top-0 z-40 border-b border-[#8fbde2]/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-12 w-12 overflow-hidden rounded-full border border-[#8dbce4]/50 bg-white shadow-[0_10px_30px_rgba(31,110,184,0.12)]">
              <Image
                src="/logo.jpg"
                alt="Mas Amicus logo"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[#5b8fc4]">
                MAS - AMiCUS
              </p>
              <p className="font-semibold text-[#12468f]">UM Main Chapter</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#2d6fab] md:flex">
            <a className="transition hover:text-[#12468f]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#12468f]" href="#batches">
              Batches
            </a>
          </nav>

        </div>
      </header>

      <section
        id="home"
        className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#9fc7e8]/50 bg-white/80 px-4 py-2 text-sm text-[#2f6fae] shadow-[0_16px_40px_rgba(31,110,184,0.08)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#1f6eb8]" />A home for
              Adventist student fellowship and service
            </div>

            <h1 className="mt-8 max-w-4xl font-[family-name:var(--font-fraunces)] text-5xl leading-[0.92] tracking-tight text-[#12468f] sm:text-6xl md:text-7xl lg:text-8xl">
              Mas Amicus is a campus ministry built for belonging, growth, and
              purpose.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#356fa8] md:text-xl">
              Empowering Seventh-day Adventist students at the University of
              Mindanao, we nurture spiritual, intellectual, and social growth.
              We provide a supportive sanctuary of faith and community,
              equipping young adults to excel academically while standing firm
              in their devotion to Christ.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="rounded-full border border-[#8dbce4]/70 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#12468f] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Learn more
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              <div className="rounded-3xl border border-[#9fc7e8]/45 bg-white/80 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-[#12468f]">1975</p>
                <p className="mt-2 text-sm text-[#4c7bab]">
                  Year Founded to unite and strengthen Adventist students
                </p>
              </div>
              <div className="rounded-3xl border border-[#9fc7e8]/45 bg-white/80 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-[#12468f]">4</p>
                <p className="mt-2 text-sm text-[#4c7bab]">
                  Holistic Faculties developed: Spiritual, Mental, Physical, and
                  Social
                </p>
              </div>
              <div className="rounded-3xl border border-[#9fc7e8]/45 bg-white/80 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-[#12468f]">3</p>
                <p className="mt-2 text-sm text-[#4c7bab]">
                  Angels&apos; Messages driving our campus evangelism and mission
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-[#8fd4f5]/35 blur-3xl" />
            <div className="absolute bottom-0 right-2 h-36 w-36 rounded-full bg-[#1f6eb8]/18 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#9fc7e8]/45 bg-white/88 p-6 shadow-[0_25px_70px_rgba(31,110,184,0.12)] backdrop-blur-xl md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,213,240,0.18),transparent_34%)]" />

              <div className="relative z-10 mb-6 flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="Mas Amicus logo"
                  width={720}
                  height={720}
                  className="w-full max-w-md drop-shadow-[0_20px_40px_rgba(31,110,184,0.12)]"
                />
              </div>

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[#5b8fc4]">
                    OUR FELLOWSHIP
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl text-[#12468f] md:text-4xl">
                    Uniting Adventist students in faith, service, and purpose.
                  </h2>
                </div>
                <div className="rounded-2xl border border-[#9fc7e8]/50 bg-white px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#5b8fc4]">
                    CHAPTER STATUS
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#12468f]">
                    Active & Growing
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[#9fc7e8]/45 bg-[#f6fbff] p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#5b8fc4]">
                    OUR MISSION
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#12468f]">
                    Preserving faith in higher education.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#4c7bab]">
                    Providing UM students with a spiritual sanctuary,
                    intentional mentorship, and true Christian fellowship on a
                    secular campus.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#9fc7e8]/45 bg-[#f6fbff] p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#5b8fc4]">
                    THE MOTTO
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#12468f]">
                    Excelsior Forevermore.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#4c7bab]">
                    Striving for higher spiritual and academic excellence while
                    serving as a beacon of light across our campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-12"
      >
        <div className="grid gap-6 rounded-[2rem] border border-[#9fc7e8]/45 bg-white/80 p-7 shadow-[0_20px_50px_rgba(31,110,184,0.08)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#5b8fc4]">
              Why it matters
            </p>
            <h2 className="mt-4 max-w-md font-[family-name:var(--font-fraunces)] text-3xl text-[#12468f] md:text-4xl">
              AMiCUS exists to support students where they study and live.
            </h2>
          </div>
          <p className="self-end text-base leading-8 text-[#4c7bab] md:text-lg">
            For an Adventist student, entering a public or non-Adventist
            university can mean facing immense academic, social, and secular
            pressures alone. MAS-AMiCUS matters because it transforms isolation
            into community. By functioning as an extended spiritual family, it
            ensures that students do not have to compromise their values or the
            Sabbath. Instead of losing their faith, students are trained to see
            their campus as their primary mission field—proving that you can
            excel academically while staying wholly committed to Christ.
          </p>
        </div>
      </section>

      <section
        id="batches"
        className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#5b8fc4]">
              Batches
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl text-[#12468f] md:text-5xl">
              Batch stories that feel distinct.
            </h2>
          </div>
          <p className="hidden max-w-md text-sm leading-7 text-[#4c7bab] md:block">
            Three chapters, three videos, and three biblical themes that trace
            a path from courage to freedom to renewed calling.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[14rem_1fr] lg:items-start">
          <aside className="flex flex-row gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:overflow-visible lg:pb-0">
            {batches.map((batch, index) => {
              const isActive = selectedIndex === index;

              return (
                <button
                  key={batch.year}
                  type="button"
                  onClick={() => goToBatch(index)}
                  className={`group relative flex min-w-[10rem] items-center justify-between gap-3 rounded-r-[1.25rem] rounded-l-full border px-4 py-3 text-left transition duration-300 lg:min-w-0 ${
                    isActive
                      ? "border-[#1f6eb8] bg-[#1f6eb8] text-white shadow-[0_14px_30px_rgba(31,110,184,0.22)]"
                      : "border-[#9fc7e8]/60 bg-white/80 text-[#12468f] hover:bg-[#f2faff]"
                  }`}
                  aria-label={`Select ${batch.year} ${batch.name}`}
                >
                  <span className="flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] opacity-75">
                      {batch.year}
                    </span>
                    <span className="mt-1 text-sm font-semibold leading-5">
                      {batch.name}
                    </span>
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition ${
                      isActive
                        ? "border-white/30 bg-white/15 text-white"
                        : "border-[#9fc7e8]/60 bg-[#f6fbff] text-[#1f6eb8]"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </aside>

          <div
            ref={carouselRef}
            onScroll={syncSelectedIndex}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth rounded-[2.5rem] border border-[#9fc7e8]/45 bg-white/65 p-4 shadow-[0_20px_50px_rgba(31,110,184,0.08)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:p-6"
          >
            {batches.map((batch, index) => {
              const isActive = selectedIndex === index;
              const isNext = index > selectedIndex;

              return (
                <article
                  key={batch.year}
                  data-batch-index={index}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className={`relative min-w-[88%] snap-center overflow-hidden rounded-[2rem] border border-[#9fc7e8]/45 bg-white/92 shadow-[0_20px_50px_rgba(31,110,184,0.12)] transition-all duration-300 sm:min-w-[74%] lg:min-w-[60%] ${
                    index === 0 ? "lg:ml-0" : "lg:-ml-16 xl:-ml-20"
                  } ${
                    isActive
                      ? "z-30 scale-100 rotate-0 opacity-100"
                      : isNext
                        ? "z-20 scale-[0.94] rotate-[2deg] opacity-70"
                        : "z-10 scale-[0.94] -rotate-[2deg] opacity-70"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#dff3fb] sm:aspect-[16/9]">
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      className="relative z-20 h-full w-full object-cover"
                      controls={playingIndex === index}
                      playsInline
                      preload="metadata"
                      poster={batch.poster}
                      onEnded={() => setPlayingIndex(null)}
                      onPause={() => {
                        if (playingIndex === index) {
                          setPlayingIndex(null);
                        }
                      }}
                    >
                      <source src={batch.video} type="video/mp4" />
                    </video>
                    {playingIndex !== index ? (
                      <button
                        type="button"
                        onClick={() => playVideo(index)}
                        className="absolute inset-0 z-10 flex items-center justify-center bg-[linear-gradient(180deg,rgba(6,24,47,0.16),rgba(6,24,47,0.42))] text-white transition hover:bg-[linear-gradient(180deg,rgba(6,24,47,0.22),rgba(6,24,47,0.55))]"
                        aria-label={`Play ${batch.name} video`}
                      >
                        <span className="grid h-20 w-20 place-items-center rounded-full border border-white/30 bg-white/15 text-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur">
                          ▶
                        </span>
                      </button>
                    ) : null}

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#06182f]/80 to-transparent p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/75">
                        {batch.year}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl text-white">
                        {batch.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#5b8fc4]">
                      {batch.role}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#4c7bab]">
                      {batch.motto}
                    </p>

                    <div className="mt-5 rounded-[1.3rem] border border-[#9fc7e8]/45 bg-[#f6fbff] p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#5b8fc4]">
                        Theme
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#12468f]">
                        {batch.themeLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#4c7bab]">
                        {batch.themeCopy}
                      </p>
                    </div>

                    <p className="mt-4 text-xs uppercase tracking-[0.28em] text-[#5b8fc4]">
                      Swipe the deck or tap a year bookmark to move between batches.
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-12 pt-8 lg:px-8 lg:pb-16">
        <div className="rounded-[2rem] border border-[#9fc7e8]/45 bg-white/80 px-6 py-8 text-center shadow-[0_20px_50px_rgba(31,110,184,0.08)] backdrop-blur-xl md:px-10 md:py-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#5b8fc4]">
            MAS - AMiCUS
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl text-[#12468f] md:text-5xl">
            Built for belonging, service, and growth.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4c7bab] md:text-base">
            Connect with a community that grows together in faith, excellence,
            and fellowship. Whether you are looking for a spiritual home on
            campus, mentorship, or meaningful service, there is a place for you
            here at the University of Mindanao Main Chapter.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-[#2f6fae]">
            <a
              href="#home"
              className="rounded-full border border-[#9fc7e8]/45 bg-white px-4 py-2 transition hover:bg-[#f2faff]"
            >
              Back to top
            </a>
            <a
              href="https://www.facebook.com/amicusUM/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#9fc7e8]/45 bg-white px-4 py-2 transition hover:bg-[#f2faff]"
            >
              Facebook UM Chapter
            </a>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#5b8fc4]">
            © 2026 Mas Amicus
          </p>
        </div>
      </footer>
    </main>
  );
}
