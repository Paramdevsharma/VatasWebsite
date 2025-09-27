import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Layers, Leaf, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Structural Engineering",
    description: "Modern structural analysis and design solutions using the latest engineering software and methodologies.",
    features: ["Advanced 3D Modeling", "Seismic Design", "Sustainable Materials"]
  },
  {
    icon: Layers,
    title: "Civil Engineering", 
    description: "Comprehensive civil engineering services for infrastructure development and site planning.",
    features: ["Site Development", "Infrastructure Planning", "Smart City Solutions"]
  },
  {
    icon: Leaf,
    title: "Environmental Solutions",
    description: "Green engineering practices focused on sustainability and environmental responsibility.",
    features: ["Green Building Design", "Environmental Impact", "Renewable Integration"]
  },
  {
    icon: Users,
    title: "Engineering Consulting",
    description: "Expert consulting services to help optimize your engineering projects and processes.",
    features: ["Technical Reviews", "Process Optimization", "Innovation Strategy"]
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--color-accent-light)] border border-[var(--color-border)] rounded-full text-[var(--color-secondary-gray)] text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
            Fresh Engineering Solutions
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            We bring new energy and innovative thinking to engineering challenges, 
            combining the latest technology with proven engineering principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] shadow-md">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">{service.title}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">{service.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-[var(--color-secondary-gray)] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to={createPageUrl("Services")}>
            <Button size="lg" className="bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-accent-primary)]">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}