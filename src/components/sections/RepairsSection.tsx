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
  image: string;
  items: string[];
}

interface RepairsSectionProps {
  repairs: Repair[];
}

const RepairsSection = ({ repairs }: RepairsSectionProps) => {
  return (
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
  );
};

export default RepairsSection;
