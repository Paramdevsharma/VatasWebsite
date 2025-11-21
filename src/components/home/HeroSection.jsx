import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Code, Construction } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--color-background)] text-[var(--color-text-dark)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Vatas Engineering
              <span className="block text-[var(--color-accent-primary)] mt-2">
                Integrated Solutions.
              </span>
            </h1>
            
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-lg">
              The only firm that delivers both civil engineering expertise AND custom software solutions. 
              From bridge rehabilitation to municipal dashboards - we handle the full spectrum of modern infrastructure needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-[var(--color-primary-dark)] hover:bg-[var(--color-accent-primary)] px-8 text-white">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Services")}>
                <Button size="lg" variant="outline" className="border-[var(--color-border)] text-[var(--color-text-dark)] hover:bg-[var(--color-accent-light)]">
                  <Construction className="w-5 h-5 mr-2" />
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Dual Expertise Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--color-primary-dark)] rounded-xl flex items-center justify-center">
                  <Construction className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[var(--color-primary-dark)]">Civil</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Engineering</div>
                </div>
              </div>
              <div className="text-2xl text-[var(--color-secondary-gray)]">+</div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--color-accent-primary)] rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[var(--color-accent-primary)]">Software</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Development</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-[var(--color-accent-light)] rounded-3xl border border-[var(--color-border)] p-8">
              <div className="h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=faces"
                  alt="Engineering and technology team"
                  className="rounded-2xl object-cover w-full h-full shadow-xl"
                />
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[var(--color-border)] shadow-lg">
              <div className="text-2xl font-bold text-[var(--color-primary-dark)]">Dual</div>
              <div className="text-xs text-[var(--color-text-muted)]">Expertise</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[var(--color-border)] shadow-lg">
              <div className="text-2xl font-bold text-[var(--color-primary-dark)]">2025</div>
              <div className="text-xs text-[var(--color-text-muted)]">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}