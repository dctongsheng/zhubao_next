'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const productCategories = [
  {
    id: 'amber',
    name: '琥珀蜜蜡',
    description: '天然琥珀蜜蜡，色泽温润，品质上乘',
    products: [
      {
        name: '琥珀手串',
        description: '天然琥珀，色泽金黄，质地温润',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074a9c64c0a.jpg?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: '蜜蜡吊坠',
        description: '天然蜜蜡，纹理自然，光泽柔和',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074a9c64c0a.jpg?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: '琥珀戒指',
        description: '琥珀镶嵌，工艺精湛，佩戴舒适',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074db5dd314.jpg?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'rosewood',
    name: '小叶紫檀',
    description: '名贵木材，工艺精湛，纹理优美',
    products: [
      {
        name: '紫檀手串',
        description: '小叶紫檀，油性十足，纹理清晰',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074dbe8a96e.jpg?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: '紫檀佛珠',
        description: '精选紫檀，颗颗饱满，色泽深沉',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074db5dd314.jpg?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'crystal',
    name: '水晶手串',
    description: '天然水晶，晶莹剔透，能量充沛',
    products: [
      {
        name: '紫水晶手串',
        description: '天然紫水晶，色泽浓郁，能量强大',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074db5dd314.jpg?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: '白水晶手串',
        description: '天然白水晶，晶莹剔透，净化能量',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074db5dd314.jpg?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'mammoth',
    name: '猛犸牙制品',
    description: '独特稀有，工艺精湛，收藏价值高',
    products: [
      {
        name: '猛犸牙手串',
        description: '猛犸牙材质，纹理独特，收藏佳品',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074db5dd314.jpg?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: '猛犸牙吊坠',
        description: '猛犸牙雕刻，工艺精湛，寓意吉祥',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074db5dd314.jpg?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'turquoise',
    name: '松石配饰',
    description: '天然松石，色泽独特，工艺精美',
    products: [
      {
        name: '松石手串',
        description: '天然松石，色泽独特，纹理自然',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074dae68c18.jpg?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: '松石吊坠',
        description: '松石镶嵌，工艺精湛，佩戴优雅',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074dac3bfb0.jpg?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'bodhi',
    name: '菩提素串',
    description: '传统工艺，寓意吉祥，佩戴舒适',
    products: [
      {
        name: '星月菩提',
        description: '星月菩提，颗颗饱满，寓意吉祥',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074db510b0a.jpg?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: '金刚菩提',
        description: '金刚菩提，纹理清晰，寓意智慧',
        image: 'https://lsky.95271111.xyz/i/2025/04/22/68074dbe8a96e.jpg?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0]);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">产品展示</h2>

          <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <nav className="space-y-1">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory.id === category.id
                        ? 'bg-amber-100 text-amber-900'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                  </button>
                ))}
              </nav>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {selectedCategory.products.map((product) => (
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
                    <div className="mt-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 