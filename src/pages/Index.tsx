import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingVisible, setTrackingVisible] = useState(false);

  const services = [
    { icon: 'Smartphone', title: 'Ремонт смартфонов', description: 'Замена экранов, батарей, восстановление после воды' },
    { icon: 'Laptop', title: 'Ремонт ноутбуков', description: 'Чистка, замена комплектующих, установка ПО' },
    { icon: 'Tablet', title: 'Ремонт планшетов', description: 'Замена дисплеев, восстановление корпусов' },
    { icon: 'Monitor', title: 'Ремонт мониторов', description: 'Диагностика и ремонт всех типов мониторов' },
    { icon: 'Tv', title: 'Ремонт телевизоров', description: 'LED, OLED, LCD - все виды телевизоров' },
    { icon: 'Headphones', title: 'Ремонт аудио', description: 'Наушники, колонки, аудиосистемы' }
  ];

  const pricelist = [
    { service: 'Диагностика', price: 'Бесплатно', time: '15-30 мин' },
    { service: 'Замена экрана смартфона', price: 'от 2 500 ₽', time: '1-2 часа' },
    { service: 'Замена батареи', price: 'от 1 500 ₽', time: '30 мин' },
    { service: 'Восстановление после воды', price: 'от 3 000 ₽', time: '1-3 дня' },
    { service: 'Чистка ноутбука', price: 'от 1 800 ₽', time: '1-2 часа' },
    { service: 'Установка ПО', price: 'от 800 ₽', time: '30-60 мин' }
  ];

  const reviews = [
    { name: 'Алексей М.', rating: 5, text: 'Быстро заменили экран на iPhone, как новый! Спасибо за качественную работу.' },
    { name: 'Мария К.', rating: 5, text: 'Восстановили ноутбук после залития водой. Не верила что возможно, но всё работает!' },
    { name: 'Дмитрий П.', rating: 5, text: 'Отличный сервис, адекватные цены. Ремонтируют быстро и качественно.' }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/ee9ff1a5-1d36-4f4f-b451-0c4000c7f03b.jpg',
    'https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/c9f5e341-dfad-4862-a453-470dbd2c6b16.jpg',
    'https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/025d5d24-dc09-4ad4-b86d-79a54aece4d7.jpg'
  ];

  const trackOrder = () => {
    if (orderNumber.trim()) {
      setTrackingVisible(true);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/025d5d24-dc09-4ad4-b86d-79a54aece4d7.jpg" 
                alt="Пятый элемент" 
                className="h-12 w-12 object-cover rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Пятый элемент</h1>
                <p className="text-sm text-gray-600">Сервисный центр</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('price')} className="text-gray-700 hover:text-primary transition-colors">Прайс-лист</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors">Контакты</button>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end">
                <a href="tel:+79991234567" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                  +7 (999) 123-45-67
                </a>
                <p className="text-sm text-gray-600">ул. Центральная, 15</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 bg-gradient-to-br from-white via-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary text-white">Профессиональный ремонт с 2010 года</Badge>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Ремонт электроники<br />любой сложности
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Быстро, качественно, с гарантией. Бесплатная диагностика за 15 минут.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>

              <Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Search" className="text-primary" size={24} />
                    Отследить заказ
                  </CardTitle>
                  <CardDescription>Введите номер заказа для отслеживания статуса ремонта</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Например: ORD-12345"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && trackOrder()}
                    />
                    <Button onClick={trackOrder} className="bg-primary hover:bg-primary/90">
                      Найти
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/ee9ff1a5-1d36-4f4f-b451-0c4000c7f03b.jpg"
                alt="Ремонт электроники"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {trackingVisible && (
        <section className="py-12 bg-gray-50 animate-fade-in">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Статус заказа {orderNumber}</CardTitle>
                <CardDescription>Обновлено: сегодня в 14:30</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon name="CheckCircle2" className="text-green-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Принят в работу</h4>
                      <p className="text-sm text-gray-600">16 декабря, 10:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon name="CheckCircle2" className="text-green-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Диагностика завершена</h4>
                      <p className="text-sm text-gray-600">16 декабря, 11:30</p>
                      <p className="text-sm text-gray-500 mt-1">Требуется замена экрана и батареи</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Icon name="Wrench" className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">В процессе ремонта</h4>
                      <p className="text-sm text-gray-600">16 декабря, 14:00</p>
                      <Badge className="mt-2 bg-primary text-white">Текущий статус</Badge>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 opacity-50">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <Icon name="Circle" className="text-gray-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Готов к выдаче</h4>
                      <p className="text-sm text-gray-600">Ожидается</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <h4 className="font-semibold text-gray-900">Ориентировочное время готовности</h4>
                  </div>
                  <p className="text-gray-700">17 декабря, после 15:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Наши услуги</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Что мы ремонтируем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональный ремонт любой электроники с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/30">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">О компании</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Доверьте ремонт профессионалам
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Сервисный центр "Пятый элемент" работает с 2010 года. За это время мы отремонтировали более 50 000 устройств и заслужили доверие тысяч клиентов.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Гарантия качества</h4>
                    <p className="text-gray-600">До 12 месяцев гарантии на все виды работ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Zap" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Быстрый ремонт</h4>
                    <p className="text-gray-600">80% ремонтов выполняем в течение 1-2 часов</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Оригинальные запчасти</h4>
                    <p className="text-gray-600">Используем только качественные комплектующие</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-gray-600">Отремонтировано</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Цены</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-0">
                <div className="divide-y">
                  {pricelist.map((item, index) => (
                    <div key={index} className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg mb-1">{item.service}</h4>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <Icon name="Clock" size={16} />
                          {item.time}
                        </p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{item.price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-orange-50 rounded-2xl border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Важная информация</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Диагностика всегда бесплатна</li>
                    <li>• Точную стоимость определим после диагностики</li>
                    <li>• Гарантия на все работы от 3 до 12 месяцев</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Отзывы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Что говорят клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Галерея</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Наши работы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-xl mb-12 text-white/90">Мы всегда рады помочь с ремонтом вашей техники</p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Icon name="Phone" className="mx-auto mb-4 text-white" size={32} />
                <h4 className="font-semibold text-lg mb-2">Телефон</h4>
                <a href="tel:+79991234567" className="text-white/90 hover:text-white">+7 (999) 123-45-67</a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Icon name="MapPin" className="mx-auto mb-4 text-white" size={32} />
                <h4 className="font-semibold text-lg mb-2">Адрес</h4>
                <p className="text-white/90">ул. Центральная, 15</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Icon name="Clock" className="mx-auto mb-4 text-white" size={32} />
                <h4 className="font-semibold text-lg mb-2">Режим работы</h4>
                <p className="text-white/90">Пн-Вс: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Пятый элемент. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
