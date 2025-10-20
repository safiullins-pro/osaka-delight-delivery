import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Menu } from '@/components/Menu';
import { Chef } from '@/components/Chef';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';
import { ShoppingCart } from '@/components/ShoppingCart';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <TrustBadges />
        <Menu />
        <Chef />
        <Location />
        <Footer />
      </main>
      <ShoppingCart />
    </div>
  );
};

export default Index;
