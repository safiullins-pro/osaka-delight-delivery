import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DishCard } from './DishCard';
import { menuData, categories } from '@/lib/menuData';

export const Menu = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('california');
  const lang = i18n.language as 'ru' | 'en' | 'zh' | 'vi';

  const filteredDishes = menuData.filter(dish => dish.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          {t('menu_title')}
        </h2>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto p-0">
            {categories.map(category => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="bg-card data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg shadow-card data-[state=active]:shadow-elegant transition-all"
              >
                {category[`name_${lang}`]}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDishes.map(dish => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
