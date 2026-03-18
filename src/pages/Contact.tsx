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
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("Endereço de e-mail inválido").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, "Assunto é obrigatório").max(200),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(2000),
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
    toast.success("Mensagem enviada com sucesso. Responderemos em até 1 dia útil.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <>
      <SiteHeader />
      <main className="container max-w-xl py-12">
        <article>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Fale Conosco</h1>
          <SummaryBlock>
            Entre em contato com a Digital Mil Cores para orçamentos, dúvidas técnicas ou parcerias.
            O tempo de resposta é de até 1 dia útil. Atendimento telefônico disponível de segunda a sexta, das 9h às 18h.
          </SummaryBlock>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" name="name" autoComplete="name" value={form.name} onChange={update("name")} />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Endereço de E-mail</Label>
              <Input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={update("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Telefone (opcional)</Label>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} />
            </div>
            <div>
              <Label htmlFor="subject">Assunto</Label>
              <Input id="subject" name="subject" value={form.subject} onChange={update("subject")} />
              {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" rows={5} value={form.message} onChange={update("message")} />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit">
              Enviar Mensagem
            </Button>
          </form>

          <section aria-labelledby="contact-info" className="mt-12">
            <h2 id="contact-info" className="text-2xl font-semibold mb-4">Outras Formas de Contato</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                <span><strong className="text-primary/80">E-mail:</strong> info@digitalmilcores.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                <span><strong className="text-primary/80">Telefone:</strong> +55 11 9999-0000 (Seg–Sex 9h–18h)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                <span><strong className="text-primary/80">Endereço:</strong> Rua Augusta 1234, São Paulo, SP 01304-001, Brasil</span>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
