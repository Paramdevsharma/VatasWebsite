import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import KaranImg from "@/images/0S6A5612-Edit2.jpg";
import ParamImg from "@/images/IMG_0657.jpg";
import Carl from "@/images/1517479589091.jpg";
import Jag from "@/images/1698422388117.jpg";
import Sal from "@/images/1693568900614.jpg";
import Monish from "@/images/1659479905760.jpg";
import Gunj from "@/images/1664209728587.jpg";
const team = [
  {
    name: "Karan D. Sharma",
    role: "Founder & Lead Engineer", 
    background: " P.Eng (Ontario) - Civil/Structural & Transportation Bridges, culverts, guiderail, pavements, roadway design",
    image: KaranImg
  },
  // {
  //   name: "Param D. Sharma",
  //   role: "Co-founder & Engineer",
  //   background: "Software engineer specializing in cloud-native systems and municipal digital solutions", 
  //   image: ParamImg
  // },
    {
    name: "Carlyle Glean",
    role: "Vice President, Municipal Transportation Design",
    background: "Senior municipal transportation engineer with 18+ years of experience in roadway geometry, roadside safety, drainage and corridor design", 
    image: Carl
  },
    {
    name: "Jagjit Singh",
    role: "Director, Corridor Design & Transportation Engineering",
    background: "Transportation engineer with 16+ years delivering road and highway corridors, LRT interfaces, drainage and utilities coordination", 
    image: Jag
  },
    {
    name: "Ahmed Salauddin Kabir",
    role: "Senior Project Engineer, Transit & Municipal Transportation",
    background: "Project engineer experienced on TTC, LRT and municipal transportation projects, bridging design, construction and project controls", 
    image: Sal
  },
    {
    name: "Monish Lad",
    role: "Senior Structural Engineer, Culverts & Retaining Walls",
    background: "Structural engineer focused on culvert rehabilitation and replacement, liners, box culverts and retaining/MSE walls on municipal roads", 
    image: Monish
  },
      {
    name: "Gunj Patel",
    role: "Lead, Construction Services & Field Inspection",
    background: "Site inspector and construction services lead with experience on roadway, watermain and sewer works, supporting contract administration in the field", 
    image: Gunj
  }
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

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] shadow-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] max-w-[280px]">
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