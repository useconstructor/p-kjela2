'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Menu,
  X,
  Star,
  Clock,
  Leaf,
  Heart,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Snowflake,
  TreePine,
  Utensils,
  ShoppingCart,
  Check,
  ArrowRight,
  Smartphone,
  ChefHat,
  Truck,
  ChevronLeft,
  Award,
} from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Locations', href: '#locations' },
    { label: 'Rewards', href: '#pricing' },
  ]

  const stats = [
    { number: '847', label: 'Orders Completed Today', icon: ShoppingCart },
    { number: '4.8/5', label: 'Star Rating', icon: Star },
    { number: '8 min', label: 'Average Delivery', icon: Clock },
    { number: '100%', label: 'Ingredient Transparency', icon: Leaf },
    { number: '50,000+', label: 'Loyalty Members', icon: Heart },
  ]

  const steps = [
    {
      number: 1,
      title: 'Choose Your Bowl',
      description: 'Pick proteins, grains, and toppings from our curated menu',
      icon: Smartphone,
    },
    {
      number: 2,
      title: 'Watch It Prepare',
      description: 'Our team handcrafts your meal to order',
      icon: ChefHat,
    },
    {
      number: 3,
      title: 'Pick Up or Delivery',
      description: 'Ready in 8 minutes. Eat it fresh anywhere.',
      icon: Truck,
    },
  ]

  const menuItems = [
    {
      name: 'Teriyaki Chicken Bowl',
      description: 'Organic brown rice, shredded purple cabbage, edamame, crispy wonton, sesame ginger dressing',
      price: '$11.99',
    },
    {
      name: 'Mediterranean Falafel Wrap',
      description: 'Warm pita, crispy falafel, cucumber, tomato, pickled onion, tahini drizzle',
      price: '$10.99',
    },
    {
      name: 'Southwest Grilled Fish Taco',
      description: 'Grilled mahi mahi, lime crema, fresh pico, shredded lettuce, corn tortillas',
      price: '$12.99',
    },
    {
      name: 'Green Energy Smoothie Bowl',
      description: 'Acai base, spinach, banana, granola, chia seeds, local honey',
      price: '$9.99',
    },
  ]

  const features = [
    {
      title: 'Never Frozen',
      description: 'Every ingredient is fresh daily. No freezers, no shortcuts.',
      icon: Snowflake,
    },
    {
      title: 'Responsibly Sourced',
      description: 'We partner with local farms and fair trade suppliers within 200 miles.',
      icon: TreePine,
    },
    {
      title: 'Customizable for You',
      description: 'Allergies, diets, preferences — build your meal exactly how you want it.',
      icon: Utensils,
    },
  ]

  const testimonials = [
    {
      quote: 'I used to spend 45 minutes at chain restaurants. FlavorFast changed my lunch breaks completely.',
      name: 'S. Chen',
      role: 'Marketing Director',
      initials: 'SC',
    },
    {
      quote: 'The ingredients are genuinely fresh. My kids actually ask to go back.',
      name: 'M. Rodriguez',
      role: 'Parent, Chicago',
      initials: 'MR',
    },
    {
      quote: 'We franchise with FlavorFast because the unit economics are incredible and customers are loyal.',
      name: 'J. Park',
      role: 'Franchise Owner, Boston',
      initials: 'JP',
    },
  ]

  const pricingTiers = [
    {
      name: 'Quick Bite',
      price: '$8.99',
      subtitle: 'per meal',
      features: [
        '1 protein, 2 toppings',
        'Standard grain',
        'App access',
        '1 reward point per dollar',
      ],
      popular: false,
    },
    {
      name: 'Regular Favorite',
      price: '$11.99',
      subtitle: 'per meal',
      features: [
        '2 proteins, unlimited toppings',
        'Premium grains',
        'Priority pickup',
        '2 reward points per dollar',
        'Free drink upgrade monthly',
      ],
      popular: true,
    },
    {
      name: 'Premium Club',
      price: '$14.99',
      subtitle: 'per meal',
      features: [
        'Seasonal premium proteins',
        'Unlimited everything',
        'White glove pickup',
        '3 reward points per dollar',
        'Exclusive menu items',
        'Free delivery',
      ],
      popular: false,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState),
        }
      )
      if (res.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-montserrat)' }}>FlavorFast</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#4A4A4A] hover:text-[#FF6B35] transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="outline" asChild>
                <a href="#locations">Find Location</a>
              </Button>
              <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white" asChild>
                <a href="#menu">Order Now</a>
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#E5E5E5] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`block py-3 text-[#4A4A4A] hover:text-[#FF6B35] font-medium transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 60}ms` : '0ms' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <a href="#locations" onClick={() => setMobileMenuOpen(false)}>Find Location</a>
              </Button>
              <Button className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white" asChild>
                <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Order Now</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Split Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Quality Meals.
                <br />
                <span className="text-[#FF6B35]">Lightning Fast.</span>
              </h1>
              <p className="mt-6 text-lg text-[#4A4A4A] max-w-lg">
                Farm to table bowls and sandwiches ready in minutes. Fresh ingredients, bold flavors, zero wait.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8" asChild>
                  <a href="#menu">
                    Order Now <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#locations">Find a Location</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['AB', 'CD', 'EF'].map((initials, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[#F5F5F5] border-2 border-white flex items-center justify-center text-sm font-semibold text-[#4A4A4A]"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#4A4A4A]">Loved by 50,000+ customers</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-[#FF6B35]/10 rounded-full blur-3xl" />
                <Image
                  src="/images/hero.png"
                  alt="Fresh grain bowl with crispy chicken, avocado, and microgreens"
                  fill
                  className="object-contain relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#F5F5F5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#FF6B35]" />
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B35]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-[#4A4A4A] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-montserrat)' }}>
              How It Works
            </h2>
            <p className="mt-4 text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Three simple steps to your perfect meal
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <Card key={step.number} className="relative border-none shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#FF6B35] rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {step.number}
                  </div>
                  <step.icon className="w-12 h-12 mx-auto mb-4 text-[#4A4A4A] group-hover:text-[#FF6B35] transition-colors" />
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {step.title}
                  </h3>
                  <p className="text-[#4A4A4A]">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section id="menu" className="py-20 bg-[#F5F5F5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Signature Meals
            </h2>
            <p className="mt-4 text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Fresh, bold, and ready in minutes
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <Card key={item.name} className="border-none shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-40 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/5 flex items-center justify-center">
                  <ChefHat className="w-16 h-16 text-[#FF6B35]/60 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#4A4A4A] mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#FF6B35]">{item.price}</span>
                    <Button size="sm" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white" asChild>
                      <a href="#cta">
                        <ShoppingCart className="w-4 h-4 mr-1" /> Add
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white" asChild>
              <a href="#cta">
                View Full Menu <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Why FlavorFast
            </h2>
            <p className="mt-4 text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Quality you can taste, speed you can count on
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden bg-[#1A1A1A] p-8 lg:p-12 flex flex-col justify-end min-h-[400px]">
              <Image
                src="/images/feature.png"
                alt="Fresh ingredients being prepared"
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10">
                <Badge className="bg-[#FF6B35] text-white mb-4">Our Promise</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Fresh. Fast. Flavorful.
                </h3>
                <p className="text-white/80 max-w-md">
                  We believe speed and quality can coexist. Every ingredient is sourced fresh daily, prepared to order, and in your hands in under 10 minutes.
                </p>
              </div>
            </div>
            {features.map((feature, idx) => (
              <Card key={idx} className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className={`w-7 h-7 ${idx === 0 ? 'text-blue-500' : idx === 1 ? 'text-green-500' : 'text-[#FF6B35]'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-[#4A4A4A]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
              What Our Customers Say
            </h2>
          </div>
          <div className="relative">
            <div className="bg-[#2A2A2A] rounded-3xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 fill-[#FF6B35] text-[#FF6B35]" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeTestimonial].initials}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{testimonials[activeTestimonial].name}</div>
                  <div className="text-white/60 text-sm">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-[#2A2A2A] hover:bg-[#FF6B35] transition-colors flex items-center justify-center text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === activeTestimonial ? 'bg-[#FF6B35]' : 'bg-[#4A4A4A]'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[#2A2A2A] hover:bg-[#FF6B35] transition-colors flex items-center justify-center text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Choose Your Plan
            </h2>
            <p className="mt-4 text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Every meal earns rewards. Pick the tier that fits your appetite.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative border-none shadow-lg overflow-hidden ${
                  tier.popular ? 'bg-[#1A1A1A] text-white ring-4 ring-[#FF6B35]' : 'bg-white'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#FF6B35] text-white">
                      <Award className="w-3 h-3 mr-1" /> Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3
                    className={`text-xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-[#1A1A1A]'}`}
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {tier.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#FF6B35]">{tier.price}</span>
                    <span className={`text-sm ml-2 ${tier.popular ? 'text-white/60' : 'text-[#4A4A4A]'}`}>
                      {tier.subtitle}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                        <span className={tier.popular ? 'text-white/80' : 'text-[#4A4A4A]'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? 'bg-[#FF6B35] hover:bg-[#E55A2B] text-white'
                        : 'bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white'
                    }`}
                    asChild
                  >
                    <a href="#cta">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Map */}
      <section id="locations" className="py-20 bg-[#F5F5F5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Find a Location Near You
              </h2>
              <p className="text-lg text-[#4A4A4A] mb-8">
                With locations across major cities, fresh food is never far away. Find your nearest FlavorFast and taste the difference today.
              </p>
              <div className="space-y-4">
                {['Boston', 'Chicago', 'New York', 'Los Angeles'].map((city) => (
                  <div key={city} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">{city}</div>
                      <div className="text-sm text-[#4A4A4A]">Multiple locations available</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#4A4A4A] ml-auto" />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <iframe
                src="https://maps.google.com/maps?q=Fast+Casual+Restaurant+Boston&output=embed"
                className="w-full h-[400px] lg:h-[500px]"
                allowFullScreen
                loading="lazy"
                title="FlavorFast locations map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Full */}
      <section id="cta" className="py-20 bg-[#FF6B35] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Ready to Taste the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join over 50,000 happy customers who have made FlavorFast their go to for fast, fresh, flavorful meals.
          </p>
          {formStatus === 'success' ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#FF6B35]" />
              </div>
              <p className="text-xl font-semibold text-white">Message sent successfully!</p>
              <p className="text-white/80 mt-2">We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 max-w-md mx-auto shadow-2xl">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Get in Touch
              </h3>
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="border-[#E5E5E5]"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="border-[#E5E5E5]"
                />
                <Textarea
                  placeholder="Your message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={3}
                  className="border-[#E5E5E5]"
                />
              </div>
              {formStatus === 'error' && (
                <p className="text-red-500 text-sm mt-4">Something went wrong. Please try again.</p>
              )}
              <Button
                type="submit"
                className="w-full mt-6 bg-[#FF6B35] hover:bg-[#E55A2B] text-white"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer Full */}
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl" style={{ fontFamily: 'var(--font-montserrat)' }}>FlavorFast</span>
              </div>
              <p className="text-white/60 mb-6">
                Quality meals, lightning fast. Fresh ingredients prepared to order in under 10 minutes.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>Menu</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#menu" className="hover:text-[#FF6B35] transition-colors">Bowls</a></li>
                <li><a href="#menu" className="hover:text-[#FF6B35] transition-colors">Wraps</a></li>
                <li><a href="#menu" className="hover:text-[#FF6B35] transition-colors">Salads</a></li>
                <li><a href="#menu" className="hover:text-[#FF6B35] transition-colors">Smoothies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>Company</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#how-it-works" className="hover:text-[#FF6B35] transition-colors">About Us</a></li>
                <li><a href="#locations" className="hover:text-[#FF6B35] transition-colors">Locations</a></li>
                <li><a href="#cta" className="hover:text-[#FF6B35] transition-colors">Franchise</a></li>
                <li><a href="#cta" className="hover:text-[#FF6B35] transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>Contact</h4>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF6B35]" />
                  <a href="mailto:hello@flavorfastfood.com" className="hover:text-[#FF6B35] transition-colors">
                    hello@flavorfastfood.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FF6B35]" />
                  <span>Contact via form</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#FF6B35] mt-1" />
                  <span>Multiple locations nationwide</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} FlavorFast. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/40 text-sm">
              <a href="#cta" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#cta" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
