import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Highway 401 Bridge Rehabilitation",
    location: "Toronto, ON",
    year: "2024",
    category: "Bridge Engineering",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "Complete structural rehabilitation of a major highway overpass including deck replacement, bearing upgrades, and barrier improvements.",
    tags: ["Structural", "Rehabilitation", "Traffic Management"]
  },
  {
    title: "Municipal Asset Management Dashboard",
    location: "Mississauga, ON",
    year: "2024",
    category: "Digital Solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Custom web-based dashboard for tracking capital projects, budgets, and infrastructure condition assessments across the city.",
    tags: ["Software", "Dashboard", "Asset Management"]
  },
  {
    title: "Regional Road Resurfacing Program",
    location: "York Region, ON",
    year: "2024",
    category: "Roadway Design",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    description: "Multi-year pavement rehabilitation program covering 45km of regional arterials with full lifecycle cost analysis.",
    tags: ["Pavement", "Design", "Program Management"]
  },
  {
    title: "Smart Traffic Signal Optimization",
    location: "Hamilton, ON",
    year: "2023",
    category: "Traffic Engineering",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    description: "AI-powered traffic signal optimization system reducing congestion by 23% on key arterial corridors.",
    tags: ["Traffic", "Software", "AI/ML"]
  },
  {
    title: "Culvert Replacement & Stream Restoration",
    location: "Burlington, ON",
    year: "2023",
    category: "Environmental Engineering",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
    description: "Environmentally sensitive culvert replacement with natural channel design and fish passage considerations.",
    tags: ["Hydraulic", "Environmental", "Construction"]
  },
  {
    title: "Cloud Migration for Municipal IT",
    location: "Oakville, ON",
    year: "2023",
    category: "IT Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    description: "Complete migration of legacy municipal systems to secure cloud infrastructure with enhanced disaster recovery.",
    tags: ["Cloud", "IT Infrastructure", "Security"]
  }
];

export default function Projects() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-accent-primary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Delivering integrated infrastructure solutions across civil engineering and digital innovation
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border border-[var(--color-border)] shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-[var(--color-primary-dark)] hover:bg-white">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-[var(--color-border)] text-[var(--color-text-muted)]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary-dark)] mb-2">50+</div>
              <div className="text-[var(--color-text-muted)]">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary-dark)] mb-2">25+</div>
              <div className="text-[var(--color-text-muted)]">Municipal Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary-dark)] mb-2">$50M+</div>
              <div className="text-[var(--color-text-muted)]">Infrastructure Value</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary-dark)] mb-2">100%</div>
              <div className="text-[var(--color-text-muted)]">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}