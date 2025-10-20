import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">OSAKA</h1>
          <span className="text-sm text-muted-foreground hidden sm:inline">Sushi Delivery</span>
        </div>
        
        <LanguageSwitcher />
      </div>
    </header>
  );
};
