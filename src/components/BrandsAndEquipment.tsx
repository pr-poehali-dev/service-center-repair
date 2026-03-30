import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useBranch } from "@/context/BranchContext";

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

interface BrandsAndEquipmentProps {
  brands: Brand[];
  equipment: Equipment[];
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

const BrandsAndEquipment = ({ brands, equipment }: BrandsAndEquipmentProps) => {
  const { branch } = useBranch();

  return (
    <>
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
                <div className="w-full h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-white" size={20} />
                    </div>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsAndEquipment;