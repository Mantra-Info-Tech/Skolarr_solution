import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f5ef] px-6 py-16">
      <div className="pointer-events-none absolute -left-28 -top-24 h-72 w-72 rounded-full bg-[#c9e0ff] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[#f8dcb4] blur-3xl" />

      <section className="relative mx-auto flex min-h-[72vh] w-full max-w-5xl items-center justify-center">
        <div className="w-full rounded-3xl border border-black/10 bg-white/70 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7f6e55]">
            Page Not Found
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight text-[#1f1f1f] md:text-7xl">
            404
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4b4b4b] md:text-lg">
            The page you are trying to open is not available or the link may be outdated.
            You can continue from one of the verified pages below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full bg-[#1f1f1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Go To Home
            </Link>
            <Link
              href="/domestic"
              className="rounded-full border border-[#1f1f1f]/20 bg-white px-6 py-3 text-sm font-semibold text-[#1f1f1f] transition hover:border-[#1f1f1f] hover:bg-[#f4f1e8]"
            >
              Domestic Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
