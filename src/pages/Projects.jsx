import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Calendar, ArrowRight, Building2, FileText } from "lucide-react";

const projects = [
  {
    title: "Highway 401 Bridge Rehabilitation",
    location: "Toronto, ON",
    year: "2024",
    category: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "Complete structural rehabilitation of a major highway overpass including deck replacement, bearing upgrades, and barrier improvements.",
    tags: ["Structural", "Rehabilitation", "Traffic Management"],
    details: "This comprehensive bridge rehabilitation project involved detailed structural assessments, design of bearing replacements, full deck reconstruction, and barrier upgrades to current standards. Our team developed innovative staging plans that minimized traffic disruption while maintaining safety throughout the construction period. The project was delivered on time and 8% under budget.",
    scope: "Structural assessment, design, tender documents, construction administration",
    client: "Ministry of Transportation Ontario"
  },
  {
    title: "Municipal Asset Management Dashboard",
    location: "Mississauga, ON",
    year: "2024",
    category: "Digital Solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Custom web-based dashboard for tracking capital projects, budgets, and infrastructure condition assessments across the city.",
    tags: ["Software", "Dashboard", "Asset Management"],
    details: "Developed a comprehensive cloud-based asset management platform that integrates with existing municipal systems. The dashboard provides real-time visibility into infrastructure conditions, capital project status, and budget tracking. Features include automated reporting, predictive maintenance alerts, and mobile-friendly interfaces for field staff. The system has improved decision-making efficiency by 35%.",
    scope: "Requirements analysis, custom development, system integration, training",
    client: "City of Mississauga"
  },
  {
    title: "Regional Road Resurfacing Program",
    location: "York Region, ON",
    year: "2024",
    category: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    description: "Multi-year pavement rehabilitation program covering 45km of regional arterials with full lifecycle cost analysis.",
    tags: ["Pavement", "Design", "Program Management"],
    details: "Led a comprehensive pavement rehabilitation program involving condition assessments, lifecycle cost analysis, and detailed design for 45km of arterial roads. Our team provided full construction administration services and implemented innovative pavement preservation strategies that extended asset life by 15 years. The program included public consultation and coordination with multiple stakeholders.",
    scope: "Condition assessment, pavement design, tender documents, CA/inspection",
    client: "York Region"
  },
  {
    title: "Smart Traffic Signal Optimization",
    location: "Hamilton, ON",
    year: "2023",
    category: "Digital Solutions",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    description: "AI-powered traffic signal optimization system reducing congestion by 23% on key arterial corridors.",
    tags: ["Traffic", "Software", "AI/ML"],
    details: "Designed and implemented an AI-powered traffic signal optimization system that uses real-time data and machine learning algorithms to dynamically adjust signal timing. The system resulted in a 23% reduction in congestion, 15% improvement in average travel speeds, and 18% reduction in emissions on monitored corridors. Includes a user-friendly dashboard for traffic operations staff.",
    scope: "System design, ML algorithm development, integration, monitoring dashboard",
    client: "City of Hamilton"
  },
  {
    title: "Culvert Replacement & Stream Restoration",
    location: "Burlington, ON",
    year: "2023",
    category: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
    description: "Environmentally sensitive culvert replacement with natural channel design and fish passage considerations.",
    tags: ["Hydraulic", "Environmental", "Construction"],
    details: "Delivered an environmentally sensitive culvert replacement project incorporating natural channel design principles and fish passage requirements. Our hydraulic modeling ensured flood protection while restoring aquatic habitat connectivity. The project included extensive stakeholder consultation with conservation authorities and environmental agencies, and was recognized for its innovative approach to infrastructure renewal.",
    scope: "Hydraulic design, environmental assessment, permitting, CA/inspection",
    client: "City of Burlington"
  },
  {
    title: "Cloud Migration for Municipal IT",
    location: "Oakville, ON",
    year: "2023",
    category: "Digital Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    description: "Complete migration of legacy municipal systems to secure cloud infrastructure with enhanced disaster recovery.",
    tags: ["Cloud", "IT Infrastructure", "Security"],
    details: "Led a comprehensive cloud migration initiative for municipal IT systems, transitioning legacy on-premises infrastructure to a secure, scalable cloud environment. The project included application modernization, data migration, security hardening, and implementation of robust disaster recovery capabilities. Training programs ensured smooth adoption by municipal staff. The new infrastructure reduced IT costs by 30% while improving system reliability and security.",
    scope: "Cloud architecture, migration planning, security implementation, training",
    client: "Town of Oakville"
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState(null);

  const categories = ["All", "Civil Engineering", "Digital Solutions"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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

      {/* Filter Section */}
      <section className="py-8 bg-[var(--color-accent-light)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-[var(--color-accent-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                  : "border-[var(--color-border)] text-[var(--color-text-dark)] hover:bg-white"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="border border-[var(--color-border)] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="relative h-64 md:h-auto md:col-span-2 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[var(--color-primary-dark)] text-white shadow-lg">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-[var(--color-text-dark)] pr-2">{project.title}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-[var(--color-text-muted)] text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <p className="text-[var(--color-text-muted)] leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="border-[var(--color-border)] text-[var(--color-text-muted)] text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="default"
                        className="w-full bg-[var(--color-accent-primary)] hover:bg-[var(--color-primary-dark)] text-white"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Full Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            {selectedProject && (
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <div>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-[var(--color-primary-dark)] text-white">
                      {selectedProject.category}
                    </Badge>
                    <Badge variant="outline" className="border-[var(--color-border)]">
                      <MapPin className="w-3 h-3 mr-1" />
                      {selectedProject.location}
                    </Badge>
                    <Badge variant="outline" className="border-[var(--color-border)]">
                      <Calendar className="w-3 h-3 mr-1" />
                      {selectedProject.year}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-2">Project Overview</h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="p-6 bg-[var(--color-accent-light)] rounded-lg border border-[var(--color-border)]">
                    <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-3">Detailed Description</h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                      {selectedProject.details}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[var(--color-primary-dark)] mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-[var(--color-text-dark)]">Scope of Work: </span>
                          <span className="text-[var(--color-text-muted)]">{selectedProject.scope}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-[var(--color-primary-dark)] mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-[var(--color-text-dark)]">Client: </span>
                          <span className="text-[var(--color-text-muted)]">{selectedProject.client}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-3">Project Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-[var(--color-border)] text-[var(--color-text-muted)]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" onClick={() => setSelectedProject(null)}>
                      Close
                    </Button>
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
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