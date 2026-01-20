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
        <div className="absolute top-0 left-0 right-0 h-32" style={{ backgroundColor: '#CB11AB' }}></div>
        
        <div className="relative h-full flex flex-col p-16">
          <div className="mb-16">
            <h1 className="text-6xl font-bold mb-4" style={{ color: '#CB11AB' }}>
              СЕРВИСНЫЙ ЦЕНТР КЛИК
            </h1>
            <div className="w-24 h-2 rounded-full" style={{ backgroundColor: '#CB11AB' }}></div>
          </div>
          
          <p className="text-4xl font-semibold text-gray-800 mb-16">
            Профессиональный ремонт мобильной электроники
          </p>
          
          <div className="space-y-10 flex-1">
            <div className="flex items-start gap-6">
              <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#CB11AB' }}></div>
              <p className="text-3xl text-gray-900 font-medium">Замена экранов на любом смартфоне</p>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#CB11AB' }}></div>
              <p className="text-3xl text-gray-900 font-medium">Ремонт ноутбуков и ПК</p>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#CB11AB' }}></div>
              <p className="text-3xl text-gray-900 font-medium">Ремонт принтеров и МФУ</p>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#CB11AB' }}></div>
              <p className="text-3xl text-gray-900 font-medium">Гарантия на все работы</p>
            </div>
          </div>
          
          <div className="mt-auto pt-8 border-t-4" style={{ borderColor: '#CB11AB' }}>
            <p className="text-5xl font-bold text-center" style={{ color: '#CB11AB' }}>
              КАЧЕСТВО • СКОРОСТЬ • НАДЁЖНОСТЬ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;