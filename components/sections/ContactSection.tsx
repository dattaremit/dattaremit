"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import apiClient from "@/lib/api-client";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import {
  AlertCircle,
  ArrowRight,
  Check,
  Clock,
  Loader2,
  Mail,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  whatsapp: yup
    .string()
    .required("WhatsApp number is required")
    .min(10, "Please enter a valid phone number"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

type FormData = yup.InferType<typeof schema>;

const features = [
  {
    icon: Shield,
    text: "Bank-grade security & compliance",
  },
  {
    icon: Shield,
    text: "SOC 2 Type II compliant infrastructure",
  },
];

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    try {
      await apiClient.post("/contact", { ...data, source: "DATTAREMIT" });
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setIsError(true);
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage(
          "Network error. Please check your connection and try again.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Now accepting early access requests
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Get In Touch
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to revolutionize how you receive international payments?
              Join thousands of freelancers who are saving on fees and earning
              yield on their hard-earned money.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="border-t border-border/50 pt-8">
              <p className="text-sm font-medium text-foreground mb-4">
                Have questions? Reach out directly:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:support@dattaremit.com"
                    className="hover:text-primary transition-colors"
                  >
                    support@dattaremit.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Request Early Access
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form and we&apos;ll get back to you shortly.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="h-11"
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            className="h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+1 234 567 8900"
                            {...field}
                            className="h-11"
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Tell us about your needs..."
                            {...field}
                            className="flex min-h-25 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full text-base mt-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Access
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              {isSuccess && (
                <div className="mt-6 rounded-lg bg-green-50 dark:bg-green-900/20 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                    <Check className="h-5 w-5" />
                    <span className="font-medium">
                      Request submitted successfully!
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-green-600/80 dark:text-green-400/80">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              )}

              {isError && (
                <div className="mt-6 rounded-lg bg-red-50 dark:bg-red-900/20 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400">
                    <AlertCircle className="h-5 w-5" />
                    <span className="font-medium">Submission failed</span>
                  </div>
                  <p className="mt-1 text-sm text-red-600/80 dark:text-red-400/80">
                    {errorMessage}
                  </p>
                </div>
              )}

              <p className="mt-6 text-center text-xs text-muted-foreground">
                By submitting, you agree to our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                . No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
