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

  const handleRouteApp = (app: "2gis" | "yandex") => {
    const lat = 52.317768;
    const lon = 104.302578;

    if (app === "2gis") {
      // Попытка открыть приложение 2GIS
      const deepLink = `dgis://2gis.ru/routeSearch/rsType/car/to/${lon},${lat}`;
      window.location.href = deepLink;

      // Если приложение не открылось, через 1.5 сек открываем веб-версию
      setTimeout(() => {
        window.open(`https://2gis.ru/irkutsk?m=${lon},${lat}`, "_blank");
      }, 1500);
    } else {
      window.open(`https://yandex.ru/maps/?rtext=~${lat},${lon}`, "_blank");
    }
    setRouteModalOpen(false);
  };

  const banners = [
    {
      title: "Замена экрана на любом смартфоне",
      description:
        "Используем оригинальные запчасти или аналоги самого высокого качества",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/0a5594fb-a578-4a23-bbba-3195d9aa15f5.jpg",
      icon: "Smartphone",
    },
    {
      title: "Ремонт компьютеров",
      description:
        "Установка ПО, восстановление данных, замена комплектующих. Техническое обслуживание.",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/7a5023e9-82b3-497a-9cf7-4e69b5c30cee.jpg",
      icon: "Monitor",
    },
    {
      title: "Ремонт ноутбуков любой сложности",
      description:
        "Чистка системы охлаждения, замена экрана, клавиатуры. Ремонт после другого сервисного центра.",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/e4b5f5c4-93d7-4ccf-b783-b5d0ecc3bbf2.jpg",
      icon: "Laptop",
    },
    {
      title: "Ремонт принтеров и МФУ",
      description: "Профессиональное восстановление печатающих головок Epson",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/015b32b0-0f45-4368-8228-220a972a6bac.jpg",
      icon: "Printer",
    },
    {
      title: "Ремонт телевизоров всех марок",
      description: "Замена матрицы, подсветки, ремонт блоков питания",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/a084f4fe-5907-4182-930d-8b7f5bf0fa59.jpg",
      icon: "Tv",
    },
  ];

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
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/0a5594fb-a578-4a23-bbba-3195d9aa15f5.jpg",
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
      type: "banner",
      text: "А также мы продаем защитные стекла и пленки, зарядные устройства и кабели.",
    },
    {
      title: "Ремонт компьютеров и ноутбуков",
      icon: "Laptop",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/e4b5f5c4-93d7-4ccf-b783-b5d0ecc3bbf2.jpg",
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
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/015b32b0-0f45-4368-8228-220a972a6bac.jpg",
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
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/a084f4fe-5907-4182-930d-8b7f5bf0fa59.jpg",
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
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/c37eb601-9e58-4caa-8f76-14c5204da4e8.jpg",
    },
    {
      number: 2,
      title: "Диагностика",
      description:
        "Наш мастер проводит осмотр-диагностику в течение 1 рабочего дня",
      icon: "Search",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/de1c44bc-9446-4ed7-8fb5-cf354aa130cf.jpg",
    },
    {
      number: 3,
      title: "Согласование",
      description: "Менеджер согласовывает с вами стоимость ремонта",
      icon: "FileCheck",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/9981a73a-0be8-479f-b612-011b7fc79c79.jpg",
    },
    {
      number: 4,
      title: "Ремонт",
      description:
        "Производим ремонт от 1 до 3 рабочих дней при наличии запчастей",
      icon: "Wrench",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/ae76337d-d2c2-4dbb-8944-2f4a9ebf6eca.jpg",
    },
    {
      number: 5,
      title: "Выдача",
      description: "По окончании ремонта звоним вам и вы забираете изделие",
      icon: "CheckCircle2",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/ff64a915-70fb-435a-86d2-9b7a3b58117c.jpg",
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
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/af12b6f1-e420-40ca-b184-302d704edbd8.jpg",
    },
    {
      name: "Ультразвуковая ванна",
      description: "Для глубокой очистки плат и компонентов",
      icon: "Droplets",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/3c21d922-5b9f-4675-bc04-01fdc82d1bcb.jpg",
    },
    {
      name: "Программаторы",
      description:
        "Современные программаторы для восстановления ПО. Программно аппаратный комплекс PC-3000 Flash + HDD+SSD. Программаторы Z3x, Octopus, Phoenix, авторизации брендов Samsung, Xiaomi, Huawei. Программаторы SPI Flash/NAND. Borneo Schematics, MaAnt",
      icon: "Cpu",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/95a09ddf-5d57-4844-8117-81551b047a90.jpg",
    },
    {
      name: "Микроскопы",
      description: "Для работы с микросхемами и мелкими компонентами",
      icon: "Eye",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/3a40ac89-b13b-436e-8425-eb6fb73d30a7.jpg",
    },
    {
      name: "Сепараторы, ламинаторы, автоклавы",
      description:
        "Для безопасной замены стекол и дисплеев. FORWARD RMB-5Max+, лазерный станок Qianli SU8",
      icon: "Layers",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/c8f299f3-971a-4489-84fa-e3f16c9fa431.jpg",
    },
    {
      name: "Тестовое оборудование",
      description: "Мультиметры, осциллографы, тепловизоры для диагностики.",
      icon: "Activity",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/9cc8e27c-65af-4fa3-a14b-eab384d595d2.jpg",
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
    const message = `Заявка с сайта%0A%0AИмя: ${contactName}%0AТелефон: ${contactPhone}${contactMessage ? `%0A%0AСообщение: ${contactMessage}` : ""}`;
    window.open(`https://t.me/element5_irk?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[100vw]">
      <Header
        isScrolled={isScrolled}
        onContactClick={() => setContactModalOpen(true)}
        onRouteClick={() => setRouteModalOpen(true)}
      />
      <div
        className="fixed top-[72px] left-0 right-0 z-40 bg-orange-600 text-white text-center font-semibold uppercase"
        style={{ padding: "9.6px 0", fontSize: "12px" }}
      >
        Профессиональный ремонт электроники в Иркутске
      </div>
      <div style={{ paddingTop: "110px" }}>
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
          onRouteClick={() => setRouteModalOpen(true)}
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
                  onClick={() => handleRouteApp("2gis")}
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
                  onClick={() => handleRouteApp("yandex")}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 rounded-xl border-2 border-red-200 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Map" className="text-white" size={28} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      Яндекс Карты
                    </div>
                    <div className="text-sm text-gray-600">
                      Открыть в Яндекс Картах
                    </div>
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
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: "#22c55e",
            boxShadow:
              "0 0 0 4px rgba(34, 197, 94, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)",
            animation: "ripple-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            border: "none",
            cursor: "pointer",
            zIndex: 40,
          }}
        >
          <span className="text-white text-base font-bold">клик</span>
        </button>
      </div>
    </div>
  );
};

export default Index;
