import Image from "next/image";

export default function MasAmicusWebsite() {
  const batch = {
    year: "2025",
    name: "Batch Nevuah",
    role: "Jonah-inspired chapter",
    motto:
      "From the depths to the mission field, a chapter shaped by calling, repentance, and renewed direction.",
    song: "/called-to-go.mp3",
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
                Mas Amicus
              </p>
              <p className="font-semibold text-[#12468f]">
                Brotherhood in motion
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#2d6fab] md:flex">
            <a className="transition hover:text-[#12468f]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#12468f]" href="#pillars">
              Focus
            </a>
            <a className="transition hover:text-[#12468f]" href="#batches">
              Batches
            </a>
          </nav>

          <a
            href="#batches"
            className="rounded-full border border-[#8dbce4]/60 bg-white px-4 py-2 text-sm font-semibold text-[#12468f] transition hover:bg-[#f3faff]"
          >
            View batches
          </a>
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
              Based on the official AMiCUS description, the movement supports
              the spiritual, intellectual, and social needs of Seventh-day
              Adventist students, especially on secular campuses.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#batches"
                className="rounded-full bg-[#1f6eb8] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#155b98]"
              >
                View batches
              </a>
              <a
                href="#about"
                className="rounded-full border border-[#8dbce4]/70 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#12468f] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Learn more
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              <div className="rounded-3xl border border-[#9fc7e8]/45 bg-white/80 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-[#12468f]">3</p>
                <p className="mt-2 text-sm text-[#4c7bab]">
                  Spiritual, intellectual, and social growth
                </p>
              </div>
              <div className="rounded-3xl border border-[#9fc7e8]/45 bg-white/80 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-[#12468f]">1</p>
                <p className="mt-2 text-sm text-[#4c7bab]">
                  Shared ministry community
                </p>
              </div>
              <div className="rounded-3xl border border-[#9fc7e8]/45 bg-white/80 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-[#12468f]">∞</p>
                <p className="mt-2 text-sm text-[#4c7bab]">
                  A lasting student network
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
                    Official identity
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl text-[#12468f] md:text-4xl">
                    A clean, logo-matched visual system.
                  </h2>
                </div>
                <div className="rounded-2xl border border-[#9fc7e8]/50 bg-white px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#5b8fc4]">
                    Current mood
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#12468f]">
                    Bright, calm, blue
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[#9fc7e8]/45 bg-[#f6fbff] p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#5b8fc4]">
                    Core promise
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#12468f]">
                    Support for students in college and university.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#4c7bab]">
                    A home for growth that is spiritual, intellectual, and
                    social.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#9fc7e8]/45 bg-[#f6fbff] p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#5b8fc4]">
                    Visual tone
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#12468f]">
                    Simple, airy, and welcoming.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#4c7bab]">
                    The palette follows the blue-and-white language of the logo.
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
            The official description points to a supportive campus ministry
            focused on spiritual growth, intellectual development, and social
            connection. The page now uses that information directly so the
            content feels accurate and less decorative.
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
            Batch Nevuah draws on Jonah&apos;s story of being called, resisting,
            and returning with renewed purpose.
          </p>
        </div>

        <article className="mt-10 overflow-hidden rounded-[2rem] border border-[#9fc7e8]/45 bg-white/82 p-6 shadow-[0_20px_50px_rgba(31,110,184,0.08)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1f6eb8] via-[#78d5f0] to-[#bfeaf8]" />
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="rounded-[1.75rem] border border-[#9fc7e8]/45 bg-[linear-gradient(180deg,rgba(31,110,184,0.95),rgba(120,213,240,0.8))] p-7 text-white shadow-[0_18px_40px_rgba(31,110,184,0.18)]">
              <p className="text-xs uppercase tracking-[0.32em] text-white/80">
                {batch.year}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl leading-tight">
                {batch.name}
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/80">
                {batch.role}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#5b8fc4]">
                Jonah theme
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl text-[#12468f] md:text-4xl">
                Called from the deep, sent with purpose.
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#4c7bab] md:text-lg">
                Batch Nevuah is framed around Jonah&apos;s journey: a reluctant
                calling, a storm, a deep place of reflection, and a renewed
                return to mission. It carries the idea that purpose can be
                rediscovered and answered with courage.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#4c7bab] md:text-lg">
                {batch.motto}
              </p>

              <div className="mt-6 rounded-[1.3rem] border border-[#9fc7e8]/45 bg-[#f6fbff] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[#5b8fc4]">
                  Batch song
                </p>
                <audio controls className="mt-3 w-full">
                  <source src={batch.song} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
        </article>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-12 pt-8 lg:px-8 lg:pb-16">
        <div className="rounded-[2rem] border border-[#9fc7e8]/45 bg-white/80 px-6 py-8 text-center shadow-[0_20px_50px_rgba(31,110,184,0.08)] backdrop-blur-xl md:px-10 md:py-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#5b8fc4]">
            Mas Amicus
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl text-[#12468f] md:text-5xl">
            Built for belonging, service, and growth.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4c7bab] md:text-base">
            A lighter landing page that follows the logo colors, uses the
            official ministry description, and keeps only the essentials.
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
