import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Mail, Phone, Instagram, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "juros",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "5535991658802";
    const message = `Olá! Gostaria de falar sobre:\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\nÁrea: ${formData.area}\nMensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    
    toast.success("Redirecionando para WhatsApp...");
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      area: "juros",
      message: "",
    });
  };

  return (
    <section id="contato" className="pt-20 pb-6 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-primary p-8 md:p-12 rounded-2xl text-primary-foreground">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Atendimento ao Cliente
            </h2>
            <p className="font-body mb-8">
              Preencha o formulário e receba nosso contato personalizado
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:contato@krepeadvocacia.com.br"
                  className="hover:text-accent transition-colors font-body"
                >
                  contato@krepeadvocacia.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a
                  href="https://wa.me/5535991658802"
                  className="hover:text-accent transition-colors font-body"
                >
                  +55 35 9916-5802
                </a>
              </div>
            </div>

            <div className="mb-12">
              <p className="font-body mb-4">
                Nosso principal propósito é proporcionar qualidade e facilidade com confiança e
                consideração. Com isso, adotamos uma abordagem totalmente digital, possibilitando
                conforto e acessibilidade para todos os clientes.
              </p>
            </div>

            <div className="mb-8">
              <svg viewBox="0 0 200 150" className="w-48 h-auto mx-auto opacity-50">
                <path
                  d="M100 20 L180 70 L170 130 L100 140 L30 130 L20 70 Z"
                  fill="hsl(37, 42%, 59%)"
                  opacity="0.3"
                />
              </svg>
              <p className="text-center text-accent font-accent font-semibold mt-4">
                Atendimento para todo Brasil
              </p>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/5535991658802"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="mailto:contato@krepeadvocacia.com.br"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-[var(--shadow-card)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="border-b-2 border-t-0 border-x-0 border-muted-foreground/30 rounded-none focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Telefone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="border-b-2 border-t-0 border-x-0 border-muted-foreground/30 rounded-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <Input
                  placeholder="E-mail"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="border-b-2 border-t-0 border-x-0 border-muted-foreground/30 rounded-none focus:border-accent"
                />
              </div>

              <div>
                <Label className="text-accent font-accent mb-4 block">
                  Qual Área Você precisa de Ajuda?
                </Label>
                <RadioGroup
                  value={formData.area}
                  onValueChange={(value) =>
                    setFormData({ ...formData, area: value })
                  }
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="juros" id="juros" />
                    <Label htmlFor="juros" className="font-body cursor-pointer">
                      Juros abusivos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="defesas" id="defesas" />
                    <Label htmlFor="defesas" className="font-body cursor-pointer">
                      Defesas do endividado
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fraudes" id="fraudes" />
                    <Label htmlFor="fraudes" className="font-body cursor-pointer">
                      Fraudes e golpes bancários
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="outras" id="outras" />
                    <Label htmlFor="outras" className="font-body cursor-pointer">
                      Outras Áreas
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Textarea
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="border-b-2 border-t-0 border-x-0 border-muted-foreground/30 rounded-none focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 font-accent text-lg hover-scale"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
