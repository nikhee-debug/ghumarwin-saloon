/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Palette, 
  Heart, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
}

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'haircut',
    title: 'Haircuts & Styling',
    description: 'Precision cuts tailored to your face shape and personal style. From classic bobs to modern fades.',
    icon: <Scissors className="w-6 h-6" />,
    price: 'Starts at ₹300'
  },
  {
    id: 'spa',
    title: 'Hair Spa & Treatments',
    description: 'Deep conditioning and scalp treatments to restore health, shine, and vitality to your locks.',
    icon: <Sparkles className="w-6 h-6" />,
    price: 'Starts at ₹800'
  },
  {
    id: 'color',
    title: 'Hair Coloring',
    description: 'Expert colorists specializing in balayage, highlights, and full transformations using premium products.',
    icon: <Palette className="w-6 h-6" />,
    price: 'Starts at ₹1500'
  },
  {
    id: 'bridal',
    title: 'Bridal Makeup',
    description: 'Exquisite bridal transformations for your special day. We create timeless looks that glow.',
    icon: <Heart className="w-6 h-6" />,
    price: 'Custom Packages'
  },
  {
    id: 'skin',
    title: 'Skin Care & Facials',
    description: 'Rejuvenating facials and skin treatments designed for your specific skin type and concerns.',
    icon: <Sparkles className="w-6 h-6" />,
    price: 'Starts at ₹1000'
  },
  {
    id: 'nails',
    title: 'Nail Services',
    description: 'Manicures, pedicures, and nail art that add the perfect finishing touch to your look.',
    icon: <Sparkles className="w-6 h-6" />,
    price: 'Starts at ₹500'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "The best salon in Ghumarwin! I got my bridal makeup done here and everyone loved it. Highly recommended for their professional service.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    text: "Excellent haircut and very professional staff. The ambiance is premium and they use high-quality products. My go-to place now.",
    rating: 5
  },
  {
    id: 3,
    name: "Anjali Thakur",
    text: "Had a wonderful hair spa experience. The staff is very polite and the results were amazing. My hair feels so soft and healthy.",
    rating: 5
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800"
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-white">
            HAIR<span className="text-gold-500">MOVERS</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80 -mt-1">Beauty Salon</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/80 hover:text-gold-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-gold-500 hover:bg-gold-600 text-black px-6 py-2 rounded-full text-sm font-bold transition-all uppercase tracking-widest"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 py-8 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-white/90 hover:text-gold-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking" 
              className="bg-gold-500 text-black text-center py-3 rounded-full font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Salon Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-gold-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Welcome to HairMovers
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-tight mb-6">
            Premium Hair & <br />
            <span className="gold-text-gradient italic">Beauty Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            Elevate your style with the finest grooming and beauty services in Ghumarwin. 
            Where luxury meets expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking" 
              className="gold-gradient text-black px-10 py-4 rounded-full font-bold text-center hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a 
              href="#services" 
              className="border border-white/30 hover:border-gold-500 text-white px-10 py-4 rounded-full font-bold text-center transition-colors backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full border border-gold-500/30 backdrop-blur-md bg-black/20"
      >
        <span className="text-gold-500 font-serif text-3xl font-bold">10+</span>
        <span className="text-[10px] text-white/60 uppercase tracking-widest text-center">Years of<br/>Expertise</span>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
              alt="Salon Expertise" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold-100 rounded-2xl -z-0 hidden md:block"></div>
          <div className="absolute -top-8 -left-8 border-2 border-gold-500 w-32 h-32 rounded-2xl -z-0 hidden md:block"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-gold-600 uppercase tracking-[0.3em] mb-4">Our Story</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Crafting Beauty with <br />
            <span className="italic text-gold-600">Passion & Precision</span>
          </h3>
          <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
            Located in the heart of Ghumarwin, HairMovers Beauty Salon has been a sanctuary of style and relaxation for over a decade. We believe that beauty is an art, and every client is our canvas.
          </p>
          <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
            Our team of expert stylists and therapists are dedicated to providing a premium experience using only the highest quality international brands. Whether it's a simple trim or a complete bridal transformation, we ensure you leave feeling confident and beautiful.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-gold-500 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold">Expert Stylists</h4>
                <p className="text-sm text-zinc-500">Certified professionals with years of experience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-gold-500 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold">Premium Products</h4>
                <p className="text-sm text-zinc-500">We use only top-tier international brands.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-sm font-bold text-gold-600 uppercase tracking-[0.3em] mb-4">What We Do</h2>
        <h3 className="text-4xl md:text-5xl font-serif mb-4">Our Signature Services</h3>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          From head to toe, we offer a comprehensive range of beauty and grooming services designed to make you look and feel your absolute best.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="luxury-card p-8 group"
          >
            <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
              {service.icon}
            </div>
            <h4 className="text-2xl font-serif mb-3">{service.title}</h4>
            <p className="text-zinc-500 mb-6 leading-relaxed">
              {service.description}
            </p>
            <div className="flex justify-between items-center pt-6 border-t border-zinc-100">
              <span className="font-bold text-gold-700">{service.price}</span>
              <a href="#booking" className="text-zinc-400 hover:text-gold-600 flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors">
                Book <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-[0.3em] mb-4">Visual Journey</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Salon Gallery</h3>
          <p className="text-white/50 mt-4">
            Take a look at our recent transformations, bridal masterpieces, and the luxurious ambiance of our salon in Ghumarwin.
          </p>
        </div>
        <a href="#" className="border-b border-gold-500 text-gold-500 pb-1 font-bold uppercase tracking-widest text-sm hover:text-gold-400 hover:border-gold-400 transition-all">
          View All Photos
        </a>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {GALLERY_IMAGES.map((img, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-xl aspect-square ${index === 0 ? 'col-span-2 md:col-span-1 md:row-span-2 md:aspect-auto' : ''}`}
          >
            <img 
              src={img} 
              alt={`Gallery ${index}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-sm font-bold text-gold-600 uppercase tracking-[0.3em] mb-4">Reviews</h2>
        <h3 className="text-4xl md:text-5xl font-serif">What Our Clients Say</h3>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 italic">
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="text-zinc-600 mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center font-bold text-gold-700">
                {t.name[0]}
              </div>
              <span className="font-bold text-zinc-900 not-italic">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert('Thank you! We will contact you shortly to confirm your appointment.');
  };

  const openWhatsApp = () => {
    const message = `Hello HairMovers, I would like to book an appointment for ${formData.service || 'a service'}.`;
    window.open(`https://wa.me/919816000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="booking" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-gold-600 uppercase tracking-[0.3em] mb-4">Reservations</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Book Your Experience</h3>
          <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
            Ready for a transformation? Fill out the form or reach out to us directly via WhatsApp for instant booking and inquiries.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">Instant WhatsApp Booking</h4>
                <p className="text-sm text-zinc-500">Get quick replies for your queries.</p>
              </div>
            </div>
            <button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-green-200"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl shadow-2xl text-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50">Select Service</label>
              <select 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="" className="bg-zinc-900">Choose a service</option>
                {SERVICES.map(s => (
                  <option key={s.id} value={s.title} className="bg-zinc-900">{s.title}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Preferred Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Preferred Time</label>
                <input 
                  type="time" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full gold-gradient text-black py-4 rounded-lg font-bold uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-10">
          <div>
            <h3 className="text-3xl font-serif mb-6">Visit Us</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-zinc-500">Main Bazaar, Ghumarwin,<br />Bilaspur, Himachal Pradesh 174021</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-gold-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Contact</h4>
                  <p className="text-zinc-500">+91 98160 00000</p>
                  <p className="text-zinc-500">info@hairmovers.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-gold-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Opening Hours</h4>
                  <p className="text-zinc-500">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-zinc-500">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-400 hover:text-gold-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-400 hover:text-gold-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl h-[450px] border-4 border-white">
          {/* Mock Google Map Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13636.568160408542!2d76.7024222!3d31.4377778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905399999999999%3A0x9999999999999999!2sGhumarwin%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1710580000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <a href="#" className="flex flex-col mb-6">
            <span className="text-3xl font-serif font-bold tracking-tighter">
              HAIR<span className="text-gold-500">MOVERS</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80 -mt-1">Beauty Salon</span>
          </a>
          <p className="text-white/50 max-w-sm leading-relaxed">
            The leading luxury beauty destination in Ghumarwin. We are committed to excellence in beauty, grooming, and customer care.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold-500">Quick Links</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><a href="#" className="hover:text-gold-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-gold-500 transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
            <li><a href="#gallery" className="hover:text-gold-500 transition-colors">Gallery</a></li>
            <li><a href="#booking" className="hover:text-gold-500 transition-colors">Book Now</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold-500">Services</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li>Hair Styling</li>
            <li>Bridal Makeup</li>
            <li>Skin Care</li>
            <li>Nail Art</li>
            <li>Grooming</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-white/40 text-xs uppercase tracking-widest">
        <p>© 2026 HairMovers Beauty Salon. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      href="https://wa.me/919816000000"
      target="_blank"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-green-600 hover:scale-110 transition-all"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
        Online
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
