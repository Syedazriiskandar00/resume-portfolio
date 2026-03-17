"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const TYPING_TEXT = "npm run build-the-future";

function TerminalVisual() {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < TYPING_TEXT.length) {
        setDisplayed(TYPING_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="bg-surface-950 rounded-xl p-6 shadow-2xl border border-surface-800/50">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-surface-200/50 font-mono">
          terminal
        </span>
      </div>
      {/* Terminal lines */}
      <div className="font-mono text-sm space-y-2">
        <p className="text-surface-200/60">
          <span className="text-green-400">azri</span>
          <span className="text-surface-200/40">@</span>
          <span className="text-primary-400">dev</span>
          <span className="text-surface-200/40"> ~ $ </span>
          <span className="text-white">
            {displayed}
            <span
              className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
            >
              |
            </span>
          </span>
        </p>
        <p className="text-surface-200/40 text-xs mt-3">
          &gt; 3 SaaS products shipped
        </p>
        <p className="text-surface-200/40 text-xs">
          &gt; 107,000+ contacts compiled
        </p>
        <p className="text-surface-200/40 text-xs">
          &gt; AI voice agents deployed
        </p>
        <p className="text-green-400/70 text-xs mt-2">
          ✓ Build successful
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="lg:grid lg:grid-cols-5 lg:gap-12 items-center">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <p className="font-mono text-sm text-primary-500 tracking-wide uppercase">
              {SITE.title}
            </p>
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Profile photo */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/profile.png"
                  alt="Syed Azri"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-surface-200"
                  priority
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-950 leading-tight flex items-center gap-2 sm:gap-3">
                {SITE.name}
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary-500 rounded-full flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-surface-800 max-w-xl leading-relaxed">
              {SITE.tagline}
            </p>
            <p className="text-base text-surface-500 max-w-lg">
              {SITE.origin}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button href="#projects" size="lg">
                See what I&apos;ve built
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </div>
          </div>

          {/* Terminal visual — 2 cols */}
          <div className="lg:col-span-2 mt-12 lg:mt-0">
            <TerminalVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
