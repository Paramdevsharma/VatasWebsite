import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import KaranImg from "@/images/0S6A5612-Edit2.jpg";
import ParamImg from "@/images/IMG_0657.jpg";


const teamHighlights = [
  {
    name: "Karan D. Sharma",
    role: "Founder & Lead Engineer", 
    background: " P.Eng (Ontario) - Civil/Structural & Transportation Bridges, culverts, guiderail, pavements, roadway design",
    image: KaranImg
  },
  {
    name: "Param D. Sharma",
    role: "Co-founder & Engineer",
    background: "Software engineer specializing in cloud-native systems and municipal digital solutions", 
    image: ParamImg
  },
    {
    name: "Carlyle Glean",
    role: "Vice President, Municipal Transportation Design",
    background: "Senior municipal transportation engineer with 18+ years of experience in roadway geometry, roadside safety, drainage and corridor design", 
    image: "src/images/Param.heic"
  },
    {
    name: "Jagjit Singh",
    role: "Director, Corridor Design & Transportation Engineering",
    background: "Transportation engineer with 16+ years delivering road and highway corridors, LRT interfaces, drainage and utilities coordination", 
    image: "src/images/Param.heic"
  },
    {
    name: "Ahmed Salauddin Kabir",
    role: "Senior Project Engineer, Transit & Municipal Transportation",
    background: "Project engineer experienced on TTC, LRT and municipal transportation projects, bridging design, construction and project controls", 
    image: "src/images/Param.heic"
  },
    {
    name: "Monish Lad",
    role: "Senior Structural Engineer, Culverts & Retaining Walls",
    background: "Structural engineer focused on culvert rehabilitation and replacement, liners, box culverts and retaining/MSE walls on municipal roads", 
    image: "src/images/Param.heic"
  },
      {
    name: "Gunj Patel",
    role: "Lead, Construction Services & Field Inspection",
    background: "Site inspector and construction services lead with experience on roadway, watermain and sewer works, supporting contract administration in the field", 
    image: "src/images/Param.heic"
  }
  // ,
  // {
  //   name: "Emily Thompson",
  //   role: "Environmental Solutions Expert",
  //   background: "UC Berkeley PhD, sustainability pioneer",
  //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
  // }
];

export default function TeamPreview() {
  return (
    <section className="py-20 bg-[var(--color-accent-light)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-[var(--color-border)] rounded-full text-[var(--color-secondary-gray)] text-sm font-medium mb-6">
            Meet Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
            Experienced Engineers, Fresh Energy
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Our founding team brings engineering experience from top engineering 
            firms, now united with a vision to create something extraordinary.
          </p>
        </div>

<div className="flex flex-wrap justify-center gap-8 mb-12 max-w-7xl mx-auto">
  {teamHighlights.map((member, index) => (
    <Card 
      key={index} 
      className="group hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] shadow-md bg-white w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] max-w-[280px]"
    >
      <CardContent className="p-8 text-center">
        <div className="relative mb-6">
          <img 
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-2">
          </div>
        </div>
        
        <h3 className="font-bold text-[var(--color-text-dark)] mb-2">{member.name}</h3>
        <p className="text-[var(--color-secondary-gray)] font-medium text-sm mb-3">{member.role}</p>
        <p className="text-[var(--color-text-muted)] text-sm">{member.background}</p>
      </CardContent>
    </Card>
  ))}
</div>


        {/* <div className="text-center">
          <Link to={createPageUrl("About")}>
            <Button size="lg" className="bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-accent-primary)]">
              Meet the Full Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}