import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Navigation, Info } from 'lucide-react';

export const Location = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-card-foreground">
          {t('find_us')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Info */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">{t('address')}</h3>
                    <p className="text-muted-foreground">
                      Oceanus OS 3<br />
                      Задняя часть здания<br />
                      Nha Trang, Vietnam
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">{t('hours')}</h3>
                    <p className="text-2xl font-bold text-primary">12:00 - 00:00</p>
                    <p className="text-muted-foreground">{t('daily')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">{t('phone')}</h3>
                    <a 
                      href="tel:+84983310594"
                      className="text-xl font-semibold text-primary hover:underline"
                    >
                      +84 983 310 594
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              asChild 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a 
                href="https://maps.app.goo.gl/7SDWSQUbVtxtb3YQ6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Navigation className="mr-2 h-5 w-5" />
                {t('get_directions')}
              </a>
            </Button>
          </div>

          {/* Google Maps */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.7!2d109.19!3d12.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE1JzAwLjAiTiAxMDnCsDExJzI0LjAiRQ!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Oceanus OS 3</span>
            </div>

            <Card className="mt-4 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    {t('landmark')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
