import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Zap, Heart, Target } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Fresh Perspective",
    description: "We bring new ideas and innovative approaches to every engineering challenge.",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description: "Cutting-edge tools and software to deliver the most efficient solutions.",
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description: "Our engineers are driven by passion for creating amazing projects.",
  },
  {
    icon: Target,
    title: "Client Focused",
    description: "Every project is tailored to meet your specific needs and goals.",
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
            Why Partner With Us?
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            As a new engineering firm, we're hungry to prove ourselves and deliver 
            exceptional results that exceed your expectations.
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
      </div>
    </section>
  );
}