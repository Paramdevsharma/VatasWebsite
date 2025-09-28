
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Target, Rocket, Heart, ArrowRight, TrendingUp, DollarSign, Briefcase, Cpu } from "lucide-react";

export default function Vision() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-accent-light)] border-b border-[var(--color-border)] text-[var(--color-text-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission & Vision
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            Our vision is to become Canada’s most trusted leader in infrastructure renewal, recognized nationally for speed, quality, and stewardship.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--color-accent-light)] border border-[var(--color-border)] rounded-full text-[var(--color-secondary-gray)] text-sm font-medium mb-6">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-8">
              To Elevate Canadian Infrastructure Through Principled Engineering and Innovation
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-4xl mx-auto leading-relaxed mb-12">
              We achieve this by integrating digital workflows, applying rigorous QA/QC frameworks, and maintaining transparent performance metrics that public owners can trust. Every project is an opportunity to demonstrate accountability, technical excellence, and a commitment to community wellbeing.
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
              <h3 className="text-2xl font-bold text-[var(--color-text-dark)]">What We Aspire To:</h3>
              <ul className="space-y-4 text-[var(--color-text-muted)]">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full mt-2 flex-shrink-0" />
                  <span>Set a new benchmark in how infrastructure is rehabilitated and modernized for the next generation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full mt-2 flex-shrink-0" />
                  <span>Focus on bridges, culverts, roads, and mobility systems — the backbone of public infrastructure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full mt-2 flex-shrink-0" />
                  <span>Be nationally recognized for our speed, quality, and stewardship of public resources.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full mt-2 flex-shrink-0" />
                  <span>Build long-term trust through reliability, fairness, and shared success with our partners.</span>
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
              Strategy & 5-Year Outlook
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Our initial focus is Ontario, targeting programmatic rehabilitation and digital modernization. We plan to expand nationally in Years 3–5, scaling proven workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">$5.0M+ Revenue</h3>
                <p className="text-[var(--color-text-muted)]">Projected annual revenue under our base case by Year 5.</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary-gray)] to-[var(--color-accent-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">~22% Net Margin</h3>
                <p className="text-[var(--color-text-muted)]">Targeting ≈$1.1M in net profit, ensuring sustainable long-term growth.</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-secondary-gray)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">10-12 Skilled Jobs</h3>
                <p className="text-[var(--color-text-muted)]">Creating high-value jobs for engineers and technology professionals.</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[var(--color-border)] shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">2+ Software Tools</h3>
                <p className="text-[var(--color-text-muted)]">Deploying at least two municipal software tools to modernize operations.</p>
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
