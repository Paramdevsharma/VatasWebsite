import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const teamHighlights = [
  {
    name: "Karan D. Sharma",
    role: "Founder & Lead Engineer", 
    background: " P.Eng (Ontario) - Civil/Structural & Transportation Bridges, culverts, guiderail, pavements, roadway design",
    image: "src/images/0S6A5612-Edit2.jpg",
  },
  {
    name: "Param D. Sharma",
    role: "Co-founder & Engineer",
    background: "Software engineer specializing in cloud-native systems and municipal digital solutions", 
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {teamHighlights.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] shadow-md bg-white">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-2">
                    <div className="w-6 h-6 bg-[var(--color-primary-dark)] rounded-full flex items-center justify-center border-2 border-white">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
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