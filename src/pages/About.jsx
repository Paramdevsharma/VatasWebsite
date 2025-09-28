
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Users, Target, Zap, Handshake, DollarSign, Sparkles, FileCheck, CalendarClock, Cpu } from "lucide-react";

import TeamSection from "../components/about/TeamSection";
import VisionSection from "../components/about/VisionSection";

const evaluationCriteria = [
  {
    icon: FileCheck,
    title: "Methodology & QA/QC",
    description: "30/60/90/IFR/IFC gates; discipline checklists; independent QA reviews; and fully traceable comment closure to ensure quality at every step."
  },
  {
    icon: CalendarClock,
    title: "Schedule & Risk Management",
    description: "We identify early utility and permit pathways, use concurrent engineering under a CDE, and maintain risk registers with priced contingencies."
  },
  {
    icon: DollarSign,
    title: "Price & Value Proposition",
    description: "Our proposals include clear assumptions, transparent change triggers, and provide full lifecycle and carbon scoring for all major options."
  },
  {
    icon: Cpu,
    title: "Digital Capability & Handover",
    description: "We provide robust model coordination rules, automated quantity/check scripts, and BIM/CDE handover aligned to municipal standards."
  }
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-accent-light)] border-b border-[var(--color-border)] text-[var(--color-text-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Vatas Engineering
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed mb-8">
              A Canadian-rooted, digital-first engineering consultancy founded to help municipalities and public agencies deliver more infrastructure for every taxpayer dollar.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="border-[var(--color-border)] bg-white px-4 py-2 text-sm">
                Founded 2025
              </Badge>
              <Badge variant="outline" className="border-[var(--color-border)] bg-white px-4 py-2 text-sm">
                Digital-First Consultancy
              </Badge>
              <Badge variant="outline" className="border-[var(--color-border)] bg-white px-4 py-2 text-sm">
                Public Sector Focused
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                Our Integrated Approach
              </h2>
              <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  Vatas Engineering was founded with a unique vision: to be the only firm that seamlessly combines civil engineering expertise with advanced software development capabilities.
                </p>
                <p>
                  While traditional engineering firms focus solely on physical infrastructure, and software companies lack engineering domain knowledge, we bridge this gap. Our team includes both licensed engineers (P.Eng.) and experienced software developers who understand municipal operations.
                </p>
                <p>
                  This dual expertise allows us to deliver complete solutions - from designing a bridge rehabilitation to building the digital dashboard that tracks its performance, or developing a traffic management system alongside the software tools that optimize it.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center" 
                alt="Engineering and technology collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-accent-primary)] text-white p-6 rounded-2xl">
                <div className="text-lg font-bold">Civil + Software</div>
                <div className="text-sm opacity-90">Complete Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisionSection />
      <TeamSection />

      {/* Competitive Strategy Section */}
      <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
              Our Competitive Strategy
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
              We combine the agility of a boutique firm with the structured delivery of a large enterprise, creating a unique value proposition for public sector clients.
            </p>
          </div>

          <Tabs defaultValue="civil" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 h-12">
              <TabsTrigger value="civil" className="h-full">Civil Engineering</TabsTrigger>
              <TabsTrigger value="digital" className="h-full">Tech & Software</TabsTrigger>
            </TabsList>
            
            <TabsContent value="civil" className="mt-12">
              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-8">
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)]">Market Approach</h3>
                  <Card className="border border-[var(--color-border)] shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-[var(--color-accent-primary)]"/>
                        Where We Compete
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-[var(--color-text-muted)]">TIAs and traffic operations; guiderail programs; small–mid culvert relines/replacements; retaining walls; bridge component rehabs; arterial resurfacing/targeted reconstructions; CA/inspection packages.</p>
                      <div>
                        <h4 className="font-semibold text-[var(--color-text-dark)] mb-2">Why we win:</h4>
                        <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1">
                          <li>Faster bid-to-mobilize with stage-gated work plans</li>
                          <li>Parametric pricing for transparent cost structures</li>
                          <li>Quantified lifecycle costs and CO₂ impacts</li>
                          <li>Transparent client dashboards for project tracking</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                   <Card className="border border-[var(--color-border)] shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Handshake className="w-6 h-6 text-[var(--color-primary-dark)]"/>
                        Where We Partner
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-[var(--color-text-muted)]">Multi-discipline or complex-interface work (transit tie-ins, multi-structure corridors, ITS/controls).</p>
                       <div>
                        <h4 className="font-semibold text-[var(--color-text-dark)] mb-2">Why we partner:</h4>
                        <p className="text-[var(--color-text-muted)]">We bring programmatic rehab speed and high-quality digital handover under a larger prime's umbrella, enhancing their offering.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:col-span-2 space-y-8">
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)]">Pricing & Value</h3>
                  <Card className="border border-[var(--color-border)] shadow-md bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <DollarSign className="w-6 h-6 text-green-600"/>
                        Pricing Position
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--color-text-muted)]">Typically <strong>15–30% below</strong> large-enterprise rates on like-for-like municipal scopes. Comparable to mid-size firms, but differentiated by our owner-aligned QA/QC and data-rich handover.</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-[var(--color-border)] shadow-md bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-amber-500"/>
                        Value Levers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-[var(--color-text-muted)]">Our reusable details/checklists, automated quantity take-offs, VE workshops, and advanced staging/traffic strategies deliver a <strong>10–15% effort reduction</strong> on repeatable packages.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-12">
              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-8">
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)]">Market Approach</h3>
                  <Card className="border border-[var(--color-border)] shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-[var(--color-accent-primary)]"/>
                        Where We Compete
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-[var(--color-text-muted)]">Custom municipal applications; permitting and licensing portals; asset tracking dashboards; workflow automation tools; cloud migration projects; system integration assignments.</p>
                      <div>
                        <h4 className="font-semibold text-[var(--color-text-dark)] mb-2">Why we win:</h4>
                        <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-1">
                          <li>Faster requirements-to-deployment cycles with agile delivery</li>
                          <li>Transparent QA/testing protocols and secure-by-design</li>
                          <li>Modular frameworks that reduce total cost of ownership</li>
                          <li>Digital handovers designed for municipal IT environments</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                   <Card className="border border-[var(--color-border)] shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Handshake className="w-6 h-6 text-[var(--color-primary-dark)]"/>
                        Where We Partner
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-[var(--color-text-muted)]">Enterprise-scale digital transformation (ERP/financials); smart city platforms; AI/ML-heavy analytics; national-scale IT modernization programs.</p>
                       <div>
                        <h4 className="font-semibold text-[var(--color-text-dark)] mb-2">Why we partner:</h4>
                        <p className="text-[var(--color-text-muted)]">We bring municipal-sector domain knowledge and cost-effective delivery to larger systems integrators, de-risking their projects.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:col-span-2 space-y-8">
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)]">Pricing & Value</h3>
                  <Card className="border border-[var(--color-border)] shadow-md bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <DollarSign className="w-6 h-6 text-green-600"/>
                        Pricing Position
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--color-text-muted)]">Typically <strong>20–35% below</strong> large IT vendors (Accenture, CGI, Deloitte) on municipal scopes. Differentiated by government-grade QA/QC and practical, staff-friendly solutions.</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-[var(--color-border)] shadow-md bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-amber-500"/>
                        Value Levers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-[var(--color-text-muted)]">Our reusable code modules, low-code platforms, and cloud-native architecture cut <strong>10–20% of upfront effort</strong> on repeatable municipal systems.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Evaluation Criteria Section */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
              How We Align to RFP Evaluation Criteria
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Our delivery model is structured to maximize scores on the criteria that matter most to public sector clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evaluationCriteria.map((item, index) => (
              <Card key={index} className="border border-[var(--color-border)] shadow-lg bg-white">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                    <p className="text-[var(--color-text-muted)]">{item.description}</p>
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
