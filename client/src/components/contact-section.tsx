import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      fitnessGoals: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "Thank you for your interest! We'll be in touch soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-orange-primary text-xl" />,
      title: "Address",
      content: "123 Fitness Street\nMuscle City, MC 12345"
    },
    {
      icon: <Phone className="text-orange-primary text-xl" />,
      title: "Phone",
      content: "(555) 123-PUMP"
    },
    {
      icon: <Mail className="text-orange-primary text-xl" />,
      title: "Email", 
      content: "info@fitpulse.com"
    },
    {
      icon: <Clock className="text-orange-primary text-xl" />,
      title: "Hours",
      content: "Mon-Fri: 5:00 AM - 11:00 PM\nSat-Sun: 6:00 AM - 10:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-charcoal to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            START YOUR <span className="text-orange-primary">JOURNEY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your life? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-oswald font-bold text-white mb-6">Get Started Today</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder="John"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-primary"
                            data-testid="input-first-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder="Doe"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-primary"
                            data-testid="input-last-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          placeholder="john@example.com"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-primary"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-primary"
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="fitnessGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Fitness Goals</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-gray-700 border-gray-600 text-white focus:border-orange-primary"
                            data-testid="select-fitness-goals">
                            <SelectValue placeholder="Select your fitness goal" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="Weight Loss">Weight Loss</SelectItem>
                          <SelectItem value="Muscle Building">Muscle Building</SelectItem>
                          <SelectItem value="General Fitness">General Fitness</SelectItem>
                          <SelectItem value="Athletic Performance">Athletic Performance</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Additional Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4}
                          placeholder="Tell us about your fitness journey..."
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-primary"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-orange-primary hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                  data-testid="button-submit-contact">
                  {contactMutation.isPending ? "Submitting..." : "Start My Transformation"} 
                  {!contactMutation.isPending && <ArrowRight className="ml-2" size={16} />}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-oswald font-bold text-white mb-6">Visit Our Gym</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start" data-testid={`contact-info-${index}`}>
                    <div className="mr-4 mt-1">{info.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Modern gym interior with equipment"
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">State-of-the-Art Facility</h4>
                <p className="text-gray-300 text-sm">
                  Experience our world-class equipment and premium amenities in a motivating environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
