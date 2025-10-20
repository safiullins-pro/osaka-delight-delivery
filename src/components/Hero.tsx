import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import heroImage from '@/assets/hero-sushi.jpg';

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCart = () => {
    document.getElementById('cart-trigger')?.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="OSAKA Sushi" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground drop-shadow-2xl">
          {t('hero_headline')}
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-foreground/90 max-w-3xl mx-auto drop-shadow-lg">
          {t('hero_subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToMenu}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-elegant"
          >
            {t('cta_menu')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToCart}
            className="bg-card/10 backdrop-blur-sm border-card/50 text-foreground hover:bg-card/20 text-lg px-8 py-6"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {t('cta_order')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
