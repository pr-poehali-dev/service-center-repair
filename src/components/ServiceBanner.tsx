const ServiceBanner = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div 
        className="bg-white shadow-2xl animate-in zoom-in duration-300 relative overflow-hidden"
        style={{
          width: '210mm',
          height: '297mm',
          maxWidth: '90vw',
          maxHeight: '90vh'
        }}
      >
        <img
          src="https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/e695656a-6ab0-4e64-b92b-b53f8d1b66fe.jpg"
          alt="Фон сервисного центра"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center p-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Сервисный центр <span className="text-orange-600">Клик</span>
          </h1>
          
          <p className="text-3xl font-semibold text-gray-800 mb-12">
            Профессиональный ремонт мобильной электроники
          </p>
          
          <div className="space-y-6 text-2xl text-gray-700 max-w-2xl">
            <p className="leading-relaxed">Замена экранов на любом смартфоне</p>
            <p className="leading-relaxed">Ремонт ноутбуков и ПК</p>
            <p className="leading-relaxed">Ремонт принтеров и МФУ</p>
            <p className="leading-relaxed font-semibold text-orange-600">Гарантия на все работы</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;