'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">联系我们</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              欢迎光临山水涧，我们期待为您提供最优质的服务。如有任何问题，请随时联系我们。
            </p>
          </AnimatedSection>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">店铺信息</h3>
                <dl className="mt-4 space-y-4 text-base leading-7 text-gray-600">
                  <div>
                    <dt className="sr-only">地址</dt>
                    <dd>徐东欧亚达古玩城，奇石馆特1号</dd>
                  </div>
                  <div>
                    <dt className="sr-only">电话</dt>
                    <dd>18170081366</dd>
                  </div>
                </dl>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-base font-semibold leading-7 text-gray-900">营业时间</h3>
                <dl className="mt-4 space-y-4 text-base leading-7 text-gray-600">
                  <div>
                    <dt className="sr-only">营业时间</dt>
                    <dd>周一至周日：9:00 - 18:00</dd>
                  </div>
                </dl>
                
                <h3 className="mt-8 text-base font-semibold leading-7 text-gray-900">交通指南</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  乘坐地铁4号线至徐东站下车，步行约10分钟即可到达。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 