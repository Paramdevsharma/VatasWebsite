import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AppWindow, LayoutDashboard, AreaChart, Layers, Bot, CheckCircle, ListChecks, FileCode, Users } from "lucide-react";

const digitalServices = [
  {
    title: "Custom Application Development",
    icon: AppWindow,
    scope: "Design, develop, and deploy secure, scalable web and mobile applications tailored to municipal operations—such as permitting portals, inspection apps, and citizen services interfaces.",
    methodology: [
      "Requirements gathering and stakeholder interviews",
      "Agile development using UX/UI best practices",
      "Prototype, development, and iterative client reviews",
      "Integration with municipal systems and APIs",
      "Testing—unit, system, and user acceptance testing"
    ],
    deliverables: [
      "Functional prototypes or Minimum Viable Products (MVPs)",
      "Developer documentation and user guides",
      "Deployment packages and cloud-hosted solutions",
      "Training sessions and user support material"
    ]
  },
  {
    title: "Municipal Digital Systems",
    icon: LayoutDashboard,
    scope: "Develop tailored dashboards, permitting portals, asset tracking systems, and process automation tools that help staff manage infrastructure programs and day-to-day operations more efficiently.",
    methodology: [
      "Interface design, data modeling, and process mapping",
      "SaaS or cloud-native implementation with permission controls",
      "User testing and feedback cycles to refine usability"
    ],
    deliverables: [
      "Interactive dashboards and live data visualizations",
      "Workflow automation scripts or modules",
      "Cloud-based permitting and asset management portals",
      "User training and support guides"
    ]
  },
  {
    title: "Data Analytics & Modelling",
    icon: AreaChart,
    scope: "Deliver insights from civil engineering data through traffic simulations, condition-based lifecycle models, or predictive analytics for maintenance planning.",
    methodology: [
      "Data cleaning and validation",
      "Statistical modelling, GIS integration, and visualization",
      "Scenario simulation and lifecycle forecasting",
      "Results validation and stakeholder review"
    ],
    deliverables: [
      "Analytical dashboards and reports",
      "Forecasting models and maintenance schedules",
      "Data spreadsheets and visualization graphics"
    ]
  },
  {
    title: "Digital Twin & BIM Integration",
    icon: Layers,
    scope: "Create data-rich, interoperable digital models of assets (e.g., roads, bridges, systems) for seamless integration with existing asset management workflows.",
    methodology: [
      "Collate data from surveys, inspections, and as-built sources",
      "Build 3D BIM models or digital replicas",
      "Apply metadata and model validation",
      "Export in formats compatible with owner systems (e.g., COBie, IFC)"
    ],
    deliverables: [
      "3D digital twin/BIM model files",
      "Metadata specification documents",
      "Model viewing interface or embedded visual tools"
    ]
  },
  {
    title: "Automation & Workflow Tools",
    icon: Bot,
    scope: "Streamline municipal processes—like permitting, inspection logging, or condition tracking—through automated workflows and rule-based triggers.",
    methodology: [
      "Process mapping and logic design workshops",
      "Low-code or scripting-based tooling",
      "Testing with real datasets and user scenarios"
    ],
    deliverables: [
      "Automation scripts or workflow modules",
      "Flowchart documentation and logic definition",
      "Implementation guides, user training, and maintenance support"
    ]
  }
];

export default function Digital() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-accent-light)] border-b border-[var(--color-border)] text-[var(--color-text-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Digital Solutions
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            We build and integrate modern technology to help public agencies operate more efficiently, make data-driven decisions, and deliver better public services.
          </p>
        </div>
      </section>

      {/* Services Details Grid */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8">
            {digitalServices.map((service, index) => (
              <Card key={index} className="border border-[var(--color-border)] shadow-lg overflow-hidden">
                <CardHeader className="p-8 bg-[var(--color-accent-light)] border-b border-[var(--color-border)]">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">{service.title}</CardTitle>
                      <p className="text-[var(--color-text-muted)] text-base">{service.scope}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[var(--color-secondary-gray)]" />
                      Our Methodology
                    </h3>
                    <ul className="space-y-3">
                      {service.methodology.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--color-text-muted)] text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                   <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-4 flex items-center gap-2">
                      <ListChecks className="w-5 h-5 text-[var(--color-secondary-gray)]" />
                      Typical Deliverables
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FileCode className="w-5 h-5 text-[var(--color-accent-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--color-text-muted)] text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}