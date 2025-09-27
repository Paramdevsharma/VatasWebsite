import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import HeroSection from "../components/home/HeroSection";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TeamPreview from "../components/home/TeamPreview";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <WhyChooseUs />
      <ServicesPreview />
      <TeamPreview />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-[var(--color-accent-light)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
              Ready to Start Something Amazing?
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] mb-8">
              Let's bring your engineering vision to life with fresh ideas and innovative solutions. 
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-accent-primary)] px-8">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("About")}>
                <Button size="lg" variant="outline" className="border-[var(--color-border)] text-[var(--color-text-dark)] hover:bg-white px-8">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}