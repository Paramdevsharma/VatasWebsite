import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Karan Dev Sharma, P.Eng., PMP",
    role: "Founder & Principal Engineer",
    specialization: "Municipal Engineering",
    background: "Managed a $22M/year structural renewal program at York Region and contributed to projects valued at $400M–$4.6B.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Co-Founder",
    role: "Lead, Digital & Technology", 
    specialization: "Software & Cloud Architecture",
    background: "Proven track record in software development, cloud infrastructure, and technology solution architecture for government and enterprise clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Dr. Emily Thompson",
    role: "Environmental Engineering Lead",
    specialization: "Sustainability Solutions",
    background: "PhD MIT, Green building expert. Focused on lifecycle design and carbon reduction.", 
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
  },
    {
    name: "Dr. Sarah Chen",
    role: "Lead Structural Engineer",
    specialization: "Bridge & Culvert Rehabilitation",
    background: "PhD Stanford, 12 years at Arup & AECOM. Expert in structural assessments and rehab planning.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
            Meet Our Founding Team
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Our diverse team of engineers brings together expertise from top firms 
            with a shared vision of creating something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[var(--color-accent-primary)]/20 to-transparent" />
                  </div>
                  
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-2">{member.name}</h3>
                  <p className="text-[var(--color-secondary-gray)] font-medium text-sm mb-3">{member.role}</p>
                  
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline" className="text-xs border-[var(--color-border)]">
                      {member.specialization}
                    </Badge>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      <p>{member.background}</p>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button className="w-8 h-8 bg-[var(--color-accent-light)] hover:bg-[var(--color-border)] rounded-full flex items-center justify-center transition-colors border border-[var(--color-border)]">
                      <Linkedin className="w-4 h-4 text-[var(--color-secondary-gray)]" />
                    </button>
                    <button className="w-8 h-8 bg-[var(--color-accent-light)] hover:bg-[var(--color-border)] rounded-full flex items-center justify-center transition-colors border border-[var(--color-border)]">
                      <Mail className="w-4 h-4 text-[var(--color-secondary-gray)]" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}