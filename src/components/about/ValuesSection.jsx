import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lightbulb, Users, Leaf } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Safety is our top priority in every project. We maintain the highest safety standards and have achieved a 99.8% safety record across all our projects.",
    color: "text-red-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and innovative approaches to solve complex engineering challenges and deliver superior results.",
    color: "text-yellow-600"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork, both within our organization and with our clients, to achieve exceptional outcomes.",
    color: "text-blue-600"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Our commitment to environmental responsibility drives us to create sustainable solutions that benefit both our clients and future generations.",
    color: "text-green-600"
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape our 
            approach to engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
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