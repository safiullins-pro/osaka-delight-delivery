import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Send, Instagram, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">OSAKA</h3>
            <p className="text-foreground/80">Sushi Delivery · Nha Trang</p>
            <p className="text-sm text-muted-foreground mt-2">
              {t('delivery_time')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">{t('phone')}</h4>
            <div className="space-y-3">
              <a 
                href="tel:+84983310594"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +84 983 310 594
              </a>
              <p className="flex items-center gap-2 text-foreground/80">
                <MapPin className="w-4 h-4" />
                Oceanus OS 3, Nha Trang
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Social Media</h4>
            <div className="flex gap-3">
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <a 
                  href="https://t.me/Operatorosaka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Telegram
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <a 
                  href="https://instagram.com/osakanha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 OSAKA Sushi Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
