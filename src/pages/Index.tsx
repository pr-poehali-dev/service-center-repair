import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingVisible, setTrackingVisible] = useState(false);
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

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
      title: "Ремонт принтеров и МФУ",
      icon: "Printer",
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
      title: "Ремонт смартфонов",
      icon: "Smartphone",
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
      title: "Ремонт телевизоров",
      icon: "Tv",
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
    },
    {
      number: 2,
      title: "Диагностика",
      description:
        "Наш мастер проводит осмотр-диагностику в течение 1 рабочего дня",
      icon: "Search",
    },
    {
      number: 3,
      title: "Согласование",
      description: "Менеджер согласовывает с вами стоимость ремонта",
      icon: "FileCheck",
    },
    {
      number: 4,
      title: "Ремонт",
      description:
        "Производим ремонт от 1 до 3 рабочих дней при наличии запчастей",
      icon: "Wrench",
    },
    {
      number: 5,
      title: "Выдача",
      description: "По окончании ремонта звоним вам и вы забираете изделие",
      icon: "CheckCircle2",
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
    const message = `Заявка с сайта%0A%0AТелефон: ${contactPhone}${contactMessage ? `%0A%0AСообщение: ${contactMessage}` : ''}`;
    window.open(`https://t.me/element5_irk?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[100vw]">
      <Header
        isScrolled={isScrolled}
        onContactClick={() => setContactModalOpen(true)}
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
        contactPhone={contactPhone}
        contactMessage={contactMessage}
        onContactPhoneChange={setContactPhone}
        onContactMessageChange={setContactMessage}
        onContactSubmit={handleContactSubmit}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      </div>
    </div>
  );
};

export default Index;