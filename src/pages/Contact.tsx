import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent successfully. We'll respond within 1 business day.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <>
      <SiteHeader />
      <main className="container max-w-xl py-12">
        <article>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
          <SummaryBlock>
            Reach Digital Mil Cores for quotes, technical questions, or partnership inquiries.
            Response time is within 1 business day. Phone support available Mon–Fri 9:00–18:00 BRT.
          </SummaryBlock>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" autoComplete="name" value={form.name} onChange={update("name")} />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={update("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" value={form.subject} onChange={update("subject")} />
              {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} value={form.message} onChange={update("message")} />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="bg-accent text-accent-foreground hover:opacity-90">
              Send Message
            </Button>
          </form>

          <section aria-labelledby="contact-info" className="mt-12">
            <h2 id="contact-info" className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
            <ul className="space-y-2 text-foreground list-disc list-inside">
              <li><strong>Email:</strong> info@digitalmilcores.com</li>
              <li><strong>Phone:</strong> +55 11 9999-0000 (Mon–Fri 9:00–18:00 BRT)</li>
              <li><strong>Address:</strong> Rua Augusta 1234, São Paulo, SP 01304-001, Brazil</li>
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
