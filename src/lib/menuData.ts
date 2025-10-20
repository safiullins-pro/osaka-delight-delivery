import { Dish } from '@/contexts/CartContext';
import philadelphiaImg from '@/assets/philadelphia-salmon.jpg';
import osakaImg from '@/assets/osaka-roll.jpg';
import tokyoImg from '@/assets/tokyo-roll.jpg';
import mojitoImg from '@/assets/mojito.jpg';

export const menuData: Dish[] = [
  // California Rolls
  {
    id: 'philadelphia-salmon',
    name_ru: 'Филадельфия с лососем',
    name_en: 'Philadelphia with Salmon',
    name_zh: '三文鱼费城卷',
    name_vi: 'Philadelphia Cá Hồi',
    composition: 'Лосось, огурец, авокадо, крем-чиз',
    pieces: 8,
    weight: '250 гр',
    price: 140000,
    image: philadelphiaImg,
    category: 'california'
  },
  {
    id: 'osaka-roll',
    name_ru: 'Ролл OSAKA',
    name_en: 'OSAKA Roll',
    name_zh: '大阪卷',
    name_vi: 'Osaka Roll',
    composition: 'Лосось, креветка, крем-чиз, авокадо, огурец, соус спайси',
    pieces: 8,
    weight: '180 гр',
    price: 175000,
    star: true,
    image: osakaImg,
    category: 'california'
  },
  {
    id: 'tokyo-roll',
    name_ru: 'Ролл Токио',
    name_en: 'Tokyo Roll',
    name_zh: '东京卷',
    name_vi: 'Tokyo Roll',
    composition: 'Тунец, лосось, угорь, авокадо, спайси соус',
    pieces: 8,
    weight: '220 гр',
    price: 185000,
    star: true,
    image: tokyoImg,
    category: 'california'
  },
  {
    id: 'california-classic',
    name_ru: 'Калифорния классик',
    name_en: 'California Classic',
    name_zh: '经典加州卷',
    name_vi: 'California Cổ điển',
    composition: 'Краб, авокадо, огурец, икра тобико',
    pieces: 8,
    weight: '200 гр',
    price: 155000,
    image: philadelphiaImg,
    category: 'california'
  },
  
  // Cocktails
  {
    id: 'mojito',
    name_ru: 'Мохито',
    name_en: 'Mojito',
    name_zh: '莫吉托',
    name_vi: 'Mojito',
    ingredients: 'ром, лимон, сахар, мята, сода',
    price: 85000,
    image: mojitoImg,
    category: 'cocktails'
  },
  {
    id: 'passion-mojito',
    name_ru: 'Маракуйя Мохито',
    name_en: 'Passion Fruit Mojito',
    name_zh: '百香果莫吉托',
    name_vi: 'Mojito Chanh Dây',
    ingredients: 'ром, маракуйя, лимон, мята, сода',
    price: 85000,
    image: mojitoImg,
    category: 'cocktails'
  },
  {
    id: 'butterbeer',
    name_ru: 'Сливочное пиво',
    name_en: 'Butterbeer',
    name_zh: '黄油啤酒',
    name_vi: 'Bia Bơ',
    ingredients: 'как в Гарри Поттере ✨',
    price: 85000,
    image: mojitoImg,
    category: 'cocktails'
  }
];

export const categories = [
  { id: 'california', name_ru: 'Калифорнийские роллы', name_en: 'California Rolls', name_zh: '加州卷', name_vi: 'California Rolls' },
  { id: 'cocktails', name_ru: 'Коктейли', name_en: 'Cocktails', name_zh: '鸡尾酒', name_vi: 'Cocktails' },
  { id: 'pizza', name_ru: 'Пицца', name_en: 'Pizza', name_zh: '披萨', name_vi: 'Pizza' },
  { id: 'oysters', name_ru: 'Устрицы', name_en: 'Oysters', name_zh: '生蚝', name_vi: 'Hàu' },
  { id: 'desserts', name_ru: 'Десерты', name_en: 'Desserts', name_zh: '甜点', name_vi: 'Tráng miệng' }
];
