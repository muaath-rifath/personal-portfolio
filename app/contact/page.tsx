import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohamed Muaath Rifath for any inquiries or collaborations. Fill out the contact form or reach out via email or phone.",
  keywords: ["Contact", "Mohamed Muaath Rifath", "inquiries", "collaborations", "email", "phone"],
  openGraph: {
    title: "Contact",
    description: "Get in touch with Mohamed Muaath Rifath for any inquiries or collaborations. Fill out the contact form or reach out via email or phone.",
    images: ["/assets/contact.png"],
    url: "https://muaathrifath.vercel.com/contact",
    type: "website"
  }
};

export default function Contact() {
  return (
    <section className="flex flex-col -z-10          lg:flex-row w-full md:px-8 justify-center md:max-lg:items-center p-4">
      <ContactInfo />
      <ContactForm />
    </section>
  );
}
