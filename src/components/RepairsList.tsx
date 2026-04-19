import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

interface RepairsListProps {
  repairs: Repair[];
}

const RepairsList = ({ repairs }: RepairsListProps) => {
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
                    Наша компания является официальным дистрибьютером компании
                    Hi Black. На нашем складе присутствует весь перечень
                    расходных материалов для офисной техники. Лазерных, струйных
                    принтеров и МФУ.
                  </p>
                  <a
                    href={branch?.maxUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex justify-center"
                  >
                    <Button className="bg-gray-900 hover:bg-gray-700 text-white">
                      <Icon name="MessageCircle" className="mr-2" size={18} />
                      Уточнить наличие
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="border-2 border-yellow-400 hover:border-yellow-500 transition-all hover:shadow-xl flex flex-col overflow-hidden bg-yellow-400">
            <CardHeader>
              <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/76e42107-86b0-4909-a0e6-6d5cf09e173d/files/3d7f02a1-80d1-4135-a866-069d64b82d6a.jpg"
                  alt="Покупаем неисправную технику"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl mb-4 text-red-600 uppercase">
                Покупаем неисправную технику
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <ul className="space-y-3 flex-1">
                {["Смартфоны", "Компьютеры и ноутбуки", "Телевизоры"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-red-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-red-700 font-medium">{item}</span>
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
                  Узнать стоимость
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="repairs" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600 text-white px-6 py-2 text-base">
              Наши услуги
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Что мы ремонтируем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный ремонт любой сложности с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    className="md:col-span-2 lg:hidden border-2 border-red-500 bg-gradient-to-br from-red-50 to-yellow-50"
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
                              document.getElementById(cardId)?.scrollIntoView({
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
                  className="border-2 hover:border-red-300 transition-all hover:shadow-xl flex flex-col overflow-hidden"
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
    </>
  );
};

export default RepairsList;