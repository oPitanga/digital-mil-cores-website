import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, ShoppingBag, Music2 } from "lucide-react";

interface SocialCTABarProps {
  heading?: string;
  subheading?: string;
  whatsapp?: string;
  instagram?: string;
  shopee?: string;
  tiktok?: string;
  className?: string;
}

const SocialCTABar = ({
  heading = "Pronto para começar?",
  subheading = "Compre pela Shopee, TikTok Shop ou fale com a gente diretamente.",
  whatsapp = "https://wa.me/5511999990000",
  instagram = "https://instagram.com/digitalmilcores",
  shopee = "https://shopee.com.br/digitalmilcores",
  tiktok = "https://www.tiktok.com/@digitalmilcores",
  className = "",
}: SocialCTABarProps) => (
  <section className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/8 border border-primary/15 p-8 md:p-14 text-center ${className}`}>
    {/* Background decoration */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
    </div>

    <div className="relative z-10">
      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-2xl md:text-3xl font-bold text-foreground mb-2"
      >
        {heading}
      </h2>
      <p className="text-muted-foreground mb-10 max-w-lg mx-auto">{subheading}</p>

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
        {/* Shopee */}
        <Button
          asChild
          size="lg"
          className="gap-2 w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 shadow-md shadow-orange-500/30 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 border-0"
        >
          <a href={shopee} target="_blank" rel="noopener noreferrer">
            <ShoppingBag className="h-5 w-5" />
            Comprar na Shopee
          </a>
        </Button>

        {/* TikTok Shop */}
        <Button
          asChild
          size="lg"
          className="gap-2 w-full sm:w-auto bg-gradient-to-r from-[#010101] to-[#333] text-white shadow-md shadow-black/25 hover:shadow-lg hover:shadow-black/35 hover:-translate-y-0.5 border-0"
        >
          <a href={tiktok} target="_blank" rel="noopener noreferrer">
            <Music2 className="h-5 w-5" />
            TikTok Shopping
          </a>
        </Button>

        {/* Instagram */}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="gap-2 w-full sm:w-auto border-pink-400/60 text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-pink-500/25"
        >
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
            Instagram
          </a>
        </Button>

        {/* WhatsApp */}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="gap-2 w-full sm:w-auto border-green-400/60 text-green-700 hover:bg-green-500 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-green-500/25"
        >
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default SocialCTABar;
