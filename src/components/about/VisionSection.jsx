import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Scale, Leaf, ChevronsUp, Handshake } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Protecting the public and our teams is our highest and non-negotiable responsibility in every project we undertake.",
    color: "text-red-600"
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication, open processes, and accountability at every stage to build trust with our clients and stakeholders.",
    color: "text-[var(--color-accent-primary)]"
  },
  {
    icon: Scale,
    title: "Technical Excellence",
    description: "Applying deep expertise, disciplined processes, and innovative thinking to every engineering challenge.",
    color: "text-indigo-600"
  },
  {
    icon: Leaf,
    title: "Sustainability by Design",
    description: "Embedding lifecycle thinking and carbon reduction strategies into our core workflows to build a resilient future.",
    color: "text-green-600"
  },
   {
    icon: ChevronsUp,
    title: "Continuous Improvement",
    description: "Proactively learning from each project to refine our processes and consistently deliver better outcomes.",
    color: "text-amber-600"
  },
  {
    icon: Handshake,
    title: "Respect for Public Dollars",
    description: "Treating every investment as a trust placed in us by the community, ensuring maximum value and stewardship.",
    color: "text-[var(--color-primary-dark)]"
  },
];

export default function VisionSection() {
  return (
    <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            These principles define how we operate, the decisions we make, and the legacy we are committed to building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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