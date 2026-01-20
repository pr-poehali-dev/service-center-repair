import Icon from "@/components/ui/icon";

const ServiceBanner = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden animate-in zoom-in duration-300">
        <div className="relative h-[500px]">
          <img
            src="https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/e695656a-6ab0-4e64-b92b-b53f8d1b66fe.jpg"
            alt="Сервисный центр"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">
                Сервисный центр <span className="text-orange-400">Клик</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 font-medium">
                Профессиональный ремонт мобильной электроники
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl w-full">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                    <Icon name="Smartphone" className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 mb-1">Замена экранов</h3>
                    <p className="text-sm text-gray-600">На любом смартфоне</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                    <Icon name="Laptop" className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 mb-1">Ремонт ноутбуков и ПК</h3>
                    <p className="text-sm text-gray-600">Любой сложности</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 rounded-full p-2 flex-shrink-0">
                    <Icon name="Printer" className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 mb-1">Ремонт принтеров и МФУ</h3>
                    <p className="text-sm text-gray-600">Быстро и качественно</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                    <Icon name="ShieldCheck" className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 mb-1">Гарантия на все работы</h3>
                    <p className="text-sm text-gray-600">Уверенность в качестве</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
