import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--color-background)] text-[var(--color-text-dark)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--color-accent-light)] border border-[var(--color-border)] rounded-full text-[var(--color-secondary-gray)] text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Brand new engineering firm - Now accepting projects!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Innovative Ideas,
              <span className="block text-[var(--color-accent-primary)]">
                Expert
              </span>
              Engineering
            </h1>
            
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-lg">
              Welcome to Vatas Engineering - where fresh thinking meets engineering excellence. 
              We're a new firm ready to tackle your projects with innovative solutions 
              and cutting-edge expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-[var(--color-primary-dark)] hover:bg-[var(--color-accent-primary)] px-8 text-white">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Vision")}>
                <Button size="lg" variant="outline" className="border-[var(--color-border)] text-[var(--color-text-dark)] hover:bg-[var(--color-accent-light)]">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Our Vision
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary-dark)]">Fresh</div>
                <div className="text-sm text-[var(--color-text-muted)]">Perspective</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary-dark)]">Expert</div>
                <div className="text-sm text-[var(--color-text-muted)]">Team</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary-dark)]">Ready</div>
                <div className="text-sm text-[var(--color-text-muted)]">To Deliver</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-[var(--color-accent-light)] rounded-3xl border border-[var(--color-border)] p-8">
              <div className="h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=faces"
                  alt="Modern engineering team"
                  className="rounded-2xl object-cover w-full h-full shadow-xl"
                />
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[var(--color-border)] shadow-lg">
              <div className="text-2xl font-bold text-[var(--color-primary-dark)]">New</div>
              <div className="text-xs text-[var(--color-text-muted)]">& Innovative</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[var(--color-border)] shadow-lg">
              <div className="text-2xl font-bold text-[var(--color-primary-dark)]">2024</div>
              <div className="text-xs text-[var(--color-text-muted)]">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}