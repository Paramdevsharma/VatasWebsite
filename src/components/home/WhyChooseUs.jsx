
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Zap, Heart, Target, Code, Construction, Layers, Users } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Dual Expertise",
    description: "The only firm combining civil engineering AND software development under one roof.",
  },
  {
    icon: Zap,
    title: "Complete Solutions",
    description: "From bridge design to municipal dashboards - we handle your entire infrastructure ecosystem.",
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description: "Engineers and developers working together to create integrated, modern solutions.",
  },
  {
    icon: Target,
    title: "Municipal Focus",
    description: "Deep understanding of both physical infrastructure and digital systems needs.",
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-[var(--color-border)] rounded-full text-[var(--color-secondary-gray)] text-sm font-medium mb-6">
            Why Choose Vatas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
            A New Model for Engineering
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Unlike traditional firms that specialize in just one area, we deliver both 
            physical infrastructure engineering AND the digital systems that support it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] shadow-md bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">{reason.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dual Capability Showcase */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-[var(--color-border)] shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--color-primary-dark)] rounded-xl flex items-center justify-center">
                  <Construction className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-dark)]">Civil Engineering</h3>
              </div>
              <ul className="space-y-3 text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-primary-dark)] rounded-full" />
                  Bridge & culvert rehabilitation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-primary-dark)] rounded-full" />
                  Traffic engineering & studies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-primary-dark)] rounded-full" />
                  Roadway design & retaining walls
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-primary-dark)] rounded-full" />
                  Construction administration
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-[var(--color-border)] shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--color-accent-primary)] rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-dark)]">Software Development</h3>
              </div>
              <ul className="space-y-3 text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full" />
                  Municipal digital systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full" />
                  Custom web applications
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full" />
                  Cloud services & hosting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full" />
                  Digital twins & BIM integration
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
