import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingVisible, setTrackingVisible] = useState(false);
  const [phone, setPhone] = useState('');

  const services = [
    { icon: 'Smartphone', title: 'Ремонт смартфонов', description: 'Замена экранов, батарей, восстановление после воды', time: 'от 30 мин', price: 'от 1 500 ₽' },
    { icon: 'Laptop', title: 'Ремонт ноутбуков', description: 'Чистка, замена комплектующих, установка ПО', time: 'от 1 часа', price: 'от 1 800 ₽' },
    { icon: 'Tablet', title: 'Ремонт планшетов', description: 'Замена дисплеев, восстановление корпусов', time: 'от 1 часа', price: 'от 2 000 ₽' },
    { icon: 'Monitor', title: 'Ремонт мониторов', description: 'Диагностика и ремонт всех типов', time: 'от 2 часов', price: 'от 2 500 ₽' },
    { icon: 'Tv', title: 'Ремонт телевизоров', description: 'LED, OLED, LCD - все виды', time: 'от 3 часов', price: 'от 3 000 ₽' },
    { icon: 'Headphones', title: 'Ремонт аудио', description: 'Наушники, колонки, системы', time: 'от 1 часа', price: 'от 1 200 ₽' }
  ];

  const reviews = [
    { name: 'Алексей М.', rating: 5, text: 'Быстро заменили экран на iPhone за час! Работает как новый. Цена адекватная, мастера профи!', time: '2 дня назад' },
    { name: 'Мария К.', rating: 5, text: 'Восстановили ноутбук после воды, даже не верилось. Все файлы сохранили, работает отлично!', time: '5 дней назад' },
    { name: 'Дмитрий П.', rating: 5, text: 'Обращался уже третий раз - всегда на высоте. Быстро, качественно, честно. Рекомендую!', time: 'неделю назад' }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/baf4d9d8-9dfb-4a97-ab30-fea9e945a227.jpg',
    'https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/ee9ff1a5-1d36-4f4f-b451-0c4000c7f03b.jpg',
    'https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/c9f5e341-dfad-4862-a453-470dbd2c6b16.jpg'
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
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Badge className="bg-green-600 text-white px-4 py-2 text-sm shadow-lg animate-pulse">
          <Icon name="CheckCircle2" size={16} className="mr-2" />
          Сейчас работаем
        </Badge>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Пятый элемент</h1>
                <p className="text-xs text-gray-600">Ремонтируем за час</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Услуги</button>
              <button onClick={() => scrollToSection('price')} className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Цены</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Контакты</button>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+79991234567" className="hidden md:flex flex-col items-end">
                <span className="text-lg font-bold text-primary">+7 (999) 123-45-67</span>
                <span className="text-xs text-gray-600">Звоните сейчас!</span>
              </a>
              <Button className="bg-primary hover:bg-primary/90 shadow-lg">
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Принимаем заказы прямо сейчас</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Починим вашу<br />технику <span className="text-primary">за 1 час</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Бесплатная диагностика за 15 минут. Гарантия 12 месяцев. Работаем без выходных.
              </p>

              <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-2 border-primary/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Узнайте стоимость за 30 секунд</h3>
                <p className="text-gray-600 mb-6">Оставьте телефон — перезвоним за 2 минуты и назовём точную цену</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-lg h-14 border-2"
                  />
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg font-semibold shadow-lg whitespace-nowrap">
                    Узнать цену
                  </Button>
                </div>

                <div className="flex items-center gap-4 mt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-green-600" />
                    <span>Звонок бесплатный</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={18} className="text-green-600" />
                    <span>Не спамим</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                  <div className="text-xs text-gray-600">Ремонтов</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-primary mb-1">1 час</div>
                  <div className="text-xs text-gray-600">Средний срок</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-primary mb-1">12 мес</div>
                  <div className="text-xs text-gray-600">Гарантия</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/baf4d9d8-9dfb-4a97-ab30-fea9e945a227.jpg"
                  alt="Довольный клиент"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                      ))}
                    </div>
                    <span className="font-semibold">4.9 из 5 • 2,847 отзывов</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-sm font-semibold mb-1">Сейчас в работе</div>
                <div className="text-4xl font-bold">23</div>
                <div className="text-sm">устройства</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-primary to-orange-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-xl">
                <Icon name="Zap" size={32} />
              </div>
              <div>
                <div className="text-2xl font-bold">Срочный ремонт за 30 минут</div>
                <div className="text-white/90">Не откладывайте — приносите прямо сейчас</div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold shadow-xl">
              Записаться на срочный ремонт
            </Button>
          </div>
        </div>
      </section>

      {trackingVisible && (
        <section className="py-12 bg-gray-50 animate-fade-in">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-primary/30 shadow-xl">
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse">
                      <Icon name="Wrench" className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">В процессе ремонта</h4>
                      <p className="text-sm text-gray-600">16 декабря, 14:00</p>
                      <Badge className="mt-2 bg-primary text-white">Текущий этап</Badge>
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

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Clock" className="text-primary" size={24} />
                    <h4 className="font-semibold text-gray-900 text-lg">Готовность</h4>
                  </div>
                  <p className="text-xl font-bold text-primary">Завтра после 15:00</p>
                  <p className="text-sm text-gray-600 mt-2">Позвоним, когда можно забирать</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <Card className="inline-block bg-white/80 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Icon name="Search" className="text-primary" size={28} />
                Проверить статус вашего ремонта
              </CardTitle>
              <CardDescription className="text-base">Введите номер заказа</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 min-w-[400px]">
                <Input 
                  placeholder="ORD-12345"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && trackOrder()}
                  className="h-12 text-lg"
                />
                <Button onClick={trackOrder} className="bg-primary hover:bg-primary/90 h-12 px-6">
                  Проверить
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white px-6 py-2 text-base">Услуги</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Что мы ремонтируем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Все виды электроники. Гарантия на работу. Запчасти в наличии.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary bg-white group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="Clock" size={16} />
                      {service.time}
                    </div>
                    <div className="text-xl font-bold text-primary">{service.price}</div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 shadow-xl">
              Записаться на ремонт
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base">Отзывы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">2,847 довольных клиентов</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={28} />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
              <span className="text-gray-600">из 5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">{review.time}</Badge>
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-green-600">
                    <Icon name="CheckCircle2" size={16} />
                    <span className="font-medium">Проверенный отзыв</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Присоединяйтесь к тысячам довольных клиентов</p>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Все отзывы
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white px-6 py-2 text-base">Галерея</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <div className="font-semibold text-lg mb-1">Фото {index + 1}</div>
                    <div className="text-sm text-white/80">Наш сервис-центр</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Свяжитесь с нами прямо сейчас</h2>
              <p className="text-xl text-white/90 mb-8">Ответим на все вопросы за 2 минуты</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all text-white shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={32} />
                  </div>
                  <CardTitle className="text-white text-xl">Телефон</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    <a href="tel:+79991234567" className="hover:text-white transition-colors font-semibold">
                      +7 (999) 123-45-67
                    </a>
                  </CardDescription>
                  <p className="text-sm text-white/70 mt-2">Звоните с 9:00 до 21:00</p>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all text-white shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={32} />
                  </div>
                  <CardTitle className="text-white text-xl">Адрес</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    ул. Центральная, 15
                  </CardDescription>
                  <p className="text-sm text-white/70 mt-2">1 этаж, вход с улицы</p>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all text-white shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={32} />
                  </div>
                  <CardTitle className="text-white text-xl">Режим работы</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Пн-Вс: 9:00 - 21:00
                  </CardDescription>
                  <p className="text-sm text-white/70 mt-2">Без выходных и перерывов</p>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Приходите прямо сейчас!</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <Icon name="CheckCircle2" className="text-green-600" size={28} />
                  <div>
                    <div className="font-semibold text-gray-900">Бесплатная диагностика</div>
                    <div className="text-sm text-gray-600">Узнайте причину за 15 минут</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <Icon name="CheckCircle2" className="text-green-600" size={28} />
                  <div>
                    <div className="font-semibold text-gray-900">Ремонт при вас</div>
                    <div className="text-sm text-gray-600">Смотрите как мы работаем</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <Icon name="CheckCircle2" className="text-green-600" size={28} />
                  <div>
                    <div className="font-semibold text-gray-900">Оплата после ремонта</div>
                    <div className="text-sm text-gray-600">Проверили — платите</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <Icon name="CheckCircle2" className="text-green-600" size={28} />
                  <div>
                    <div className="font-semibold text-gray-900">Гарантия 12 месяцев</div>
                    <div className="text-sm text-gray-600">Документ в руки</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-6 h-auto shadow-xl">
                  <Icon name="MessageCircle" className="mr-3" size={24} />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Пятый элемент</h4>
              <p className="text-gray-400 text-sm">Профессиональный ремонт электроники с 2010 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Ремонт смартфонов</li>
                <li>Ремонт ноутбуков</li>
                <li>Ремонт планшетов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О компании</li>
                <li>Гарантия</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>ул. Центральная, 15</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Пятый элемент. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
