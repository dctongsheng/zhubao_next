'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">关于山水涧</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              山水涧成立于2010年，是一家专注于文玩饰品销售的专业店铺。我们致力于为客户提供最优质的琥珀、蜜蜡、松石配饰、文玩木串等各类文玩产品。
            </p>
          </AnimatedSection>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: '专业团队',
                  description: '我们拥有一支专业的团队，对各类文玩产品有着深入的研究和丰富的经验。',
                },
                {
                  name: '品质保证',
                  description: '所有产品都经过严格筛选，确保品质上乘，让客户买得放心。',
                },
                {
                  name: '诚信经营',
                  description: '我们始终坚持诚信经营，为客户提供最优质的服务和最合理的价格。',
                },
              ].map((feature) => (
                <AnimatedSection key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </AnimatedSection>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 