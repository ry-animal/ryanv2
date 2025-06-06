"use client";

import { useState } from "react";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Send, Download } from "lucide-react";
import { toast } from "sonner";

// Form data type
interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// Simple validation functions
const validateName = (name: string): string | null => {
    if (!name || name.length < 2) return "Name must be at least 2 characters";
    if (name.length > 50) return "Name must be less than 50 characters";
    return null;
};

const validateEmail = (email: string): string | null => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return null;
};

const validateSubject = (subject: string): string | null => {
    if (!subject || subject.length < 5) return "Subject must be at least 5 characters";
    if (subject.length > 100) return "Subject must be less than 100 characters";
    return null;
};

const validateMessage = (message: string): string | null => {
    if (!message || message.length < 10) return "Message must be at least 10 characters";
    if (message.length > 1000) return "Message must be less than 1000 characters";
    return null;
};

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "ryanlvv@gmail.com",
        href: "mailto:ryanlvv@gmail.com",
    },
    {
        icon: MessageCircle,
        label: "Telegram",
        value: "@ryan_v2",
        href: "https://t.me/ryan_v2",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Seattle, WA",
        href: null,
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

        const nameError = validateName(formData.name);
        if (nameError) newErrors.name = nameError;

        const emailError = validateEmail(formData.email);
        if (emailError) newErrors.email = emailError;

        const subjectError = validateSubject(formData.subject);
        if (subjectError) newErrors.subject = subjectError;

        const messageError = validateMessage(formData.message);
        if (messageError) newErrors.message = messageError;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            toast.success(result.message || "Message sent successfully! I'll get back to you soon.");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
        } catch (error) {
            console.error('Contact form error:', error);
            toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field: keyof ContactFormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <section id="contact" className="py-20 lg:py-32 bg-muted/30">
            <ResponsiveContainer>
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

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <ScrollReveal>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Let's Connect</CardTitle>
                                    <CardDescription className="text-base">
                                        I'm always open to discussing new opportunities, interesting projects,
                                        or just having a friendly chat about technology and development.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">

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
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <Button
                                variant="default"
                                size="lg"
                                asChild
                                className="w-full"
                            >
                                <a
                                    href="/resume.pdf"
                                    download="Ryan_Van_Valkenburg_Resume.pdf"
                                    className="flex items-center gap-2"
                                >
                                    <Download className="h-5 w-5" />
                                    Download Resume
                                </a>
                            </Button>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.2}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>
                                    Note: Email form is currently in development. For immediate contact, please use email or Telegram above.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange("name")}
                                                placeholder="Your name"
                                                className={errors.name ? "border-red-500" : ""}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-red-500">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange("email")}
                                                placeholder="your.email@example.com"
                                                className={errors.email ? "border-red-500" : ""}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-500">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange("subject")}
                                            placeholder="What's this about?"
                                            className={errors.subject ? "border-red-500" : ""}
                                        />
                                        {errors.subject && (
                                            <p className="text-sm text-red-500">
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange("message")}
                                            placeholder="Tell me about your project or just say hello!"
                                            rows={6}
                                            className={errors.message ? "border-red-500" : ""}
                                        />
                                        {errors.message && (
                                            <p className="text-sm text-red-500">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

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