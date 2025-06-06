
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingCart, Search } from 'lucide-react';

const Header = () => {
  const [cartItems, setCartItems] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">TIEM Energy</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>

            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <span className="text-muted-foreground">Call:</span>
              <a href="tel:+2348063840230" className="text-primary font-medium hover:underline">
                +234 806 384 0230
              </a>
            </div>

            {/* Mobile menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <div className="w-4 h-4 flex flex-col justify-center space-y-1">
                    <div className="w-full h-0.5 bg-current"></div>
                    <div className="w-full h-0.5 bg-current"></div>
                    <div className="w-full h-0.5 bg-current"></div>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Contact us:</p>
                    <a href="tel:+2348063840230" className="text-primary font-medium">
                      +234 806 384 0230
                    </a>
                    <br />
                    <a href="tel:+2348165539671" className="text-primary font-medium">
                      +234 816 553 9671
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
