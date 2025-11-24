import React, { useState, useEffect } from 'react';
import { Flower, Sparkles, Sun, Gift, CalendarCheck, Droplets, Leaf } from 'lucide-react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      bgColor: 'bg-amber-400',
      icon: <Sun className="w-8 h-8 mr-4 text-white" />,
      text: "PROMO HARI INI: Diskon 20% untuk semua Tulip!"
    },
    {
      id: 1,
      bgColor: 'bg-[#3A4D39]/90', // Using a dark green close to the primary color
      icon: <Gift className="w-8 h-8 mr-4 text-white" />,
      text: "GRATIS Cokelat Premium untuk Pembelian > Rp 500rb."
    },
    {
      id: 2,
      bgColor: 'bg-gray-700/80',
      icon: <CalendarCheck className="w-8 h-8 mr-4 text-white" />,
      text: "Pesan 7 hari di muka, dapatkan diskon 10% ekstra!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="min-h-[90vh] flex items-center justify-center p-4 sm:p-10 lg:p-20 relative overflow-hidden text-center bg-[#cee2e1]">
      
      {/* --- Static Decorations --- */}
      
      {/* Bunga Besar (Gerbera/Rose) - Kanan Bawah */}
      <div className="static-decoration text-pink-400/60 bottom-[-10%] right-[-10%] sm:right-[5%] w-48 h-48 sm:w-64 sm:h-64">
          <Flower className="w-full h-full rotate-12" />
      </div>

      {/* Kuncup/Bud - Kanan Atas */}
      <div className="static-decoration text-pink-300/80 top-[5%] right-[5%] sm:right-[15%] w-16 h-16 slow-float" style={{animationDelay: '1s', animationDuration: '12s'}}>
          <Droplets className="w-full h-full rotate-45" />
      </div>

      {/* Daun Hijau 1 - Kiri Tengah */}
      <div className="static-decoration text-green-700/60 top-[40%] left-[5%] w-12 h-12 slow-float" style={{animationDelay: '2s', animationDuration: '17s'}}>
          <Leaf className="w-full h-full -rotate-12" />
      </div>

      {/* Bunga Kecil (Rose) - Tengah Kiri Atas */}
      <div className="static-decoration text-white/90 top-[15%] left-[20%] w-20 h-20 slow-float" style={{animationDelay: '3s', animationDuration: '14s'}}>
          <Flower className="w-full h-full -rotate-12" />
      </div>
      
      {/* Daun Hijau 2 - Kanan Tengah */}
      <div className="static-decoration text-green-700/60 top-[50%] right-[10%] w-10 h-10 slow-float" style={{animationDelay: '5s', animationDuration: '16s'}}>
          <Leaf className="w-full h-full rotate-45" />
      </div>
      
      {/* Bunga Kecil (Rose) - Kiri Bawah */}
      <div className="static-decoration text-pink-300/80 bottom-[10%] left-[10%] w-16 h-16 slow-float" style={{animationDelay: '7s', animationDuration: '13s'}}>
          <Flower className="w-full h-full rotate-6" />
      </div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full z-10">
        
        <div className="max-w-xl mx-auto w-full text-center">
            {/* Animated Logo Section */}
            <Reveal>
                <div className="relative inline-block">
                    {/* Floating Flower Decoration */}
                    <div className="flower-decoration -top-5">
                        <Flower className="w-6 h-6" />
                    </div>
                    {/* Floating Sparkle Decoration */}
                    <div className="flower-decoration flower-decoration-delay -top-10 -ml-10">
                        <Sparkles className="w-4 h-4" />
                    </div>

                    <span className="font-serif text-6xl md:text-8xl font-bold text-gray-700/80 inline-block mb-2">H</span>
                    <h1 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 mb-8">HELLO SPRING FLORIST</h1>
                </div>
            </Reveal>

            <Reveal delay={0.2}>
                <p className="text-xl md:text-2xl font-light mb-8 max-w-lg mx-auto text-[#3A4D39]">
                Saya mengirimkan bunga dan hadiah dengan pengiriman ke seluruh negeri.
                </p>
            </Reveal>

            <Reveal delay={0.3}>
                <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Reveal>
        </div>

        {/* Carousel */}
        <Reveal delay={0.4}>
            <div className="w-full max-w-5xl mx-auto h-40 relative rounded-xl shadow-lg overflow-hidden my-8 bg-white">
                <div className="h-full relative">
                    {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        } ${slide.bgColor}`}
                    >
                        {slide.icon}
                        <span className="text-white text-xl font-semibold drop-shadow-md text-center">
                            {slide.text}
                        </span>
                    </div>
                    ))}
                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Hero;