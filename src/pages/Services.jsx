import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Truck, Construction, TrafficCone, ClipboardCheck, LayoutDashboard, Code, Cloud, Wrench, ArrowRight, X, Toolbox } from "lucide-react";

const civilServices = [
  {
    icon: Truck,
    title: "Structural Engineering – Culverts & Retaining Walls",
    description: "Vatas provides structural services for small to mid-scale culverts and retaining walls associated with municipal roadways and corridors",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tagline: "Minimizing impact, maximizing asset life",
    details: <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1">
            <li>Condition review and planning support for culverts and retaining walls, including input to structural planning / options analysis.</li>
            <li>Rehabilitation and replacement strategies for culverts (lining, partial reconstruction, full replacement) and walls (refacing, localized repairs, full replacements).</li>
            <li>Detailed design and contract documents for culvert barrels, headwalls, wingwalls, retaining walls, and related appurtenances.</li>
            <li>Staged solutions coordinated with roadway and active transportation works to maintain operations where required.</li>
            <li>Quantities and opinion of probable construction cost (OPCC) for stand-alone or bundled programs.</li>
          </ul>
  },
  {
    icon: Construction,
    title: "Municipal Roadway & Highway Design",
    description: "Vatas supports municipal and regional roadway programs with practical, constructable design services",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    tagline: "Safe, resilient, and cost-effective design",
    details: <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1">
              <li>Minor capital and resurfacing projects, such as pavement rehabilitation, localized widening, and safety-related civil works.</li>
              <li>Curb, sidewalk, and boulevard improvements, including spot repairs, realignment, drainage adjustments, and accessibility upgrades.</li>
              <li>Active transportation elements, including on-road cycling facilities, buffered bike lanes, multi-use paths, crossings, and connections to transit.</li>
              <li>Guiderail and roadside safety design, integrating barrier systems with roadway geometry, slopes, culvert ends, and retaining walls.</li>
              <li>Intersection and corridor improvements on arterials and collectors, including turn lanes and localized alignment refinements.</li>
              <li>Design documentation, including plans and profiles, typical sections, grading, drainage, and contract drawings suitable for tender.</li>
            </ul>
  },
  {
    icon: TrafficCone,
    title: "Transit & Corridor Advisory Services",
    description: "For corridors influenced by BRT/LRT, subway or major transit infrastructure, Vatas provides advisory and design support focused on roadway and civil components",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    tagline: "Data-driven mobility solutions",
    details: <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1">
              <li>Road and intersection modifications to accommodate transit corridors, stations, stops, and bus operations.</li>
              <li>Integration of active transportation and complete streets elements with transit corridors and municipal roads.</li>
              <li>Coordination of roadway design with transit infrastructure, utilities, and property adjustments.</li>
              <li>Input to transit corridor staging and detour planning from the municipal road and active transportation perspective.</li>
              <li>Review of third-party designs for impacts on municipal roads, culverts, retaining walls, and roadside safety.</li>
            </ul>
  },
  {
    icon: Toolbox,
    title: "Traffic Management, Staging & Detours",
    description: "Vatas incorporates traffic management and constructability into design so that guiderail, resurfacing, culvert and minor civil works can be delivered efficiently",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    tagline: "Ensuring quality from design to delivery",
    details: <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1">
              <li>High-level staging concepts for inclusion in planning documents and early design phases.</li>
              <li>Traffic management input for lane configurations, temporary alignments, and work-zone layouts reflected in contract documents.</li>
              <li>Detour and staging considerations for active transportation and transit, including temporary cycling and pedestrian routes.</li>
              <li>Integration of staging with culvert and retaining wall works, ensuring feasible construction sequences and access.</li>
              <li>Stakeholder coordination input (internal groups, emergency services, transit, adjacent developments) from a roadway and structures perspective.</li>
            </ul>
  },
    {
    icon: ClipboardCheck,
    title: "Construction Services & Field Inspection",
    description: "Vatas supports municipal contract administration teams with field-focused services on roadway, safety and culvert-related contracts",
    image: "https://www.dev-res.com/assets/blog/images/post/dev-res-3.jpg",
    tagline: "Ensuring quality from design to delivery",
    details: <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1">
              <li>Site inspection for resurfacing, minor capital, culvert, and associated civil works, including guiderail installations and active transportation elements.</li>
              <li>Monitoring of workmanship and testing (e.g., asphalt, concrete, compaction) against contract requirements and standards.</li>
              <li>Field documentation, including daily inspection reports, deficiency tracking, and photo records.</li>
              <li>Technical support to contract administrators, including assistance with RFIs, shop drawing review comments, and change evaluation.</li>
              <li>Quantity verification and input to payment certificates, ensuring alignment with tendered items and completed work.</li>
            </ul>
  }
];

const digitalServices = [
  {
    icon: Code,
    title: "Software Solution Development & Application Engineering",
    description: "Vatas develops practical software tools that support municipal infrastructure delivery and program oversight",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tagline: "Unlocking insights from your data",
    details: <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1">
                <li>Application development, including <strong>web-based platforms</strong>, <strong>internal systems</strong>, and <strong>custom tools</strong> designed for operational and program use.</li>
                <li>Backend engineering, including <strong>business logic</strong>, <strong>data models</strong>, and <strong>service-oriented architectures</strong> to support scalable applications.</li>
                <li>User-focused design considerations, including <strong>clear workflows</strong>, <strong>role-based access</strong>, and <strong>maintainable interfaces</strong>.</li>
              </ul>
  },
  {
    icon: Cloud,
    title: "Cloud, Platform & Systems Engineering",
    description: "Vatas supports secure, maintainable digital platforms suitable for public-sector environments",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tagline: "Modernizing IT for efficiency & scale",
    details: <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1">
                <li>Cloud-enabled systems, including <strong>secure deployment</strong>, <strong>access controls</strong>, and <strong>environment configuration</strong>.</li>
                <li>Platform reliability features, including <strong>monitoring</strong>, <strong>backups</strong>, <strong>logging</strong>, and <strong>release management</strong>.</li>
                <li>Maintainable delivery practices, including <strong>documentation</strong>, <strong>version control</strong>, and <strong>structured testing</strong> to support long-term operation and handover.</li>
              </ul>
  },
  {
    icon: LayoutDashboard,
    title: "Data Integration, APIs & Analytics",
    description: "Vatas integrates engineering and program data sources to enable reliable reporting and performance insights",
    image: "https://www.repsol.com/content/dam/repsol-corporate/es/energia-e-innovacion/data%20science%20qu%C3%A9%20es_.jpg.transform/rp-rendition-md/image.jpg",
    tagline: "Reliable technology, expert support",
    details: <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1" >
                <li>Data integration and APIs, including <strong>system-to-system integrations</strong>, <strong>data pipelines</strong>, and <strong>structured data flows</strong>.</li>
                <li>Data validation and standardization, including <strong>quality checks</strong>, <strong>schema design</strong>, and <strong>traceable data inputs</strong>.</li>
                <li>Analytics and reporting, including <strong>dashboards</strong>, <strong>KPI frameworks</strong>, and <strong>trend analysis</strong> to support operational and management reporting.</li>
              </ul>
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