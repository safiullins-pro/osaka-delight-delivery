import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Award, Star, Leaf } from 'lucide-react';
import chefImage from '@/assets/chef-alexander.jpg';

export const Chef = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chef Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={chefImage}
                alt="Александр Щиров"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Chef Info */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('meet_chef')}
            </h2>
            
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-primary">
                Александр Щиров
              </h3>
              <p className="text-2xl text-accent font-semibold">
                {t('brand_chef')} OSAKA
              </p>
            </div>

            <blockquote className="text-lg italic text-foreground/80 border-l-4 border-primary pl-6 py-4">
              "{t('chef_message')}"
            </blockquote>

            <div 
              className="text-accent font-script text-xl"
              dangerouslySetInnerHTML={{ __html: t('chef_signature') }}
            />

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="outline" className="px-4 py-2 text-base border-primary text-primary">
                <Award className="w-4 h-4 mr-2" />
                {t('experience_badge')}
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-base border-accent text-accent">
                <Star className="w-4 h-4 mr-2" />
                {t('signature_recipes')}
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-base border-foreground/50 text-foreground">
                <Leaf className="w-4 h-4 mr-2" />
                {t('natural_ingredients')}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
