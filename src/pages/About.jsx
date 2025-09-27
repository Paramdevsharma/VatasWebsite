
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Target, Zap } from "lucide-react";

import TeamSection from "../components/about/TeamSection";
import VisionSection from "../components/about/VisionSection";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-accent-light)] border-b border-[var(--color-border)] text-[var(--color-text-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Vatas Engineering
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed mb-8">
              We're a fresh engineering firm founded by industry veterans who believe 
              that great engineering should be innovative, sustainable, and inspiring. 
              Ready to illuminate your next project with brilliant solutions.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="border-[var(--color-border)] bg-white px-4 py-2 text-sm">
                Founded 2024
              </Badge>
              <Badge variant="outline" className="border-[var(--color-border)] bg-white px-4 py-2 text-sm">
                Fresh Perspective
              </Badge>
              <Badge variant="outline" className="border-[var(--color-border)] bg-white px-4 py-2 text-sm">
                Expert Team
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                Our Beginning
              </h2>
              <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  Vatas Engineering was born from a simple belief: the engineering world 
                  needs fresh energy, innovative thinking, and a commitment to sustainable 
                  solutions that benefit both clients and communities.
                </p>
                <p>
                  Founded in 2024 by a team of experienced engineers who previously worked 
                  at leading firms, we decided to create something new - a company that 
                  combines deep technical expertise with modern approaches to problem-solving.
                </p>
                <p>
                  While we're new as a company, our team brings decades of combined experience. 
                  We're excited to channel that expertise into creating exceptional engineering 
                  solutions that make a real difference.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center" 
                alt="Engineering team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-accent-primary)] text-white p-6 rounded-2xl">
                <div className="text-2xl font-bold">2024</div>
                <div className="text-sm opacity-90">Year Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisionSection />
      <TeamSection />

      {/* What Sets Us Apart */}
      <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
              As a new firm, we're not bound by "how things have always been done." 
              We're free to innovate and bring fresh solutions to engineering challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <Lightbulb className="w-12 h-12 text-[var(--color-accent-primary)] mx-auto mb-4" />
                <h3 className="font-bold text-[var(--color-text-dark)] mb-2">Innovation First</h3>
                <p className="text-sm text-[var(--color-text-muted)]">Always seeking better ways to solve engineering challenges</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-[var(--color-secondary-gray)] mx-auto mb-4" />
                <h3 className="font-bold text-[var(--color-text-dark)] mb-2">Client Success</h3>
                <p className="text-sm text-[var(--color-text-muted)]">Your success is our success - we're invested in your outcomes</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-[var(--color-primary-dark)] mx-auto mb-4" />
                <h3 className="font-bold text-[var(--color-text-dark)] mb-2">Collaborative Spirit</h3>
                <p className="text-sm text-[var(--color-text-muted)]">We work as partners, not just service providers</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-[var(--color-accent-primary)] mx-auto mb-4" />
                <h3 className="font-bold text-[var(--color-text-dark)] mb-2">Agile & Fast</h3>
                <p className="text-sm text-[var(--color-text-muted)]">Quick decisions, rapid prototyping, efficient delivery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
