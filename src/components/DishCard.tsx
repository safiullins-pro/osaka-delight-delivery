import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Star } from 'lucide-react';
import { Dish } from '@/contexts/CartContext';
import { formatVND } from '@/lib/utils/format';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface DishCardProps {
  dish: Dish;
}

export const DishCard = ({ dish }: DishCardProps) => {
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();
  const lang = i18n.language as 'ru' | 'en' | 'zh' | 'vi';

  const handleAddToCart = () => {
    addToCart(dish);
    toast.success(`${dish[`name_${lang}`]} ${t('add_to_cart').toLowerCase()}!`);
  };

  return (
    <Card className="bg-card overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish[`name_${lang}`]}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {dish.star && (
          <Badge className="absolute top-3 right-3 bg-gradient-gold text-accent-foreground shadow-lg">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {t('hit_badge')}
          </Badge>
        )}
      </div>

      <CardContent className="p-5">
        <h3 className="text-xl font-bold text-card-foreground mb-2">
          {dish[`name_${lang}`]}
        </h3>

        {dish.composition && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {dish.composition}
          </p>
        )}

        {dish.ingredients && (
          <p className="text-sm text-muted-foreground mb-3 italic">
            {dish.ingredients}
          </p>
        )}

        {(dish.pieces || dish.weight) && (
          <div className="flex gap-3 mb-3 text-sm text-muted-foreground">
            {dish.pieces && <span>{dish.pieces} {t('pieces')}</span>}
            {dish.weight && <span>· {dish.weight}</span>}
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-primary">
            {formatVND(dish.price)}
          </span>

          <Button 
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Plus className="w-4 h-4 mr-1" />
            {t('add_to_cart')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
