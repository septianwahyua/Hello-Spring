import React from 'react';
import Reveal from './Reveal';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sentuhan Romantis",
    description: "Mawar merah klasik dan baby's breath.",
    price: "Rp 450.000",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    name: "Keceriaan Ulang Tahun",
    description: "Lily putih dan Tulip cerah.",
    price: "Rp 380.000",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    name: "Dukungan Simpati",
    description: "Krisan putih dan Caspea elegan.",
    price: "Rp 850.000",
    image: "https://picsum.photos/600/400?random=3"
  }
];

const Collections: React.FC = () => {
  return (
    <section id="koleksi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <Reveal>
            <h2 className="font-serif text-4xl text-center mb-4 text-[#3A4D39]">Koleksi Bunga Terbaru</h2>
        </Reveal>
        
        <Reveal delay={0.2}>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Temukan rangkaian bunga segar pilihan dari desainer kami. Cocok untuk setiap momen spesial.
            </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={0.3 + index * 0.1}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden">
                    <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 text-[#3A4D39]">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                  <p className="text-xl font-bold text-amber-600">{product.price}</p>
                  <button className="mt-4 w-full py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition duration-300 shadow-md font-medium">
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;