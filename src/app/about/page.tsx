'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-50 opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              关于<span className="text-amber-600">山水涧</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              山水涧成立于2010年，是一家专注于文玩饰品销售的专业店铺。我们致力于为客户提供最优质的琥珀、蜜蜡、松石配饰、文玩木串等各类文玩产品。
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                name: '专业团队',
                description: '我们拥有一支专业的团队，对各类文玩产品有着深入的研究和丰富的经验。',
                icon: '👨‍🎨',
              },
              {
                name: '品质保证',
                description: '所有产品都经过严格筛选，确保品质上乘，让客户买得放心。',
                icon: '✨',
              },
              {
                name: '诚信经营',
                description: '我们始终坚持诚信经营，为客户提供最优质的服务和最合理的价格。',
                icon: '🤝',
              },
            ].map((feature) => (
              <AnimatedSection 
                key={feature.name} 
                className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-100 to-amber-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Store Photos Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">门店实景</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              欢迎光临我们的实体店铺，感受文玩艺术的独特魅力
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: '/images/store/1.jpg',
                alt: '山水涧门店外观',
                title: '典雅门面',
                description: '传统与现代的完美结合',
              },
              {
                src: '/images/store/2.jpg',
                alt: '店内展示区',
                title: '精品展示',
                description: '精心布置的展示空间',
              },
              {
                src: '/images/store/3.jpg',
                alt: '产品陈列区',
                title: '匠心之作',
                description: '每一件都是艺术精品',
              },
            ].map((image, index) => (
              <AnimatedSection 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-gray-100"
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                    <p className="mt-1 text-sm opacity-90">{image.description}</p>
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