
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Lightbulb, Target, Rocket, Heart, ArrowRight } from "lucide-react";

export default function Vision() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-accent-light)] border-b border-[var(--color-border)] text-[var(--color-text-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Vision for Engineering
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            We envision a future where engineering solutions are not just functional, 
            but inspiring, sustainable, and transformative for the communities they serve.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--color-accent-light)] border border-[var(--color-border)] rounded-full text-[var(--color-secondary-gray)] text-sm font-medium mb-6">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-8">
              Illuminating Tomorrow Through Engineering Excellence
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-4xl mx-auto leading-relaxed mb-12">
              At Vatas Engineering, we believe that great engineering should light the way forward. 
              Our mission is to deliver innovative solutions that not only solve today's challenges 
              but also pave the path for a brighter, more sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop&crop=center" 
                alt="Future engineering vision"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--color-text-dark)]">What Drives Us</h3>
              <ul className="space-y-4 text-[var(--color-text-muted)]">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full mt-2 flex-shrink-0" />
                  <span>Creating solutions that positively impact communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full mt-2 flex-shrink-0" />
                  <span>Pushing the boundaries of what's possible in engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full mt-2 flex-shrink-0" />
                  <span>Building sustainable infrastructure for future generations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full mt-2 flex-shrink-0" />
                  <span>Fostering innovation through collaborative partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
              Our Ambitious Goals
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
              As a new firm, we're setting bold goals for the impact we want to make 
              in the engineering world and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">5-Year Vision</h3>
                <p className="text-[var(--color-text-muted)]">Become a recognized leader in sustainable engineering solutions in California</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary-gray)] to-[var(--color-accent-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">Innovation Goal</h3>
                <p className="text-[var(--color-text-muted)]">Pioneer new methods that reduce environmental impact by 50% across all projects</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-secondary-gray)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">Community Impact</h3>
                <p className="text-[var(--color-text-muted)]">Complete 100 projects that directly improve community infrastructure and quality of life</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">Growth Target</h3>
                <p className="text-[var(--color-text-muted)]">Build a diverse team of 25+ engineers and expand to serve the entire West Coast</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Focus */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                Innovation at Our Core
              </h2>
              <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  We're committed to staying at the forefront of engineering innovation. 
                  From AI-assisted design tools to sustainable material research, we 
                  continuously explore new technologies that can benefit our clients.
                </p>
                <p>
                  Our approach combines time-tested engineering principles with 
                  cutting-edge solutions, ensuring that every project benefits from 
                  both reliability and innovation.
                </p>
                <p>
                  We believe that the future of engineering lies in collaborative, 
                  technology-enhanced solutions that prioritize both human needs 
                  and environmental stewardship.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center" 
                alt="Innovation in engineering"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] text-white p-6 rounded-2xl">
                <div className="text-2xl font-bold">Future</div>
                <div className="text-sm opacity-90">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-accent-primary)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Whether you're planning your next project or looking to partner with an 
            innovative engineering firm, we'd love to explore how we can work together.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-8">
              Let's Create Something Amazing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
