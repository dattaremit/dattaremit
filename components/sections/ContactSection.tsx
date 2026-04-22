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
  ArrowUpRight,
  Check,
  Clock4,
  Loader2,
  Mail,
  ShieldCheck,
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
      const timer = setTimeout(() => setIsSuccess(false), 5000);
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
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_85%_20%,color-mix(in_oklch,var(--periwinkle)_18%,transparent)_0%,transparent_60%)] pointer-events-none"
      />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <h2 className="display-mixed text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-foreground">
              Let&rsquo;s talk.
            </h2>
            <p className="mt-6 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
              Request early access or ask us anything about the service. We
              respond within 24 hours.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex size-9 items-center justify-center rounded-xl bg-foreground/5 text-[var(--brand-deep)]">
                  <ShieldCheck className="size-4" />
                </span>
                AES-256 field-level encryption with AWS KMS.
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex size-9 items-center justify-center rounded-xl bg-foreground/5 text-[var(--brand-deep)]">
                  <ShieldCheck className="size-4" />
                </span>
                Regulated payments partner Zynk Labs custodies funds.
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex size-9 items-center justify-center rounded-xl bg-foreground/5 text-[var(--brand-deep)]">
                  <Clock4 className="size-4" />
                </span>
                Response time: within 24 hours.
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex size-9 items-center justify-center rounded-xl bg-foreground/5 text-[var(--brand-deep)]">
                  <Mail className="size-4" />
                </span>
                <a
                  href="mailto:support@dattaremit.com"
                  className="text-foreground font-medium hover:text-[var(--brand-deep)] transition-colors"
                >
                  support@dattaremit.com
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <div className="mb-6 pb-6 border-b border-border/70">
                <h3 className="text-xl font-semibold tracking-tight mb-1.5">
                  Request early access
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                            Full name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                          <FormLabel className="text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          WhatsApp number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+1 234 567 8900"
                            {...field}
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
                        <FormLabel className="text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          Message
                        </FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Tell us about your needs..."
                            {...field}
                            className="flex min-h-28 w-full rounded-xl border border-border bg-card/60 px-4 py-3 text-[15px] md:text-sm shadow-[inset_0_1px_0_0_color-mix(in_oklch,var(--foreground)_4%,transparent)] outline-none transition-[color,box-shadow,border-color] placeholder:text-muted-foreground focus-visible:border-[var(--brand-deep)] focus-visible:ring-[var(--brand)]/30 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    variant="brand"
                    size="xl"
                    className="w-full mt-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Request access
                        <ArrowUpRight className="size-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              {isSuccess && (
                <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Check className="size-5" />
                    <span className="font-medium text-sm">
                      Request submitted — we&apos;ll be in touch within 24 hours.
                    </span>
                  </div>
                </div>
              )}

              {isError && (
                <div className="mt-6 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertCircle className="size-5" />
                    <span className="font-medium text-sm">{errorMessage}</span>
                  </div>
                </div>
              )}

              <p className="mt-6 text-center text-xs text-muted-foreground">
                By submitting, you agree to our{" "}
                <a
                  href="/privacy"
                  className="text-foreground font-medium underline decoration-[var(--brand-deep)] decoration-2 underline-offset-4"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
