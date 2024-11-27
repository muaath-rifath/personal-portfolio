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
import { PhoneInput } from "@/components/ui/phone-input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { submitContact } from "@/app/_actions/contact";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await submitContact(data);

      if (result.success) {
        toast({
          title: 'Form submitted successfully',
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: 'Error submitting form',
          description: result.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error submitting form',
        description: 'An error occurred while submitting the form.',
        variant: 'destructive',
      });
    }
  }

  return (
    <div className="mt-10 lg:mt-20 border md:max-lg:max-w-xl border-gray-500 lg:border-l-0 lg:rounded-l-none p-10 mb-20 lg:mb-0 rounded-xl lg:w-1/3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-start">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start w-full">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Name" className="w-full border-gray-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Email" className="w-full border-gray-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start w-full">
                <FormLabel className="text-left">Phone Number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput placeholder="Enter a phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start w-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter Your Message" className="w-full border-gray-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="grid">
            Submit
          </Button>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}
