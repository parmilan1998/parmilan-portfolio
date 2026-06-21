import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/data/contactInfo";
import { formSchema } from "@/schema/formSchema";
import type { FormStatus } from "@/enum/form-status";

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: FormData) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("success");
      form.reset();

      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Error occurred");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="w-[95%] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind? I&apos;m currently available for freelance
            work and exciting opportunities.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass p-5 rounded-2xl border border-border flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {value}
                  </p>
                </div>
              </div>
            ))}
            <div className="glass p-5 rounded-2xl border border-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                </span>
                <span className="text-xs font-bold text-green-400 uppercase tracking-widest">
                  Available
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently open to new projects and collaborations.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass p-8 rounded-3xl border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 relative z-10"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground font-semibold text-xs uppercase tracking-widest">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-background/60 border-border focus-visible:ring-primary h-11 font-medium"
                            data-testid="input-name"
                            {...field}
                            required
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
                        <FormLabel className="text-muted-foreground font-semibold text-xs uppercase tracking-widest">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            className="bg-background/60 border-border focus-visible:ring-primary h-11 font-medium"
                            data-testid="input-email"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground font-semibold text-xs uppercase tracking-widest">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Project Inquiry"
                          className="bg-background/60 border-border focus-visible:ring-primary h-11 font-medium"
                          data-testid="input-subject"
                          {...field}
                          required
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
                      <FormLabel className="text-muted-foreground font-semibold text-xs uppercase tracking-widest">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="bg-background/60 border-border focus-visible:ring-primary min-h-[130px] resize-none font-medium"
                          data-testid="input-message"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-bold shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] transition-all hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.7)]"
                  disabled={status === "loading"}
                  data-testid="button-submit"
                >
                  {status === "loading" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={18} /> Message Sent!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <span>{errorMessage || "Failed to send. Try again."}</span>
                  )}
                  {status === "idle" && (
                    <span className="flex items-center gap-2">
                      Send Message <Send size={16} />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
