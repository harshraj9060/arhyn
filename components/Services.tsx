import Reveal from "./Reveal";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">{"// what we build"}</p>

          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            Fifteen ways to close the gap between an offline business and a
            digital one.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 0.06}
              className="h-full"
            >
              <article className="group relative overflow-hidden rounded-3xl border border-line bg-ink-soft/40 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-amber/40 hover:shadow-[0_25px_80px_rgba(232,163,61,0.12)]">

                {/* Background Number */}
                <span className="absolute right-5 top-3 text-7xl font-display font-bold text-paper/[0.04] transition-all duration-500 group-hover:text-paper/[0.08]">
                  {(i + 1).toString().padStart(2, "0")}
                </span>

                {/* Animated Gradient */}
                <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-amber/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100" />

                {/* Animated Top Border */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-amber transition-all duration-700 group-hover:w-full" />

                {/* Accent Dot */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-amber shadow-[0_0_12px_rgba(232,163,61,0.8)] transition-all duration-500 group-hover:scale-150" />

                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-wire">
                    Service
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-paper mb-5">
                  {s.title}
                </h3>

                {/* Timeline */}
                <div className="relative flex-1 pl-5">

                  <div className="absolute left-1.5 top-2 bottom-2 w-px bg-line" />

                  <div className="relative mb-5">
                    <div className="absolute -left-[18px] top-[7px] h-2 w-2 rounded-full bg-wire" />

                    <p className="text-[11px] uppercase tracking-widest font-mono text-wire mb-1">
                      Problem
                    </p>

                    <p className="text-sm text-dim leading-6">
                      {s.problem}
                    </p>
                  </div>

                  <div className="relative mb-5">
                    <div className="absolute -left-[18px] top-[7px] h-2 w-2 rounded-full bg-amber" />

                    <p className="text-[11px] uppercase tracking-widest font-mono text-amber mb-1">
                      Solution
                    </p>

                    <p className="text-sm text-dim leading-6">
                      {s.solution}
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[18px] top-[7px] h-2 w-2 rounded-full bg-paper/70" />

                    <p className="text-[11px] uppercase tracking-widest font-mono text-paper/60 mb-1">
                      Result
                    </p>

                    <p className="text-sm text-dim leading-6">
                      {s.benefit}
                    </p>
                  </div>

                </div>

                {/* Tech Stack */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {s.stack.map((t, index) => (
                    <span
                      key={t}
                      className="translate-y-2 rounded-full border border-line bg-ink px-3 py-1 text-[11px] font-mono text-dim opacity-80 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-amber opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                  Explore
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}