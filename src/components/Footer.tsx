export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="tel:18170081366" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">电话</span>
            <span className="text-sm">18170081366</span>
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; 2024 山水涧. 版权所有.
          </p>
          <p className="mt-2 text-center text-xs leading-5 text-gray-400">
            地址：徐东欧亚达古玩城，奇石馆特1号
          </p>
        </div>
      </div>
    </footer>
  );
} 