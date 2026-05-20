"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter, MessageCircle, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useForm as useFormspree } from '@formspree/react';

// shadcn/ui components
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
import { Card, CardContent } from "@/components/ui/card";

// Define form schema with Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be at most 50 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be at most 1000 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  // Formspree integration - form ID: xwvzvjvb
  const [formspreeState, formspreeHandleSubmit] = useFormspree('xwvzvjvb');

  // Initialize react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  });

  // Form submission handler
  async function onSubmit(data: ContactFormValues) {
    try {
      // Create form data for Formspree
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);

      // Submit to Formspree
      await formspreeHandleSubmit(formData);

      // Show success message
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
        duration: 5000,
      });
    }
  }

  // Watch message length for character counter
  const messageLength = form.watch("message")?.length || 0;

  // Check if Formspree submission succeeded
  React.useEffect(() => {
    if (formspreeState.succeeded) {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      form.reset();
    }
  }, [formspreeState.succeeded, form]);

  // Check if Formspree submission failed - FIXED: removed .length check
  React.useEffect(() => {
    if (formspreeState.errors) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
        duration: 5000,
      });
    }
  }, [formspreeState.errors]);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let us Work <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have a project in mind? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border-gray-200 rounded-2xl h-full shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:onyangomarkonyango559@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Mark,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200 group border border-gray-200 hover:border-blue-200"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Email</div>
                      <div className="text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        onyangomarkonyango559@gmail.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Location</div>
                      <div className="text-gray-900">Nairobi, Kenya</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Mark-Ony"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 border border-gray-200 hover:border-blue-500"
                    >
                      <Github className="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://linkedin.com/in/mark-onyango-5958723a5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 border border-gray-200 hover:border-blue-500"
                    >
                      <Linkedin className="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://wa.me/254794606191"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-green-500 transition-colors duration-200 border border-gray-200 hover:border-green-500"
                    >
                      <MessageCircle className="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://twitter.com/markreqa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 border border-gray-200 hover:border-blue-500"
                    >
                      <Twitter className="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border-gray-200 rounded-2xl h-full shadow-lg">
              <CardContent className="p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 ${fieldState.error && "border-red-500 focus:border-red-500 focus:ring-red-500"}`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              type="email"
                              className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 ${fieldState.error && "border-red-500 focus:border-red-500 focus:ring-red-500"}`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    {/* Message Field */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <div className="flex justify-between items-center">
                            <FormLabel className="text-gray-700">
                              Message
                            </FormLabel>
                            <span className={`text-sm ${messageLength > 1000 ? "text-red-500" : "text-gray-500"}`}>
                              {messageLength}/1000
                            </span>
                          </div>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project..."
                              className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 min-h-[150px] focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 resize-none ${fieldState.error && "border-red-500 focus:border-red-500 focus:ring-red-500"}`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={formspreeState.submitting || !form.formState.isValid}
                      className={`w-full px-6 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${formspreeState.submitting && "animate-pulse"}`}
                    >
                      {formspreeState.submitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 inline-block" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 inline" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {/* Success Message */}
                    {formspreeState.succeeded && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-500 text-sm text-center"
                      >
                        Message sent successfully! I will get back to you soon.
                      </motion.p>
                    )}

                    {/* Error Message - FIXED: removed .length check */}
                    {formspreeState.errors && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm text-center"
                      >
                        Failed to send message. Please try again.
                      </motion.p>
                    )}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}