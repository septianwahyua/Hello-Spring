import React from 'react';
import { Instagram, Facebook, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-serif text-2xl font-bold mb-4">HELLO SPRING FLORIST</h4>
          <p className="text-sm text-gray-400">Keindahan yang dikirimkan langsung ke pintu Anda.</p>
        </div>
        
        <div>
          <h5 className="font-semibold mb-4 text-amber-400">Toko</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lokasi Toko</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog & Tips</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-4 text-amber-400">Layanan</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Kebijakan Pengiriman</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cara Pembayaran</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bantuan & FAQ</a></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h5 className="font-semibold mb-4 text-amber-400">Kontak Kami</h5>
          <p className="text-sm text-gray-300 mb-1">Email: halo@hellospring.co.id</p>
          <p className="text-sm text-gray-300">Telp: (021) 123-4567</p>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-gray-400 hover:text-amber-400 transition-colors">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        &copy; 2025 Hello Spring Florist. Semua Hak Cipta Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;