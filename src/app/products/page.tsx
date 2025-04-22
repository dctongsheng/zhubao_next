'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const products = [
  {
    name: '琥珀蜜蜡',
    description: '天然琥珀蜜蜡，色泽温润，品质上乘',
    image: '/images/amber.jpg',
  },
  {
    name: '小叶紫檀',
    description: '名贵木材，工艺精湛，纹理优美',
    image: '/images/rosewood.jpg',
  },
  {
    name: '水晶手串',
    description: '天然水晶，晶莹剔透，能量充沛',
    image: '/images/crystal.jpg',
  },
  {
    name: '猛犸牙制品',
    description: '独特稀有，工艺精湛，收藏价值高',
    image: '/images/mammoth.jpg',
  },
  {
    name: '松石配饰',
    description: '天然松石，色泽独特，工艺精美',
    image: '/images/turquoise.jpg',
  },
  {
    name: '菩提素串',
    description: '传统工艺，寓意吉祥，佩戴舒适',
    image: '/images/bodhi.jpg',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">产品展示</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <AnimatedSection key={product.name} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div className="relative h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 