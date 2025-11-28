import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Truck, Construction, TrafficCone, ClipboardCheck, LayoutDashboard, Code, Cloud, Wrench, ArrowRight, X } from "lucide-react";

const civilServices = [
  {
    icon: Truck,
    title: "Bridge & Culvert Rehabilitation",
    description: "Programmatic structural assessments, staging, and rehabilitation planning for municipal and provincial owners.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tagline: "Minimizing impact, maximizing asset life",
    details: "Our bridge and culvert rehabilitation services include comprehensive structural assessments, detailed condition surveys, and strategic rehabilitation planning. We specialize in developing staging plans that minimize traffic disruption while maximizing the service life of critical infrastructure assets."
  },
  {
    icon: Construction,
    title: "Roadways & Retaining Walls",
    description: "Design for new corridors, roadway renewal, slope stability, and retaining walls with a focus on whole-life cost.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    tagline: "Safe, resilient, and cost-effective design",
    details: "From new corridor design to complete roadway renewal, we deliver safe, resilient infrastructure solutions. Our expertise includes pavement design, slope stability analysis, and retaining wall engineering with a focus on whole-life cost optimization and long-term sustainability."
  },
  {
    icon: TrafficCone,
    title: "Traffic Engineering & Studies",
    description: "Impact assessments, signal warrant reviews, corridor capacity studies, and operational safety reviews.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    tagline: "Data-driven mobility solutions",
    details: "Our traffic engineering services provide data-driven solutions to optimize mobility and safety. We conduct comprehensive traffic impact assessments, signal warrant reviews, corridor capacity studies, and operational safety reviews to help municipalities make informed decisions about their transportation networks."
  },
  {
    icon: ClipboardCheck,
    title: "Construction Administration",
    description: "Disciplined field support to carry design intent through to construction, managing quality, cost, and schedule.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    tagline: "Ensuring quality from design to delivery",
    details: "We provide disciplined construction administration services to ensure your design intent is fully realized. Our team offers expert field support, quality management, cost control, and schedule coordination to deliver projects on time and within budget while maintaining the highest standards of quality."
  }
];

const digitalServices = [
  {
    icon: LayoutDashboard,
    title: "Municipal Digital Systems",
    description: "Custom dashboards, RFP trackers, automation workflows, and digital twins to modernize municipal operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tagline: "Unlocking insights from your data",
    details: "Transform your municipal operations with custom digital solutions. We develop intuitive dashboards, automated workflows, RFP tracking systems, and digital twin technologies that unlock insights from your data and streamline operations for better decision-making and service delivery."
  },
  {
    icon: Code,
    title: "Software & Application Development",
    description: "Secure, scalable, and user-friendly web platforms and applications tailored for public sector needs.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    tagline: "Building tools for modern government",
    details: "We create secure, scalable, and user-friendly web platforms and applications specifically designed for public sector needs. Our custom software solutions are built with modern technologies, rigorous security standards, and intuitive interfaces that make complex processes simple for government staff and citizens alike."
  },
  {
    icon: Cloud,
    title: "Cloud Services & Licensing",
    description: "Cloud migration support, hosting, SaaS/PaaS solutions, and technology licensing to optimize your IT infrastructure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tagline: "Modernizing IT for efficiency & scale",
    details: "Modernize your IT infrastructure with our comprehensive cloud services. We provide expert cloud migration support, secure hosting solutions, SaaS/PaaS implementations, and technology licensing that optimize your operations for efficiency, scalability, and cost-effectiveness while maintaining the highest security standards."
  },
  {
    icon: Wrench,
    title: "IT Solutions & Tech Support",
    description: "End-to-end systems integration, cybersecurity, and managed technical support for robust and secure operations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    tagline: "Reliable technology, expert support",
    details: "Ensure robust and secure IT operations with our comprehensive technology support services. We provide end-to-end systems integration, proactive cybersecurity measures, and managed technical support that keeps your technology running smoothly so you can focus on serving your community."
  }
];

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Card className="border border-[var(--color-border)] shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
        <CardContent className="p-0 flex flex-col h-full">
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
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4 flex-grow">
              {service.description}
            </p>
            <Button 
              variant="outline" 
              className="w-full mt-2 border-[var(--color-border)] text-[var(--color-primary-dark)] hover:bg-[var(--color-accent-light)]"
              onClick={() => setIsOpen(true)}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-4 text-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] rounded-xl flex items-center justify-center">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              {service.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div>
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-2">Overview</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="p-6 bg-[var(--color-accent-light)] rounded-lg border border-[var(--color-border)]">
              <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-3">What We Deliver</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {service.details}
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Close
              </Button>
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-[var(--color-accent-primary)] hover:bg-[var(--color-primary-dark)] text-white">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

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

      {/* Services Tabs */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 h-14 mb-12">
              <TabsTrigger value="all" className="text-lg">All Services</TabsTrigger>
              <TabsTrigger value="civil" className="text-lg">Civil Engineering</TabsTrigger>
              <TabsTrigger value="digital" className="text-lg">Digital Solutions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">All Services</h2>
                <p className="text-[var(--color-text-muted)] max-w-3xl mx-auto">
                  Comprehensive engineering solutions that bridge physical infrastructure and digital innovation
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[...civilServices, ...digitalServices].map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="civil">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">Civil Engineering Services</h2>
                <p className="text-[var(--color-text-muted)] max-w-3xl mx-auto">
                  Expert infrastructure design and construction support for municipalities and public agencies
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {civilServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="digital">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">Digital Solutions</h2>
                <p className="text-[var(--color-text-muted)] max-w-3xl mx-auto">
                  Custom software and IT services designed specifically for public sector operations
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {digitalServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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