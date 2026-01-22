"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Star, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Agent } from "@/lib/types";

interface ContactFormProps {
  agent: Agent;
  propertyTitle: string;
}

export function ContactForm({ agent, propertyTitle }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Hi, I'm interested in "${propertyTitle}". Please contact me with more information.`,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
            Message Sent!
          </h3>
          <p className="text-muted-foreground">
            {agent.name} will get back to you shortly.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Contact Agent</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Agent Info */}
        <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={agent.photo || "/placeholder.svg"}
              alt={agent.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground truncate">{agent.name}</h4>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>{agent.rating}</span>
              <span className="mx-1">·</span>
              <span>{agent.reviewCount} reviews</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {agent.yearsExperience} years experience
            </p>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
            <a href={`tel:${agent.phone}`}>
              <Phone className="h-4 w-4" />
              Call
            </a>
          </Button>
          <Button variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
            <a href={`mailto:${agent.email}`}>
              <Mail className="h-4 w-4" />
              Email
            </a>
          </Button>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
              required
            />
          </div>
          <Button type="submit" className="w-full gap-2" disabled={isLoading}>
            {isLoading ? (
              <>Sending...</>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center">
          By contacting us, you agree to our Terms of Service and Privacy Policy.
        </p>
      </CardContent>
    </Card>
  );
}
