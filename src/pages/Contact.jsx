
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, Lightbulb } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // The database backup functionality has been removed to prevent login redirects.
      // Now, we only send the email via EmailJS.

      const emailData = {
        to_email: 'paramvatas@gmail.com',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        projectType: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        timeLine: formData.timeline || 'Not specified',
        details: formData.message,
        subject: `New Vatas Engineering Inquiry from ${formData.name}`
      };

      // Send email using EmailJS API directly
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
      //alert("Thank you for your message! We've received it and will get back to you shortly.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was an error submitting your message. Please try again or contact us directly at paramvatas@gmail.com.");
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
      <section className="bg-[var(--color-accent-light)] border-b border-[var(--color-border)] text-[var(--color-text-dark)] py-20">
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
                        <p className="text-[var(--color-text-muted)]">paramvatas@gmail.com</p>
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
                          456 Sunrise Boulevard<br />
                          Innovation Hub, CA 94102
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-[var(--color-border)] shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--color-accent-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[var(--color-secondary-gray)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--color-text-dark)]">Hours</h3>
                        <p className="text-[var(--color-text-muted)]">
                          Mon-Fri: 8:00 AM - 7:00 PM<br />
                          Sat: 9:00 AM - 3:00 PM
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          Company
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                          Project Type
                        </label>
                        <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="structural">Structural Engineering</SelectItem>
                            <SelectItem value="civil">Civil Engineering</SelectItem>
                            <SelectItem value="environmental">Environmental Solutions</SelectItem>
                            <SelectItem value="consulting">Engineering Consulting</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                          Timeline
                        </label>
                        <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Project timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-3months">1-3 Months</SelectItem>
                            <SelectItem value="3-6months">3-6 Months</SelectItem>
                            <SelectItem value="6months+">6+ Months</SelectItem>
                            <SelectItem value="planning">Just Planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                        Project Budget
                      </label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                          <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                          <SelectItem value="500k+">$500K+</SelectItem>
                          <SelectItem value="discuss">Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
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

      {/* Map Section */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">Visit Our Bright New Office</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Located in the Innovation Hub, our modern office space reflects our 
              commitment to fresh thinking and collaborative engineering solutions.
            </p>
          </div>
          
          <Card className="border border-[var(--color-border)] shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-[var(--color-accent-light)] h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[var(--color-secondary-gray)] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--color-text-dark)] mb-2">Find Us Here</h3>
                  <p className="text-[var(--color-text-muted)]">
                    456 Sunrise Boulevard, Innovation Hub, CA 94102
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
