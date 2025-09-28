
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Truck, Construction, TrafficCone, ClipboardCheck, LayoutDashboard, Code, Cloud, Wrench, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Bridge & Culvert Rehabilitation",
    description: "Programmatic structural assessments, staging, and rehabilitation planning for municipal and provincial owners.",
    features: [
      "Condition assessment & load rating",
      "Service-life extension strategies",
      "Slip-lining & trenchless solutions",
      "Staging for live traffic",
      "Erosion & sediment control",
      "Permitting & tender packages"
    ],
    approach: "Minimizing impact, maximizing asset life"
  },
  {
    icon: Construction,
    title: "Roadways & Retaining Walls",
    description: "Design for new corridors, roadway renewal, slope stability, and retaining walls with a focus on whole-life cost.",
    features: [
      "Pavement condition evaluation",
      "Mill-and-pave to full reconstruction",
      "Slope stability & geotechnical analysis",
      "MSE, CIP, and soil-nail wall design",
      "Roadside safety systems (MASH)",
      "Utility coordination & de-risking"
    ],
    approach: "Safe, resilient, and cost-effective design"
  },
  {
    icon: TrafficCone,
    title: "Traffic Engineering & Studies",
    description: "Impact assessments, signal warrant reviews, corridor capacity studies, and operational safety reviews.",
    features: [
      "Traffic Impact Assessments (TIAs)",
      "Intersection & corridor modeling",
      "Signal warrant & timing optimization",
      "Work-zone traffic management",
      "Road safety audits",
      "Parking studies"
    ],
    approach: "Data-driven mobility solutions"
  },
  {
    icon: ClipboardCheck,
    title: "Construction Administration",
    description: "Disciplined field support to carry design intent through to construction, managing quality, cost, and schedule.",
    features: [
      "Contract administration & site reviews",
      "QA/QC reviews and materials testing",
      "RFI & change control workflows",
      "Progress payment certification",
      "Deficiency tracking & clearance",
      "Project close-out documentation"
    ],
    approach: "Ensuring quality from design to delivery"
  },
  {
    icon: LayoutDashboard,
    title: "Municipal Digital Systems",
    description: "Custom dashboards, RFP trackers, automation workflows, and digital twins to modernize municipal operations.",
    features: [
      "Capital project dashboards",
      "Automated reporting workflows",
      "RFP & bid tracking systems",
      "Digital twin planning",
      "Asset management integration",
      "Data-driven decision support"
    ],
    approach: "Unlocking insights from your data"
  },
  {
    icon: Code,
    title: "Software & Application Development",
    description: "Secure, scalable, and user-friendly web platforms and applications tailored for public sector needs.",
    features: [
      "Custom web application development",
      "Secure, scalable platforms",
      "User-centric UI/UX design",
      "Database architecture",
      "API integration services",
      "Ongoing maintenance & support"
    ],
    approach: "Building tools for modern government"
  },
  {
    icon: Cloud,
    title: "Cloud Services & Licensing",
    description: "Cloud migration support, hosting, SaaS/PaaS solutions, and technology licensing to optimize your IT infrastructure.",
    features: [
      "Cloud-first strategy consulting",
      "Migration to enterprise cloud services",
      "Managed hosting (SaaS/PaaS)",
      "Software licensing support",
      "Infrastructure-as-Code (IaC)",
      "Cost optimization & management"
    ],
    approach: "Modernizing IT for efficiency & scale"
  },
  {
    icon: Wrench,
    title: "IT Solutions & Tech Support",
    description: "End-to-end systems integration, cybersecurity, and managed technical support for robust and secure operations.",
    features: [
      "Legacy system integration",
      "Cybersecurity assessments",
      "Managed IT support services",
      "Network infrastructure design",
      "Disaster recovery planning",
      "24/7 technical support"
    ],
    approach: "Reliable technology, expert support"
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-accent-light)] border-b border-[var(--color-border)] text-[var(--color-text-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering Services
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            We provide a broad but targeted suite of services designed to help municipalities and public agencies modernize infrastructure delivery.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-8 pb-20 bg-[var(--color-background)]">
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
                          Inquire About This Service
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                    <div className={`p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-6">Key Capabilities:</h3>
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
