import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Leaf, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to solve complex engineering challenges with fresh thinking.",
    color: "text-[var(--color-secondary-gray)]"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best results come from working closely with our clients as true partners throughout every project.",
    color: "text-[var(--color-accent-primary)]"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Every solution we design considers environmental impact and long-term sustainability for future generations.",
    color: "text-green-600"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in every project, no matter the size or complexity.",
    color: "text-[var(--color-primary-dark)]"
  }
];

export default function VisionSection() {
  return (
    <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
            Our Vision & Values
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            These core principles guide everything we do as we work to build 
            a bright future through innovative engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">{value.title}</h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}