import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      // Hero
      hero_headline: "Изысканные роллы от шефа с 10+ лет опыта",
      hero_subheadline: "Свежие натуральные ингредиенты. Доставка 30-60 минут",
      cta_menu: "Смотреть меню",
      cta_order: "Заказать сейчас",
      
      // Trust Badges
      badge_chef: "Шеф с 10+ лет опыта",
      badge_fresh: "Только свежие ингредиенты",
      badge_delivery: "Доставка по всему Нячангу",
      badge_gift: "Подарок при заказе от 500K VND",
      
      // Menu
      menu_title: "Наше меню",
      category_california: "Калифорнийские роллы",
      category_cocktails: "Коктейли",
      category_pizza: "Пицца",
      category_oysters: "Устрицы",
      category_desserts: "Десерты",
      
      add_to_cart: "Добавить в корзину",
      pieces: "шт",
      weight: "гр",
      hit_badge: "ХИТ",
      
      // Cart
      cart_title: "Ваш заказ",
      cart_empty: "Корзина пуста",
      delivery_zone: "Зона доставки",
      zone_north: "Север",
      zone_far_north: "Дальний север",
      zone_center: "Центр",
      zone_south: "Юг",
      floor_delivery: "Подъем на этаж",
      
      subtotal: "Сумма",
      delivery: "Доставка",
      total: "Итого",
      checkout: "Оформить заказ",
      
      gift_alert: "🎁 Подарок Яки краб в подарок!",
      
      // Chef
      meet_chef: "Познакомьтесь с нашим шефом",
      brand_chef: "Бренд-шеф",
      chef_message: "Дорогие клиенты! Мы надеемся, что наши роллы подарят вам много приятных моментов. Пусть каждый кусочек будет для вас настоящим наслаждением!",
      chef_signature: "С наилучшими пожеланиями,<br/>бренд-шеф Щиров А.",
      experience_badge: "10+ лет опыта",
      signature_recipes: "Авторские рецепты",
      natural_ingredients: "Натуральные ингредиенты",
      
      // Location
      find_us: "Где нас найти",
      address: "Адрес",
      hours: "Часы работы",
      daily: "Ежедневно",
      phone: "Телефон",
      get_directions: "Проложить маршрут",
      landmark: "Ориентир: Задняя часть здания Oceanus OS 3",
      
      // Delivery Info
      delivery_info: "Информация о доставке",
      delivery_time: "Время доставки: 30-60 минут",
    }
  },
  en: {
    translation: {
      hero_headline: "Exquisite Rolls from Chef with 10+ Years Experience",
      hero_subheadline: "Fresh Natural Ingredients. Delivery 30-60 minutes",
      cta_menu: "View Menu",
      cta_order: "Order Now",
      
      badge_chef: "Chef with 10+ years experience",
      badge_fresh: "Only fresh ingredients",
      badge_delivery: "Delivery across Nha Trang",
      badge_gift: "Gift for orders over 500K VND",
      
      menu_title: "Our Menu",
      category_california: "California Rolls",
      category_cocktails: "Cocktails",
      category_pizza: "Pizza",
      category_oysters: "Oysters",
      category_desserts: "Desserts",
      
      add_to_cart: "Add to Cart",
      pieces: "pcs",
      weight: "g",
      hit_badge: "HIT",
      
      cart_title: "Your Order",
      cart_empty: "Cart is empty",
      delivery_zone: "Delivery Zone",
      zone_north: "North",
      zone_far_north: "Far North",
      zone_center: "Center",
      zone_south: "South",
      floor_delivery: "Floor delivery",
      
      subtotal: "Subtotal",
      delivery: "Delivery",
      total: "Total",
      checkout: "Checkout",
      
      gift_alert: "🎁 Yaki crab as a gift!",
      
      meet_chef: "Meet Our Chef",
      brand_chef: "Brand Chef",
      chef_message: "Dear customers! We hope our rolls will give you many pleasant moments. May each bite be a true delight!",
      chef_signature: "Best regards,<br/>Brand Chef Shirov A.",
      experience_badge: "10+ years experience",
      signature_recipes: "Signature recipes",
      natural_ingredients: "Natural ingredients",
      
      find_us: "Find Us",
      address: "Address",
      hours: "Hours",
      daily: "Daily",
      phone: "Phone",
      get_directions: "Get Directions",
      landmark: "Landmark: Back of Oceanus OS 3 building",
      
      delivery_info: "Delivery Information",
      delivery_time: "Delivery time: 30-60 minutes",
    }
  },
  zh: {
    translation: {
      hero_headline: "拥有10年以上经验的厨师制作的精致寿司卷",
      hero_subheadline: "新鲜天然食材。30-60分钟送达",
      cta_menu: "查看菜单",
      cta_order: "立即订购",
      
      badge_chef: "10年以上经验的厨师",
      badge_fresh: "仅使用新鲜食材",
      badge_delivery: "芽庄全城配送",
      badge_gift: "订单满500K越南盾送礼物",
      
      menu_title: "我们的菜单",
      category_california: "加州卷",
      category_cocktails: "鸡尾酒",
      category_pizza: "披萨",
      category_oysters: "生蚝",
      category_desserts: "甜点",
      
      add_to_cart: "加入购物车",
      pieces: "个",
      weight: "克",
      hit_badge: "热门",
      
      cart_title: "您的订单",
      cart_empty: "购物车是空的",
      delivery_zone: "配送区域",
      zone_north: "北部",
      zone_far_north: "远北部",
      zone_center: "市中心",
      zone_south: "南部",
      floor_delivery: "楼层配送",
      
      subtotal: "小计",
      delivery: "配送",
      total: "总计",
      checkout: "结账",
      
      gift_alert: "🎁 赠送烤蟹！",
      
      meet_chef: "认识我们的厨师",
      brand_chef: "品牌厨师",
      chef_message: "亲爱的顾客！我们希望我们的寿司卷能给您带来许多愉快的时刻。愿每一口都是真正的享受！",
      chef_signature: "致以最诚挚的问候，<br/>品牌厨师希罗夫 A.",
      experience_badge: "10年以上经验",
      signature_recipes: "招牌食谱",
      natural_ingredients: "天然食材",
      
      find_us: "找到我们",
      address: "地址",
      hours: "营业时间",
      daily: "每天",
      phone: "电话",
      get_directions: "获取路线",
      landmark: "地标：Oceanus OS 3大楼后面",
      
      delivery_info: "配送信息",
      delivery_time: "配送时间：30-60分钟",
    }
  },
  vi: {
    translation: {
      hero_headline: "Sushi cuộn tinh tế từ đầu bếp có hơn 10 năm kinh nghiệm",
      hero_subheadline: "Nguyên liệu tự nhiên tươi ngon. Giao hàng 30-60 phút",
      cta_menu: "Xem Thực đơn",
      cta_order: "Đặt ngay",
      
      badge_chef: "Đầu bếp hơn 10 năm kinh nghiệm",
      badge_fresh: "Chỉ dùng nguyên liệu tươi",
      badge_delivery: "Giao hàng toàn Nha Trang",
      badge_gift: "Quà tặng cho đơn từ 500K VND",
      
      menu_title: "Thực đơn",
      category_california: "California Rolls",
      category_cocktails: "Cocktails",
      category_pizza: "Pizza",
      category_oysters: "Hàu",
      category_desserts: "Tráng miệng",
      
      add_to_cart: "Thêm vào giỏ",
      pieces: "miếng",
      weight: "g",
      hit_badge: "HOT",
      
      cart_title: "Đơn hàng của bạn",
      cart_empty: "Giỏ hàng trống",
      delivery_zone: "Khu vực giao hàng",
      zone_north: "Bắc",
      zone_far_north: "Xa Bắc",
      zone_center: "Trung tâm",
      zone_south: "Nam",
      floor_delivery: "Giao lên tầng",
      
      subtotal: "Tạm tính",
      delivery: "Giao hàng",
      total: "Tổng cộng",
      checkout: "Thanh toán",
      
      gift_alert: "🎁 Tặng Yaki crab!",
      
      meet_chef: "Gặp gỡ đầu bếp",
      brand_chef: "Đầu bếp thương hiệu",
      chef_message: "Quý khách thân mến! Chúng tôi hy vọng sushi của chúng tôi sẽ mang đến cho bạn nhiều khoảnh khắc thú vị. Chúc mỗi miếng đều là niềm vui thực sự!",
      chef_signature: "Trân trọng,<br/>Đầu bếp Shirov A.",
      experience_badge: "Hơn 10 năm kinh nghiệm",
      signature_recipes: "Công thức đặc trưng",
      natural_ingredients: "Nguyên liệu tự nhiên",
      
      find_us: "Tìm chúng tôi",
      address: "Địa chỉ",
      hours: "Giờ mở cửa",
      daily: "Hàng ngày",
      phone: "Điện thoại",
      get_directions: "Chỉ đường",
      landmark: "Địa điểm: Phía sau tòa nhà Oceanus OS 3",
      
      delivery_info: "Thông tin giao hàng",
      delivery_time: "Thời gian giao: 30-60 phút",
    }
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || navigator.language.split('-')[0] || 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
