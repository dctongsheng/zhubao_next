'use client';

import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const featuredProducts = [
  {
    name: '琥珀蜜蜡',
    description: '精选天然琥珀蜜蜡，色泽温润，品质上乘',
    image: '/images/amber.jpg',
  },
  {
    name: '文玩木串',
    description: '小叶紫檀、黄花梨等名贵木材，工艺精湛',
    image: '/images/rosewood.jpg',
  },
  {
    name: '水晶猛犸牙',
    description: '天然水晶与猛犸牙制品，独特稀有',
    image: '/images/crystal.jpg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-amber-900 to-amber-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <AnimatedSection>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
              >
                山水涧
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-gray-100"
              >
                专业经营琥珀、蜜蜡、松石配饰、文玩木串、水晶猛犸牙手串等各类文玩饰品
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex items-center gap-x-6"
              >
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div id="products" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-amber-600"
            >
              精选产品
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              匠心之作
            </motion.p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-amber-600"
            >
              产品系列
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              精选文玩饰品
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: '琥珀蜜蜡',
                  description: '精选天然琥珀蜜蜡，色泽温润，品质上乘',
                },
                {
                  name: '文玩木串',
                  description: '小叶紫檀、黄花梨等名贵木材，工艺精湛',
                },
                {
                  name: '水晶猛犸牙',
                  description: '天然水晶与猛犸牙制品，独特稀有',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">联系我们</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  欢迎光临山水涧，我们期待为您提供最优质的服务
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2"
              >
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">地址</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    徐东欧亚达古玩城，奇石馆特1号
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">电话</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    18170081366
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
