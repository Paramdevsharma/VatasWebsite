import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Send, Lightbulb } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message:""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const emailData = {
        to_email: 'vatasinfrastructure@gmail.com',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        details: formData.message,
        subject: `New Vatas Engineering Inquiry from ${formData.name}`
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_04qzl3i',
          template_id: 'template_7nlx1vq',
          user_id: 'h3pUwav733vghFsvu',
          template_params: emailData
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you shortly.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was an error submitting your message. Please try again or contact us directly at vatasinfrastructure@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-accent-light)] border-b border-[var(--color-border)] text-[var(--color-text-dark)] pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start Something Bright
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            Ready to bring your engineering vision to life? We're excited to hear about 
            your project and explore how we can illuminate the path to success together.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-accent-light)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-8">Get In Touch</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                  As a new engineering firm, we're eagerly accepting projects and would love 
                  to discuss how we can bring fresh solutions to your engineering challenges.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border border-[var(--color-border)] shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--color-accent-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-[var(--color-secondary-gray)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--color-text-dark)]">Phone</h3>
                        <p className="text-[var(--color-text-muted)]">647-760-5889</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-[var(--color-border)] shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--color-accent-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-[var(--color-secondary-gray)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--color-text-dark)]">Email</h3>
                        <p className="text-[var(--color-text-muted)]">vatasinfrastructure@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-[var(--color-border)] shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--color-accent-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[var(--color-secondary-gray)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--color-text-dark)]">Address</h3>
                        <p className="text-[var(--color-text-muted)]">
                          66 Crown Victoria Dr
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-[var(--color-border)] shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[var(--color-text-dark)] flex items-center gap-3">
                    <Lightbulb className="w-8 h-8 text-[var(--color-secondary-gray)]" />
                    Tell Us About Your Project
                  </CardTitle>
                  <p className="text-[var(--color-text-muted)]">
                    We're excited to learn about your vision and explore how we can bring it to life. 
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your project vision, challenges you're facing, and what success looks like to you..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-primary-dark)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-accent-primary)] py-6 text-lg text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Let's Start Building Together
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}