import { useTranslation } from 'react-i18next';
import { ChefHat, Leaf, Truck, Gift } from 'lucide-react';

const badges = [
  { icon: ChefHat, key: 'badge_chef' },
  { icon: Leaf, key: 'badge_fresh' },
  { icon: Truck, key: 'badge_delivery' },
  { icon: Gift, key: 'badge_gift' }
];

export const TrustBadges = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-card-foreground font-medium">
                  {t(badge.key)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
