
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    setOrderPlaced(true);
    toast({
      title: "Order Placed!",
      description: "Thank you for your order. We'll contact you within 24 hours."
    });
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="text-6xl mb-6">✅</div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Order Confirmed!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for choosing TIEM Energy. We've received your order and will contact you within 24 hours to arrange installation.
                </p>
                <div className="space-y-3">
                  <Button asChild>
                    <a href="/products">Continue Shopping</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/">Return Home</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Checkout</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete your solar energy purchase
          </p>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Order</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 XXX XXX XXXX"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Installation Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address for installation"
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Payment Method</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button
                        type="button"
                        variant={formData.paymentMethod === 'card' ? 'default' : 'outline'}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
                        className="p-4 h-auto"
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">💳</div>
                          <div>Card Payment</div>
                        </div>
                      </Button>
                      <Button
                        type="button"
                        variant={formData.paymentMethod === 'bank' ? 'default' : 'outline'}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'bank' }))}
                        className="p-4 h-auto"
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">🏦</div>
                          <div>Bank Transfer</div>
                        </div>
                      </Button>
                      <Button
                        type="button"
                        variant={formData.paymentMethod === 'crypto' ? 'default' : 'outline'}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'crypto' }))}
                        className="p-4 h-auto"
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">₿</div>
                          <div>Cryptocurrency</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={!formData.paymentMethod}>
                    Place Order
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
