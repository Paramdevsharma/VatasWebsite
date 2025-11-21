
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Truck, Construction, TrafficCone, ClipboardCheck, LayoutDashboard, Code, Cloud, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Bridge & Culvert Rehabilitation",
    description: "Programmatic structural assessments, staging, and rehabilitation planning for municipal and provincial owners.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tagline: "Minimizing impact, maximizing asset life"
  },
  {
    icon: Construction,
    title: "Roadways & Retaining Walls",
    description: "Design for new corridors, roadway renewal, slope stability, and retaining walls with a focus on whole-life cost.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    tagline: "Safe, resilient, and cost-effective design"
  },
  {
    icon: TrafficCone,
    title: "Traffic Engineering & Studies",
    description: "Impact assessments, signal warrant reviews, corridor capacity studies, and operational safety reviews.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    tagline: "Data-driven mobility solutions"
  },
  {
    icon: ClipboardCheck,
    title: "Construction Administration",
    description: "Disciplined field support to carry design intent through to construction, managing quality, cost, and schedule.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    tagline: "Ensuring quality from design to delivery"
  },
  {
    icon: LayoutDashboard,
    title: "Municipal Digital Systems",
    description: "Custom dashboards, RFP trackers, automation workflows, and digital twins to modernize municipal operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tagline: "Unlocking insights from your data"
  },
  {
    icon: Code,
    title: "Software & Application Development",
    description: "Secure, scalable, and user-friendly web platforms and applications tailored for public sector needs.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    tagline: "Building tools for modern government"
  },
  {
    icon: Cloud,
    title: "Cloud Services & Licensing",
    description: "Cloud migration support, hosting, SaaS/PaaS solutions, and technology licensing to optimize your IT infrastructure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tagline: "Modernizing IT for efficiency & scale"
  },
  {
    icon: Wrench,
    title: "IT Solutions & Tech Support",
    description: "End-to-end systems integration, cybersecurity, and managed technical support for robust and secure operations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    tagline: "Reliable technology, expert support"
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-accent-primary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering solutions that bridge physical infrastructure and digital innovation
          </p>
        </div>
      </section>

      {/* Services Portfolio Grid */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-[var(--color-border)] shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-7 h-7 text-[var(--color-primary-dark)]" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/80 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link to={createPageUrl("Contact")}>
                      <Button variant="outline" className="w-full border-[var(--color-border)] text-[var(--color-primary-dark)] hover:bg-[var(--color-accent-light)]">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] mb-8 max-w-3xl mx-auto">
            Let's discuss how our integrated approach can bring innovative solutions to your infrastructure challenges.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-[var(--color-accent-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
