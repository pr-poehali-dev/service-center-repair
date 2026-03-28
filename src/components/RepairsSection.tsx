import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useBranch } from "@/context/BranchContext";

interface Repair {
  title?: string;
  icon?: string;
  image?: string;
  items?: string[];
  type?: "banner";
  text?: string;
}

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface Brand {
  name: string;
  popular: boolean;
}

interface Equipment {
  name: string;
  description: string;
  icon: string;
  image: string;
}

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface RepairsSectionProps {
  repairs: Repair[];
  workflow: WorkflowStep[];
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
}

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

const RepairsSection = ({
  repairs,
  workflow,
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
}: RepairsSectionProps) => {
  const { branch } = useBranch();

  return (
    <>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="border-2 border-gray-200 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-64 h-56 md:h-auto flex-shrink-0">
                  <img
                    src="https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/3ad7a922-410f-4a51-a14a-03beb18e2a5f.jpg"
                    alt="Hi Black — расходные материалы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Package" className="text-white" size={20} />
                    </div>
                    <span className="text-xl font-bold text-gray-900">
                      Специальное предложение
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Наша компания является официальным дистребьютером комнапии
                    Hi Black. На нашем складе присутствует весь перечень
                    расходных материалов для офисной техники. Лазерных, струйных
                    принтеров и МФУ.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="repairs" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600 text-white px-6 py-2 text-base">
              Услуги
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Что мы ремонтируем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный ремонт любой сложности с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {repairs.map((repair, index) => {
              if (repair.type === "banner") {
                const nextCard = repairs
                  .slice(index + 1)
                  .find((r) => r.type !== "banner");
                const cardId = nextCard?.title
                  ? `repair-card-${nextCard.title.replace(/\s+/g, "-").toLowerCase()}`
                  : null;
                return (
                  <Card
                    key={index}
                    className="md:col-span-2 border-2 border-red-500 bg-gradient-to-br from-red-50 to-yellow-50"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between gap-6 flex-wrap">
                        <div className="flex items-center gap-6">
                          <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <Icon
                              name="ShoppingBag"
                              className="text-white"
                              size={32}
                            />
                          </div>
                          <p className="text-lg text-gray-900 font-semibold">
                            {repair.text}
                          </p>
                        </div>
                        {cardId && (
                          <Button
                            variant="outline"
                            className="border-red-500 text-red-600 hover:bg-red-50 shrink-0"
                            onClick={() =>
                              document
                                .getElementById(cardId)
                                ?.scrollIntoView({
                                  behavior: "smooth",
                                  block: "center",
                                })
                            }
                          >
                            Подробнее
                            <Icon name="ArrowDown" className="ml-2" size={16} />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              }

              const cardId = `repair-card-${repair.title?.replace(/\s+/g, "-").toLowerCase()}`;
              return (
                <Card
                  key={index}
                  id={cardId}
                  className="border-2 hover:border-red-300 transition-all hover:shadow-xl flex flex-col"
                >
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={repair.image}
                        alt={repair.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-2xl mb-4">
                      {repair.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <ul className="space-y-3 flex-1">
                      {repair.items?.map((item, idx) => (
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
                    <a
                      href={branch?.maxUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 block"
                    >
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        <Icon name="MessageCircle" className="mr-2" size={18} />
                        Получить консультацию
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600 text-white px-6 py-2 text-base">
              Процесс
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
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
                  <Card className="text-center hover:shadow-xl transition-all border-2 hover:border-red-300">
                    <CardContent className="pt-6">
                      <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
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
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <Icon
                        name="ArrowRight"
                        className="text-red-600"
                        size={24}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="py-12 bg-gradient-to-br from-red-500 to-red-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Сделайте заказ прямо сейчас
            </h2>
            <p className="text-xl text-red-100">
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
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-xl py-6 h-auto"
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
            <Badge className="mb-4 bg-red-600 text-white px-6 py-2 text-base">
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
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`p-6 border-2 rounded-xl text-center transition-all hover:shadow-lg flex flex-col items-center justify-center gap-3 ${
                  brand.popular
                    ? "border-red-300 bg-gradient-to-br from-red-50 to-white"
                    : "border-gray-200 hover:border-red-200"
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
                  className={`font-semibold ${brand.popular ? "text-red-600 text-lg" : "text-gray-700"}`}
                >
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600 text-white px-6 py-2 text-base">
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
                className="border-2 hover:border-red-300 transition-all hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <p className="text-base text-muted-foreground">
                    {item.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600 text-white px-6 py-2 text-base">
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
                className="border-2 hover:border-red-300 transition-all hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
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
                  <p className="text-base text-gray-700">{review.text}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Поздравляем — вы просмотрели наш сайт до конца!
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Вам подарок! Предъявите промокод и получите скидку{" "}
            <span className="font-bold">10%</span> на нашу работу.
          </p>
          <div className="inline-block bg-white rounded-2xl px-10 py-5 shadow-xl">
            <p className="text-sm text-gray-500 mb-1 uppercase tracking-widest font-medium">
              Ваш промокод
            </p>
            <p className="text-4xl font-extrabold text-orange-500 tracking-wider">
              удача2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RepairsSection;
