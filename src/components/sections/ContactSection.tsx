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

interface ContactSectionProps {
  brands: Brand[];
  equipment: Equipment[];
  reviews: Review[];
  contactName: string;
  contactPhone: string;
  contactMessage: string;
  onContactNameChange: (value: string) => void;
  onContactPhoneChange: (value: string) => void;
  onContactMessageChange: (value: string) => void;
  onContactSubmit: (e: React.FormEvent) => void;
  onRouteClick: () => void;
}

const ContactSection = ({
  brands,
  equipment,
  reviews,
  contactName,
  contactPhone,
  contactMessage,
  onContactNameChange,
  onContactPhoneChange,
  onContactMessageChange,
  onContactSubmit,
  onRouteClick,
}: ContactSectionProps) => {
  return (
    <>
      <section id="promo-tracking" className="py-12 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Bell" className="text-white" size={40} />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Отслеживайте статус ремонта в реальном времени
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              На протяжении всего ремонта вы получаете уведомления о статусах
              ремонта
            </p>
            <Button
              onClick={() =>
                document
                  .getElementById("tracking-widget")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 h-auto"
            >
              <Icon name="Search" className="mr-2" size={20} />
              Проверить статус
            </Button>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="py-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
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
                    Ваше имя *
                  </label>
                  <Input
                    type="text"
                    placeholder="Как к вам обращаться?"
                    value={contactName}
                    onChange={(e) => onContactNameChange(e.target.value)}
                    required
                    className="h-14 text-lg"
                  />
                </div>

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

      <section id="brands" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
              Бренды
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Работаем с популярными брендами
            </h2>
            <p className="text-xl text-gray-600">
              И многими другими производителями электроники
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
            {brands.map((brand, index) => {
              const brandLogos: Record<string, string> = {
                Samsung:
                  "https://cdn.poehali.dev/files/Samsung_Electro-Mechanics_логотип.png",
                Apple:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png",
                Xiaomi:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/320px-Xiaomi_logo.svg.png",
                Huawei: "https://cdn.poehali.dev/files/Huawei-Logo1.png",
                Infinix: "https://cdn.worldvectorlogo.com/logos/infinix-1.svg",
                Realme:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Realme_logo.svg/320px-Realme_logo.svg.png",
                Tecno: "https://cdn.worldvectorlogo.com/logos/tecno-1.svg",
                LG: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/200px-LG_logo_%282015%29.svg.png",
                Haier:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Haier_logo.svg/320px-Haier_logo.svg.png",
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
                      target.style.display = "none";
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

      <section id="equipment" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base">
              Оборудование
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
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

      <section id="reviews" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base">
              Отзывы
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы довольных клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Узнайте, что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-2 hover:border-orange-300 transition-all hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-yellow-400 fill-yellow-400"
                        size={18}
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-700">
                    {review.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
                Контакты
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Наши контакты
              </h2>
              <p className="text-xl text-gray-600">
                Приходите к нам в сервисный центр или свяжитесь удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-orange-300 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="MapPin" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-4">Адрес</CardTitle>
                  <CardDescription className="text-base text-gray-700 space-y-2">
                    <p>г. Иркутск, ул. Карла-Маркса, д. 48</p>
                    <p>Вход с торца, офис №3</p>
                    <p className="font-semibold text-gray-900">
                      Пн-Пт: 9:00 - 19:00
                    </p>
                    <p className="font-semibold text-gray-900">
                      Сб: 10:00 - 16:00
                    </p>
                  </CardDescription>
                  <Button
                    onClick={onRouteClick}
                    className="mt-4 bg-orange-600 hover:bg-orange-700 text-white w-full"
                  >
                    <Icon name="Navigation" className="mr-2" size={20} />
                    Построить маршрут
                  </Button>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-orange-300 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Phone" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-4">Телефон</CardTitle>
                  <CardDescription className="text-base text-gray-700 space-y-3">
                    <div>
                      <a
                        href="tel:+73952500303"
                        className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        +7 (3952) 50-03-03
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Звоните нам</p>
                    </div>
                    <div>
                      <a
                        href="https://wa.me/79025119090"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                      >
                        <Icon name="MessageCircle" size={20} />
                        WhatsApp: +7 (902) 511-90-90
                      </a>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
