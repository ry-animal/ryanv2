"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

// Zod schema for form validation
const contactFormSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be less than 50 characters"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    subject: z
        .string()
        .min(1, "Subject is required")
        .min(5, "Subject must be at least 5 characters")
        .max(100, "Subject must be less than 100 characters"),
    message: z
        .string()
        .min(1, "Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "ryanlvv@gmail.com",
        href: "mailto:ryanlvv@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (206) 650-3536",
        href: "tel:+12066503536",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Seattle, WA",
        href: null,
    },
];

export default function ContactSection() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            toast.success(result.message || "Message sent successfully! I'll get back to you soon.");
            reset();
        } catch (error) {
            console.error('Contact form error:', error);
            toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-20 lg:py-32 bg-muted/30">
            <ResponsiveContainer>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? I'd love to hear from you.
                            Let's create something amazing together.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <ScrollReveal>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">Let's Connect</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    I'm always open to discussing new opportunities, interesting projects,
                                    or just having a friendly chat about technology and development.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <ScrollReveal key={info.label} delay={index * 0.1}>
                                    <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <info.icon className="h-5 w-5 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-medium">{info.label}</div>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <div className="text-muted-foreground">{info.value}</div>
                                            )}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ScrollReveal delay={0.2}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Name Field */}
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                {...register("name")}
                                                placeholder="Your name"
                                                className={errors.name ? "border-red-500" : ""}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-red-500">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                {...register("email")}
                                                placeholder="your.email@example.com"
                                                className={errors.email ? "border-red-500" : ""}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-500">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            {...register("subject")}
                                            placeholder="What's this about?"
                                            className={errors.subject ? "border-red-500" : ""}
                                        />
                                        {errors.subject && (
                                            <p className="text-sm text-red-500">
                                                {errors.subject.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            {...register("message")}
                                            placeholder="Tell me about your project or just say hello!"
                                            rows={6}
                                            className={errors.message ? "border-red-500" : ""}
                                        />
                                        {errors.message && (
                                            <p className="text-sm text-red-500">
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full"
                                    >
                                        {isSubmitting ? (
                                            <>Sending...</>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
            </ResponsiveContainer>
        </section>
    );
} 