import React from 'react';
import { Zap, Flower, Gift } from 'lucide-react';
import Reveal from './Reveal';

const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#D4E4A2]">
      <div className="max-w-7xl mx-auto text-center">
        <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl mb-12 text-[#3A4D39]">Kenapa Memilih Hello Spring Florist?</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <Reveal delay={0.3}>
            <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-xl h-full flex flex-col items-center">
                <div className="p-3 bg-amber-50 rounded-full mb-4">
                    <Zap className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#3A4D39]">Pengiriman Cepat</h3>
                <p className="text-sm text-gray-600">Jaminan tiba di hari yang sama untuk pemesanan sebelum pukul 14.00 WIB.</p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-xl h-full flex flex-col items-center">
                <div className="p-3 bg-amber-50 rounded-full mb-4">
                    <Flower className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#3A4D39]">Bunga Segar Berkualitas</h3>
                <p className="text-sm text-gray-600">Bunga dipanen dan dirangkai pada hari yang sama untuk kesegaran maksimal.</p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-xl h-full flex flex-col items-center">
                <div className="p-3 bg-amber-50 rounded-full mb-4">
                    <Gift className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#3A4D39]">Kustomisasi Hadiah</h3>
                <p className="text-sm text-gray-600">Tambahkan cokelat, kartu ucapan, atau boneka ke pesanan Anda.</p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Features;