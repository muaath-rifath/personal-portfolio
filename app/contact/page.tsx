import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row w-full md:px-8 justify-center md:max-lg:items-center p-4">
      <ContactInfo />
      <ContactForm />
    </section>
  );
}
