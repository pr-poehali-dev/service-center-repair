import { useEffect, useState } from "react";
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

interface Repair {
  title: string;
  icon: string;
  items: string[];
}

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface Brand {
  name: string;
  popular: boolean;
}

interface Equipment {
  name: string;
  description: string;
  icon: string;
}

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface MainContentProps {
  repairs: Repair[];
  workflow: WorkflowStep[];
  brands: Brand[];
  equipment: Equipment[];
  reviews: Review[];
  orderNumber: string;
  trackingVisible: boolean;
  contactPhone: string;
  contactMessage: string;
  onContactPhoneChange: (value: string) => void;
  onContactMessageChange: (value: string) => void;
  onContactSubmit: (e: React.FormEvent) => void;
}

const MainContent = ({
  repairs,
  workflow,
  brands,
  equipment,
  reviews,
  orderNumber,
  trackingVisible,
  contactPhone,
  contactMessage,
  onContactPhoneChange,
  onContactMessageChange,
  onContactSubmit,
}: MainContentProps) => {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    // Инициализируем виджет сразу
    const initWidget = setInterval(() => {
      if ((window as any).createLSWidget) {
        try {
          (window as any).createLSWidget();
        } catch (e) {
          console.error('Init error:', e);
        }
        clearInterval(initWidget);
      }
    }, 150);

    // Скрываем loader через 2.5 секунды
    const hideTimer = setTimeout(() => {
      setHideLoader(true);
    }, 2500);

    return () => {
      clearInterval(initWidget);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
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
                <div className="relative flex flex-col items-center justify-center min-h-[250px]">
                  <div id="livesklad-widget" className="w-full max-w-md mx-auto"></div>
                  
                  {!hideLoader && (
                    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-4 z-10">
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-orange-200 rounded-full"></div>
                        <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-gray-900 font-medium">Загрузка виджета отслеживания</p>
                        <p className="text-sm text-gray-500">Подождите несколько секунд...</p>
                      </div>
                    </div>
                  )}
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
              <form onSubmit={onContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваш телефон *
                  </label>
                  <Input
                    type="tel"
                    placeholder="8-XXX-XXX-XX-XX"
                    value={contactPhone}
                    onChange={(e) => onContactPhoneChange(e.target.value)}
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
                    onChange={(e) => onContactMessageChange(e.target.value)}
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
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="brands" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
              Бренды
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Работаем со всеми брендами
            </h2>
            <p className="text-xl text-gray-600">
              И многими другими производителями электроники
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
            {brands.map((brand, index) => {
              const brandLogos: Record<string, string> = {
                Samsung: "https://cdn.poehali.dev/files/Samsung_Electro-Mechanics_логотип.png",
                Apple: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png",
                Xiaomi: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/320px-Xiaomi_logo.svg.png",
                Huawei: "https://cdn.poehali.dev/files/Huawei-Logo1.png",
                Infinix: "https://cdn.worldvectorlogo.com/logos/infinix-1.svg",
                Realme: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Realme_logo.svg/320px-Realme_logo.svg.png",
                Tecno: "https://cdn.worldvectorlogo.com/logos/tecno-1.svg",
                LG: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/200px-LG_logo_%282015%29.svg.png",
                Haier: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Haier_logo.svg/320px-Haier_logo.svg.png",
                BBK: "https://cdn.worldvectorlogo.com/logos/bbk-electronics.svg",
              };

              return (
                <div
                  key={index}
                  className={`p-6 border-2 rounded-xl text-center transition-all hover:shadow-lg flex flex-col items-center justify-center gap-3 ${
                    brand.popular
                      ? "border-orange-300 bg-gradient-to-br from-orange-50 to-white"
                      : "border-gray-200 hover:border-orange-200"
                  }`}
                >
                  <img
                    src={brandLogos[brand.name]}
                    alt={brand.name}
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <p
                    className={`font-semibold ${brand.popular ? "text-orange-600 text-lg" : "text-gray-700"}`}
                  >
                    {brand.name}
                  </p>
                </div>
              );
            })}
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
              Профессиональное оборудование
            </h2>
            <p className="text-xl text-gray-600">
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
            <p className="text-lg text-gray-600">
              На основе {reviews.length} отзывов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-yellow-500 fill-yellow-500"
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-orange-500 to-orange-600"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="text-center">
                  <Icon name="Phone" className="mx-auto mb-4" size={48} />
                  <CardTitle className="text-white text-xl">Телефон</CardTitle>
                  <CardDescription className="text-orange-100 text-base">
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
                <form onSubmit={onContactSubmit} className="space-y-4">
                  <Input
                    type="tel"
                    placeholder="Ваш телефон"
                    value={contactPhone}
                    onChange={(e) => onContactPhoneChange(e.target.value)}
                    required
                    className="h-12"
                  />
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={contactMessage}
                    onChange={(e) => onContactMessageChange(e.target.value)}
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
                src="https://yandex.ru/map-widget/v1/?ll=104.302444,52.316737&z=17&l=map&pt=104.302444,52.316737,pm2rdm"
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
                  href="https://vk.com/element5irk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <span className="text-sm font-bold">VK</span>
                </a>
                <a
                  href="https://t.me/element5_irk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Icon name="Send" size={18} />
                </a>
                <a
                  href="https://wa.me/89245401717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © 2025 Сервис Клик. Все права защищены. Ремонт техники в Иркутске
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainContent;