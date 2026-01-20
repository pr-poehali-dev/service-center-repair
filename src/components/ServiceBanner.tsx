const ServiceBanner = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div 
        className="bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 shadow-2xl animate-in zoom-in duration-300 relative overflow-hidden"
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
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center p-12">
          <h1 className="text-7xl font-black text-yellow-300 mb-12 uppercase tracking-tight" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.3)' }}>
            СЕРВИСНЫЙ ЦЕНТР КЛИК
          </h1>
          
          <p className="text-4xl font-bold text-white mb-16 uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ МОБИЛЬНОЙ ЭЛЕКТРОНИКИ
          </p>
          
          <div className="space-y-8 text-3xl text-yellow-300 font-bold uppercase max-w-3xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            <p className="leading-tight">✓ ЗАМЕНА ЭКРАНОВ НА ЛЮБОМ СМАРТФОНЕ</p>
            <p className="leading-tight">✓ РЕМОНТ НОУТБУКОВ И ПК</p>
            <p className="leading-tight">✓ РЕМОНТ ПРИНТЕРОВ И МФУ</p>
            <p className="leading-tight text-5xl text-white mt-12">⭐ ГАРАНТИЯ НА ВСЕ РАБОТЫ ⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;