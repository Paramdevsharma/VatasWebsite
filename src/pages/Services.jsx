
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Building, Layers, Leaf, Users, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Structural Engineering",
    description: "Modern structural engineering solutions using cutting-edge analysis tools and sustainable design principles.",
    features: [
      "Advanced 3D structural modeling",
      "Seismic analysis and design",
      "Sustainable material selection",
      "Building information modeling (BIM)",
      "Code compliance and optimization",
      "Construction support services"
    ],
    approach: "Fresh perspective on design challenges"
  },
  {
    icon: Layers,
    title: "Civil Engineering",
    description: "Comprehensive civil engineering services for infrastructure development, site planning, and smart city solutions.",
    features: [
      "Site development and planning",
      "Transportation infrastructure", 
      "Stormwater management systems",
      "Smart city technology integration",
      "Utility coordination and design",
      "Construction administration"
    ],
    approach: "Innovative infrastructure solutions"
  },
  {
    icon: Leaf,
    title: "Environmental Solutions",
    description: "Sustainable engineering practices that prioritize environmental responsibility and long-term benefits.",
    features: [
      "Green building design and LEED consulting",
      "Environmental impact assessments",
      "Renewable energy system integration",
      "Water conservation strategies",
      "Carbon footprint reduction planning",
      "Sustainability reporting and certification"
    ],
    approach: "Future-focused environmental stewardship"
  },
  {
    icon: Users,
    title: "Engineering Consulting",
    description: "Expert consulting services to optimize your engineering processes, review designs, and provide strategic guidance.",
    features: [
      "Technical design reviews and audits",
      "Engineering process optimization",
      "Technology assessment and selection",
      "Innovation strategy development",
      "Risk assessment and mitigation",
      "Training and knowledge transfer"
    ],
    approach: "Strategic partnership for success"
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-accent-light)] border-b border-[var(--color-border)] text-[var(--color-text-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Engineering Services
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            Fresh engineering solutions designed for today's challenges. We combine proven 
            methodologies with innovative approaches to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card key={index} className="border border-[var(--color-border)] shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    <div className={`p-12 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} bg-[var(--color-accent-light)]`}>
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] rounded-2xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">{service.title}</h2>
                      <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-6">{service.description}</p>
                      <div className="text-sm font-medium text-[var(--color-secondary-gray)] mb-8">{service.approach}</div>
                      <Link to={createPageUrl("Contact")}>
                        <Button className="bg-[var(--color-accent-primary)] hover:bg-[var(--color-primary-dark)] text-white">
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                    <div className={`p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-6">What We Deliver:</h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--color-text-muted)]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
              Our Fresh Approach
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
              We believe great engineering starts with understanding your vision 
              and ends with solutions that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">Listen & Learn</h3>
              <p className="text-[var(--color-text-muted)]">Deep dive into your project goals, constraints, and vision for success.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary-gray)] to-[var(--color-primary-dark)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">Innovate & Design</h3>
              <p className="text-[var(--color-text-muted)]">Creative problem-solving using the latest engineering tools and methods.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-secondary-gray)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">Collaborate & Refine</h3>
              <p className="text-[var(--color-text-muted)]">Work closely with you to perfect the solution and ensure it meets your needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-accent-primary)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">Deliver & Support</h3>
              <p className="text-[var(--color-text-muted)]">Seamless implementation with ongoing support throughout your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-accent-primary)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Brighten Your Next Project?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how our fresh approach to engineering can bring innovative 
            solutions to your challenges. Contact us for a free consultation.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-8">
              Start the Conversation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
