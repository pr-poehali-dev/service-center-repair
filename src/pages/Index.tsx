import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import ContactModal from "@/components/ContactModal";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingVisible, setTrackingVisible] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [routeModalOpen, setRouteModalOpen] = useState(false);

  const handleRouteApp = (app: '2gis' | 'yandex') => {
    const lat = 52.317768;
    const lon = 104.302578;
    
    if (app === '2gis') {
      window.open(`https://2gis.ru/irkutsk/directions/points/%7C${lon}%2C${lat}`, '_blank');
    } else {
      window.open(`https://yandex.ru/maps/?rtext=~${lat},${lon}`, '_blank');
    }
    setRouteModalOpen(false);
  };

  const banners = [
    {
      title: "Ремонт телефонов",
      description: "Замена экранов, батарей, восстановление ПО",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/5532d0d4-1d87-4000-a1c0-68cdd4809a60.jpg",
      icon: "Smartphone",
    },
    {
      title: "Ремонт компьютеров",
      description: "Установка ПО, восстановление данных, замена комплектующих",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/e2304232-baed-489d-8286-ea3241fd4ffe.jpg",
      icon: "Monitor",
    },
    {
      title: "Ремонт ноутбуков",
      description: "Чистка системы охлаждения, замена экранов, клавиатур",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/941f0e48-6e98-460a-9520-c703159ea8cd.jpg",
      icon: "Laptop",
    },
    {
      title: "Ремонт принтеров и МФУ",
      description: "Прочистка головки, замена деталей, продажа расходников",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/8efbf180-1c13-4ac1-9884-51ef2b4975a1.jpg",
      icon: "Printer",
    },
    {
      title: "Ремонт телевизоров",
      description: "Замена матрицы, подсветки, ремонт блоков питания",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/d7797c40-b470-467d-a4a0-db322cb17de4.jpg",
      icon: "Tv",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const repairs = [
    {
      title: "Ремонт смартфонов",
      icon: "Smartphone",
      imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=smartphone&backgroundColor=f97316",
      items: [
        "Замена экранов на любой смартфон",
        "Электрический ремонт любой сложности",
        "Восстановление ПО. Разблокировка",
        "Замена разъемов зарядки, наушников",
        "Замена сим коннекторов, корпусов, задних крышек",
        "Замена аккумуляторных батарей",
        "Установка защитных стекол и пленок",
        "Продажа кабелей, чехлов, зарядных устройств",
      ],
    },
    {
      title: "Ремонт компьютеров и ноутбуков",
      icon: "Laptop",
      imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=laptop&backgroundColor=f97316",
      items: [
        "Установка программ",
        "Восстановление данных с поврежденных носителей",
        "Восстановление данных с USB Flash, HDD, SSD",
        "Ремонт системы охлаждения",
        "Замена экрана, клавиатуры, жесткого диска",
        "Замена аккумуляторных батарей",
        "Замена и ремонт корпусных деталей",
        "Электрический ремонт любой сложности",
        "Продажа зарядных устройств, мышек, сумок",
      ],
    },
    {
      title: "Ремонт принтеров и МФУ",
      icon: "Printer",
      imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=printer&backgroundColor=f97316",
      items: [
        "Устранение дефектов печати",
        "Устранение замятий бумаги",
        "Прочистка печатающей головки",
        "Замена печатающей головки",
        "Замена неисправных элементов и деталей",
        "Замена расходных элементов",
        "Продажа принтеров и МФУ с гарантией до 90 дней",
        "Продажа расходных материалов",
      ],
    },
    {
      title: "Ремонт телевизоров",
      icon: "Tv",
      imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=tv&backgroundColor=f97316",
      items: [
        "Замена матрицы, ремонт матрицы",
        "Замена подсветки",
        "Ремонт материнских плат",
        "Ремонт блоков питания",
        "Электрический ремонт любой сложности",
      ],
    },
  ];

  const workflow = [
    {
      number: 1,
      title: "Приносите оборудование",
      description: "Вы приносите к нам ваше неисправное оборудование",
      icon: "Package",
      imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=step1&backgroundColor=fed7aa",
    },
    {
      number: 2,
      title: "Диагностика",
      description:
        "Наш мастер проводит осмотр-диагностику в течение 1 рабочего дня",
      icon: "Search",
      imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=step2&backgroundColor=fed7aa",
    },
    {
      number: 3,
      title: "Согласование",
      description: "Менеджер согласовывает с вами стоимость ремонта",
      icon: "FileCheck",
      imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=step3&backgroundColor=fed7aa",
    },
    {
      number: 4,
      title: "Ремонт",
      description:
        "Производим ремонт от 1 до 3 рабочих дней при наличии запчастей",
      icon: "Wrench",
      imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=step4&backgroundColor=fed7aa",
    },
    {
      number: 5,
      title: "Выдача",
      description: "По окончании ремонта звоним вам и вы забираете изделие",
      icon: "CheckCircle2",
      imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=step5&backgroundColor=fed7aa",
    },
  ];

  const brands = [
    { name: "Samsung", popular: true },
    { name: "Apple", popular: true },
    { name: "Xiaomi", popular: true },
    { name: "Huawei", popular: true },
    { name: "Infinix", popular: false },
    { name: "Realme", popular: false },
    { name: "Tecno", popular: false },
    { name: "LG", popular: false },
    { name: "Haier", popular: false },
    { name: "BBK", popular: false },
  ];

  const equipment = [
    {
      name: "Паяльные станции",
      description:
        "Профессиональное оборудование для микропайки компонентов: TermoPro ИК-650,  Sugon T26 C210, Sugon 8620DX Pro ",
      icon: "Flame",
    },
    {
      name: "Ультразвуковая ванна",
      description: "Для глубокой очистки плат и компонентов",
      icon: "Droplets",
    },
    {
      name: "Программаторы",
      description:
        "Современные программаторы для восстановления ПО. Программно аппаратный комплекс PC-3000 Flash + HDD+SSD. Программаторы Z3x, Octopus, Phoenix, авторизации брендов Samsung, Xiaomi, Huawei. Программаторы SPI Flash/NAND. Borneo Schematics, MaAnt",
      icon: "Cpu",
    },
    {
      name: "Микроскопы",
      description: "Для работы с микросхемами и мелкими компонентами",
      icon: "Eye",
    },
    {
      name: "Сепараторы, ламинаторы, автоклавы",
      description:
        "Для безопасной замены стекол и дисплеев. FORWARD RMB-5Max+, лазерный станок Qianli SU8",
      icon: "Layers",
    },
    {
      name: "Тестовое оборудование",
      description: "Мультиметры, осциллографы, тепловизоры для диагностики.",
      icon: "Activity",
    },
  ];

  const reviews = [
    {
      name: "Александр И.",
      rating: 5,
      text: "Отремонтировали iPhone за 2 часа! Заменили экран и батарею. Работает отлично, цена адекватная. Рекомендую!",
      date: "3 дня назад",
    },
    {
      name: "Елена К.",
      rating: 5,
      text: "Восстановили данные с флешки, которую другие не смогли починить. Профессионалы своего дела!",
      date: "неделю назад",
    },
    {
      name: "Дмитрий М.",
      rating: 5,
      text: "Чистка ноутбука + установка Windows. Все быстро, качественно, за разумные деньги. Спасибо!",
      date: "2 недели назад",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTrackOrderClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Заявка с сайта%0A%0AИмя: ${contactName}%0AТелефон: ${contactPhone}${contactMessage ? `%0A%0AСообщение: ${contactMessage}` : ''}`;
    window.open(`https://t.me/element5_irk?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[100vw]">
      <Header
        isScrolled={isScrolled}
        onContactClick={() => setContactModalOpen(true)}
        onRouteClick={() => setRouteModalOpen(true)}
      />
      <div style={{ paddingTop: '72px' }}>
        <HeroSection
        banners={banners}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
        onScrollToSection={scrollToSection}
      />

      <MainContent
        repairs={repairs}
        workflow={workflow}
        brands={brands}
        equipment={equipment}
        reviews={reviews}
        orderNumber={orderNumber}
        trackingVisible={trackingVisible}
        contactName={contactName}
        contactPhone={contactPhone}
        contactMessage={contactMessage}
        onContactNameChange={setContactName}
        onContactPhoneChange={setContactPhone}
        onContactMessageChange={setContactMessage}
        onContactSubmit={handleContactSubmit}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {routeModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setRouteModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Выберите приложение
              </h3>
              <p className="text-gray-600">Построить маршрут в карте</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleRouteApp('2gis')}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl border-2 border-green-200 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="MapPin" className="text-white" size={28} />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">2GIS</div>
                  <div className="text-sm text-gray-600">Открыть в 2ГИС</div>
                </div>
              </button>

              <button
                onClick={() => handleRouteApp('yandex')}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 rounded-xl border-2 border-red-200 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Map" className="text-white" size={28} />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Яндекс Карты</div>
                  <div className="text-sm text-gray-600">Открыть в Яндекс Картах</div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setRouteModalOpen(false)}
              className="mt-6 w-full py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setContactModalOpen(true)}
        style={{
          position: "fixed",
          bottom: "100px",
          right: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#22c55e",
          boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          border: "none",
          cursor: "pointer",
          zIndex: 40,
        }}
      >
        <Icon name="Phone" size={24} className="text-white" />
      </button>
      </div>
    </div>
  );
};

export default Index;