import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, Calendar } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-background" data-testid="contact-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary" data-testid="contact-hero-title">
              Let's Talk
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="contact-hero-description">
              Let's talk about how Upsavvy Solutions can support your business or program.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-muted" data-testid="main-contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-card rounded-xl shadow-lg p-8 border border-border" data-testid="contact-form-container">
              {isSubmitted ? (
                <div className="text-center space-y-6" data-testid="success-message">
                  <div className="bg-secondary text-secondary-foreground rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours to discuss how we can help your organization.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    data-testid="button-send-another"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-foreground">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-foreground">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your@email.com" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              className="min-h-[120px]"
                              {...field} 
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-secondary hover:bg-accent text-secondary-foreground font-semibold py-4 px-6 rounded-lg text-lg transition-colors duration-200"
                      disabled={contactMutation.isPending}
                      data-testid="button-send-message"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8" data-testid="contact-info">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                alt="Professional business consultation meeting" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="contact-image"
              />

              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-phone">
                  <div className="bg-secondary text-secondary-foreground rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <div className="bg-secondary text-secondary-foreground rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@upsavvysolutions.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-testid="contact-consultation">
                  <div className="bg-secondary text-secondary-foreground rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Consultation</div>
                    <div className="text-muted-foreground">Available Monday-Friday</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-6 border border-border" data-testid="response-time">
                <h3 className="font-heading font-bold text-lg text-primary mb-3">Response Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="section-padding bg-background" data-testid="contact-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you need business systems setup, program structure, or design support, we're here to help you succeed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
