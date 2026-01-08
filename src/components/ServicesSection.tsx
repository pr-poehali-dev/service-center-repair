import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

interface ServicesSectionProps {
  repairs: Repair[];
  workflow: WorkflowStep[];
  brands: Brand[];
  equipment: Equipment[];
}

const ServicesSection = ({ repairs, workflow, brands, equipment }: ServicesSectionProps) => {
  return (
    <>
      <section id="repairs" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
              Услуги
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Что мы ремонтируем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный ремонт электроники любой сложности
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {repairs.map((repair, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(`repair-${index}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="px-6 py-3 bg-white hover:bg-orange-600 hover:text-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-orange-600 transition-all duration-300 font-semibold flex items-center gap-2 shadow-sm hover:shadow-lg"
              >
                <Icon name={repair.icon as any} size={20} />
                {repair.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairs.map((repair, index) => (
              <Card
                key={index}
                id={`repair-${index}`}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-orange-300 scroll-mt-32"
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg text-5xl">
                    {index === 0 && '📱'}
                    {index === 1 && '💻'}
                    {index === 2 && '🖨️'}
                    {index === 3 && '📺'}
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    {repair.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {repair.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon
                          name="Check"
                          className="text-orange-600 flex-shrink-0 mt-1"
                          size={20}
                        />
                        <span className="text-gray-700 text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Icon name="Phone" size={20} />
                    Заказать ремонт
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
              Процесс
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как проходит ремонт
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прозрачный процесс работы от диагностики до выдачи
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <Card
                key={index}
                className="relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-orange-300"
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white text-2xl font-bold">
                    {step.number}
                  </span>
                </div>
                <CardHeader className="pt-8">
                  <div className="w-20 h-20 bg-orange-100 rounded-xl flex items-center justify-center mb-3 text-4xl">
                    {index === 0 && '📦'}
                    {index === 1 && '🔍'}
                    {index === 2 && '✅'}
                    {index === 3 && '🔧'}
                    {index === 4 && '✨'}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
              Бренды
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ремонтируем технику всех брендов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Работаем с устройствами любых производителей
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${
                  brand.popular
                    ? "border-orange-300 bg-gradient-to-br from-orange-50 to-white"
                    : "border-gray-200"
                }`}
              >
                <CardContent className="pt-8 pb-8">
                  <p className="font-bold text-xl text-gray-900">
                    {brand.name}
                  </p>
                  {brand.popular && (
                    <Badge className="mt-3 bg-orange-600">Популярно</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-base">
              Оборудование
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Профессиональное оборудование
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Используем современные инструменты для качественного ремонта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-orange-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon
                      name={item.icon as any}
                      className="text-white"
                      size={32}
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;