import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingVisible, setTrackingVisible] = useState(false);
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const banners = [
    {
      title: "Ремонт телефонов",
      description: "Замена экранов, батарей, восстановление ПО",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/2691e083-2fa2-411f-98ce-299105ca247c.jpg",
      icon: "Smartphone",
    },
    {
      title: "Ремонт компьютеров",
      description: "Установка ПО, восстановление данных, замена комплектующих",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/218a914f-77f6-4c7b-9e0a-b80d80d0c11b.jpg",
      icon: "Monitor",
    },
    {
      title: "Ремонт ноутбуков",
      description: "Чистка системы охлаждения, замена экранов, клавиатур",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/12718556-35ce-4712-b107-cfaaa47f29b7.jpg",
      icon: "Laptop",
    },
    {
      title: "Ремонт принтеров и МФУ",
      description: "Прочистка головки, замена деталей, продажа расходников",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/0444682b-2440-4411-8575-91d0a9cfc4b2.jpg",
      icon: "Printer",
    },
    {
      title: "Ремонт телевизоров",
      description: "Замена матрицы, подсветки, ремонт блоков питания",
      image:
        "https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/71c70a93-ac6c-4eef-9dff-6597a6a8ed1b.jpg",
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

  const trackOrder = () => {
    if (orderNumber.trim()) {
      setTrackingVisible(true);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:89245401717@mail.ru?subject=Заявка с сайта&body=Телефон: ${contactPhone}%0A%0AСообщение: ${contactMessage}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "gap-4" : "flex-col lg:flex-row gap-4"}`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className={`bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${isScrolled ? "h-12 w-12" : "h-16 w-16"}`}
                >
                  <Icon
                    name="Zap"
                    className="text-white"
                    size={isScrolled ? 24 : 32}
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div>
                <h1
                  className={`font-bold text-gray-900 transition-all duration-300 ${isScrolled ? "text-lg" : "text-2xl"}`}
                >
                  Сервис Клик
                </h1>
                {!isScrolled && (
                  <p className="text-sm text-gray-600">
                    Профессиональный ремонт техники
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Icon name="Phone" className="text-orange-600" size={18} />
              <a
                href="tel:83952407405"
                className={`font-bold text-orange-600 hover:text-orange-700 transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"}`}
              >
                83952407405
              </a>
            </div>

            {!isScrolled && (
              <div className="hidden lg:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-gray-600" size={18} />
                  <div className="text-gray-700">
                    г. Иркутск, ул. Рабочего Штаба 78
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="text-gray-600" size={18} />
                  <div className="text-gray-700">
                    <div>Пн-Пт: 9:00-19:00</div>
                    <div className="text-xs">Сб: 10:00-16:00, Вс: выходной</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="relative h-[600px] overflow-hidden bg-gray-900">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-orange-600 px-4 py-2 rounded-full mb-6">
                  <Icon name={banner.icon as any} size={24} />
                  <span className="font-semibold">Профессиональный сервис</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                  {banner.title}
                </h2>
                <p className="text-2xl mb-8 text-gray-200">
                  {banner.description}
                </p>
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 h-auto"
                  onClick={() => scrollToSection("contact-form")}
                >
                  Записаться на ремонт
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-orange-600 w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-orange-200 shadow-xl">
              <CardHeader className="text-center bg-gradient-to-r from-orange-50 to-white">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" className="text-white" size={28} />
                </div>
                <CardTitle className="text-3xl text-gray-900">
                  Проверить статус ремонта
                </CardTitle>
                <CardDescription className="text-lg">
                  Введите номер заказа для отслеживания
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Input
                    placeholder="Номер заказа (например: ORD-12345)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && trackOrder()}
                    className="h-14 text-lg"
                  />
                  <Button
                    onClick={trackOrder}
                    className="bg-orange-600 hover:bg-orange-700 h-14 px-8 text-lg"
                  >
                    Проверить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {trackingVisible && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-orange-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Статус заказа {orderNumber}
                </CardTitle>
                <CardDescription>
                  Последнее обновление: сегодня в 14:30
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      status: "Принят в работу",
                      date: "10 января, 10:00",
                      done: true,
                    },
                    {
                      status: "Диагностика завершена",
                      date: "10 января, 14:30",
                      done: true,
                      note: "Требуется замена экрана",
                    },
                    {
                      status: "В процессе ремонта",
                      date: "11 января",
                      done: false,
                      current: true,
                    },
                    {
                      status: "Готов к выдаче",
                      date: "Ожидается",
                      done: false,
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          item.current
                            ? "bg-orange-600 animate-pulse"
                            : item.done
                              ? "bg-green-100"
                              : "bg-gray-200"
                        }`}
                      >
                        <Icon
                          name={
                            item.current
                              ? "Wrench"
                              : item.done
                                ? "CheckCircle2"
                                : "Circle"
                          }
                          className={
                            item.current
                              ? "text-white"
                              : item.done
                                ? "text-green-600"
                                : "text-gray-400"
                          }
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {item.status}
                        </h4>
                        <p className="text-sm text-gray-600">{item.date}</p>
                        {item.note && (
                          <p className="text-sm text-gray-500 mt-1">
                            {item.note}
                          </p>
                        )}
                        {item.current && (
                          <Badge className="mt-2 bg-orange-600">
                            Текущий этап
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Bell" className="text-orange-600" size={24} />
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Уведомления
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    На протяжении всего ремонта вы получаете уведомления о
                    статусах ремонта
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <section id="repairs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
              Услуги
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Что мы ремонтируем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный ремонт любой сложности с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {repairs.map((repair, index) => (
              <Card
                key={index}
                className="border-2 hover:border-orange-300 transition-all hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon
                      name={repair.icon as any}
                      className="text-white"
                      size={32}
                    />
                  </div>
                  <CardTitle className="text-2xl mb-4">
                    {repair.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {repair.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon
                          name="CheckCircle2"
                          className="text-green-600 flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base">
              Процесс
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600">
              Простой и прозрачный процесс ремонта
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {workflow.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center hover:shadow-xl transition-all border-2 hover:border-orange-300">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon
                          name={step.icon as any}
                          className="text-white"
                          size={28}
                        />
                      </div>
                      <div className="text-3xl font-bold text-orange-600 mb-2">
                        {step.number}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-300 z-10" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 text-center">
              <Icon
                name="Bell"
                className="text-orange-600 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Отслеживание статуса в реальном времени
              </h3>
              <p className="text-lg text-gray-700">
                На протяжении всего ремонта вы получаете уведомления о статусах
                ремонта
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Сделайте заказ прямо сейчас
            </h2>
            <p className="text-xl text-orange-100">
              Оставьте заявку и мы перезвоним вам в течение 10 минут
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваш телефон *
                  </label>
                  <Input
                    type="tel"
                    placeholder="8-XXX-XXX-XX-XX"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    required
                    className="h-14 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Что нужно отремонтировать?
                  </label>
                  <Textarea
                    placeholder="Опишите проблему с вашим устройством..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    rows={4}
                    className="text-lg"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xl py-6 h-auto"
                >
                  <Icon name="Send" className="mr-2" size={24} />
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="brands" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
              Производители
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонтируем оборудование популярных брендов
            </h2>
            <p className="text-xl text-gray-600">
              И многие другие производители
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 text-center transition-all hover:shadow-lg ${
                  brand.popular
                    ? "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300"
                    : "bg-gray-50 border-gray-200 hover:border-orange-300"
                }`}
              >
                <div className="text-2xl font-bold text-gray-900">
                  {brand.name}
                </div>
                {brand.popular && (
                  <Badge className="mt-2 bg-orange-600 text-white">
                    Популярный
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base">
              Оборудование
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Каким оборудованием мы работаем?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы используем современное профессиональное оборудование для
              ремонта электроники
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {equipment.map((item, index) => (
              <Card
                key={index}
                className="border-2 hover:border-orange-300 transition-all hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon
                      name={item.icon as any}
                      className="text-white"
                      size={32}
                    />
                  </div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base">
              Отзывы
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Отзывы довольных клиентов
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    className="text-yellow-500 fill-yellow-500"
                    size={28}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">5.0</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-2 hover:border-orange-300 transition-all hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="text-yellow-500 fill-yellow-500"
                          size={20}
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {review.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Icon name="CheckCircle2" size={16} />
                    <span className="font-medium">Проверенный отзыв</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Свяжитесь с нами прямо сейчас
              </h2>
              <p className="text-xl text-orange-100">
                Мы всегда рады помочь вам
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="text-center">
                  <Icon name="Phone" className="mx-auto mb-4" size={48} />
                  <CardTitle className="text-white text-xl">Телефон</CardTitle>
                  <CardDescription className="text-orange-100 text-lg">
                    <a
                      href="tel:83952407405"
                      className="hover:text-white transition-colors"
                    >
                      8-3952-407-405
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="text-center">
                  <Icon name="Mail" className="mx-auto mb-4" size={48} />
                  <CardTitle className="text-white text-xl">Email</CardTitle>
                  <CardDescription className="text-orange-100 text-base break-all">
                    <a
                      href="mailto:89245401717@mail.ru"
                      className="hover:text-white transition-colors"
                    >
                      89245401717@mail.ru
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="text-center">
                  <Icon name="Clock" className="mx-auto mb-4" size={48} />
                  <CardTitle className="text-white text-xl">
                    Режим работы
                  </CardTitle>
                  <CardDescription className="text-orange-100">
                    <div>Пн-Пт: 9:00-19:00</div>
                    <div>Сб: 10:00-16:00</div>
                    <div>Вс: выходной</div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Форма обратной связи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    type="tel"
                    placeholder="Ваш телефон"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    required
                    className="h-12"
                  />
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    rows={4}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 h-12"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Приходите к нам прямо сейчас
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Icon name="MapPin" className="text-orange-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Наш адрес</h3>
              </div>
              <p className="text-xl text-gray-800 mb-2">
                г. Иркутск, ул. Рабочего Штаба 78
              </p>
              <p className="text-lg text-gray-700">
                Здание супермаркета «Слата», 2 этаж
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=104.294792,52.280720&z=17&l=map&pt=104.294792,52.280720,pm2rdm"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                style={{ position: "relative" }}
              />
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <Icon
                  name="CheckCircle2"
                  className="text-green-600"
                  size={28}
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Парковка</div>
                  <div className="text-sm text-gray-600">Бесплатная</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <Icon
                  name="CheckCircle2"
                  className="text-green-600"
                  size={28}
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    Удобный вход
                  </div>
                  <div className="text-sm text-gray-600">С улицы</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <Icon
                  name="CheckCircle2"
                  className="text-green-600"
                  size={28}
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    Без очередей
                  </div>
                  <div className="text-sm text-gray-600">
                    Быстрое обслуживание
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-12 w-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">Сервис Клик</h3>
              </div>
              <p className="text-gray-400">
                Профессиональный ремонт электроники с 2015 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>8-3952-407-405</li>
                <li>89245401717@mail.ru</li>
                <li>г. Иркутск, ул. Рабочего Штаба 78</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Режим работы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Пн-Пт: 9:00-19:00</li>
                <li>Сб: 10:00-16:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Icon name="Facebook" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Сервис Клик. Все права защищены.</p>
            <p className="mt-2 text-sm">
              Адрес: г. Иркутск, ул. Рабочего Штаба 78, здание супермаркета
              «Слата», 2 этаж
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
