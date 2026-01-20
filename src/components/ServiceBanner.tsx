import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServiceBanner = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-gray-50 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300">
        <div className="p-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
              Сервисный центр Клик
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Профессиональный ремонт мобильной электроники
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-orange-200 hover:shadow-xl transition-all hover:border-orange-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Smartphone" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Замена экранов на любом смартфоне
                    </h3>
                    <p className="text-gray-600">
                      Качественная замена дисплеев на всех моделях телефонов
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all hover:border-blue-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Laptop" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ремонт ноутбуков и ПК
                    </h3>
                    <p className="text-gray-600">
                      Диагностика и ремонт компьютерной техники любой сложности
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all hover:border-purple-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Printer" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ремонт принтеров и МФУ
                    </h3>
                    <p className="text-gray-600">
                      Быстрая и качественная настройка печатающего оборудования
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all hover:border-green-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Гарантия на все работы
                    </h3>
                    <p className="text-gray-600">
                      Мы уверены в качестве наших услуг и даём гарантию
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;