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
    toast.success("Mensagem enviada com sucesso! Responderemos em até 1 dia útil. 😊");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <>
      <SiteHeader />
      <main className="container max-w-2xl py-12">
        <article>
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">👋</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Fale Conosco</h1>
            <p className="text-muted-foreground font-medium">Adoramos ouvir de você! Nossa equipe responde em até 1 dia útil.</p>
          </div>

          <SummaryBlock>
            Entre em contato com a Digital Mil Cores para orçamentos, dúvidas técnicas ou parcerias.
            Atendimento telefônico disponível de segunda a sexta, das 9h às 18h.
          </SummaryBlock>

          <div className="bg-white rounded-3xl border border-orange-100 shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="font-bold text-foreground">Nome Completo</Label>
                  <Input
                    id="name" name="name" autoComplete="name" value={form.name} onChange={update("name")}
                    className="mt-1.5 rounded-xl border-orange-200 focus:border-primary focus:ring-primary/20"
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1 font-medium">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="font-bold text-foreground">Endereço de E-mail</Label>
                  <Input
                    id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={update("email")}
                    className="mt-1.5 rounded-xl border-orange-200 focus:border-primary focus:ring-primary/20"
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1 font-medium">{errors.email}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="phone" className="font-bold text-foreground">Telefone <span className="font-normal text-muted-foreground">(opcional)</span></Label>
                <Input
                  id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update("phone")}
                  className="mt-1.5 rounded-xl border-orange-200 focus:border-primary focus:ring-primary/20"
                  placeholder="+55 11 99999-9999"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="font-bold text-foreground">Assunto</Label>
                <Input
                  id="subject" name="subject" value={form.subject} onChange={update("subject")}
                  className="mt-1.5 rounded-xl border-orange-200 focus:border-primary focus:ring-primary/20"
                  placeholder="Ex: Orçamento para fotolivro"
                />
                {errors.subject && <p className="text-sm text-destructive mt-1 font-medium">{errors.subject}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="font-bold text-foreground">Mensagem</Label>
                <Textarea
                  id="message" name="message" rows={5} value={form.message} onChange={update("message")}
                  className="mt-1.5 rounded-xl border-orange-200 focus:border-primary focus:ring-primary/20 resize-none"
                  placeholder="Conte-nos como podemos ajudar você..."
                />
                {errors.message && <p className="text-sm text-destructive mt-1 font-medium">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-primary text-white font-bold py-3 text-sm shadow-md hover:bg-primary/90 transition-all"
              >
                📨 Enviar Mensagem
              </Button>
            </form>
          </div>

          <section aria-labelledby="contact-info" className="mt-10">
            <h2 id="contact-info" className="text-xl font-bold mb-5 text-foreground">📍 Outras Formas de Contato</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { emoji: "📧", label: "E-mail", value: "info@digitalmilcores.com" },
                { emoji: "📞", label: "Telefone", value: "+55 11 9999-0000" },
                { emoji: "📍", label: "Endereço", value: "Rua Augusta 1234, São Paulo, SP" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl border border-orange-100 p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
