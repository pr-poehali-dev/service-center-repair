import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import RepairsSection from "@/components/RepairsSection";
import AddressSection from "@/components/AddressSection";
import SiteFooter from "@/components/SiteFooter";

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

interface MainContentProps {
  repairs: Repair[];
  workflow: WorkflowStep[];
  brands: Brand[];
  equipment: Equipment[];
  reviews: Review[];
  orderNumber: string;
  trackingVisible: boolean;
  contactName: string;
  contactPhone: string;
  contactMessage: string;
  onContactNameChange: (value: string) => void;
  onContactPhoneChange: (value: string) => void;
  onContactMessageChange: (value: string) => void;
  onContactSubmit: (e: React.FormEvent) => void;
  onRouteClick: () => void;
}

const MainContent = ({
  repairs,
  workflow,
  brands,
  equipment,
  reviews,
  orderNumber,
  trackingVisible,
  contactName,
  contactPhone,
  contactMessage,
  onContactNameChange,
  onContactPhoneChange,
  onContactMessageChange,
  onContactSubmit,
  onRouteClick,
}: MainContentProps) => {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const initWidget = setInterval(() => {
      if ((window as any).createLSWidget) {
        try {
          (window as any).createLSWidget();
        } catch (e) {
          console.error("Init error:", e);
        }
        clearInterval(initWidget);
      }
    }, 150);

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
      {trackingVisible && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-red-200 shadow-xl">
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
                    { status: "Принят в работу", date: "10 января, 10:00", done: true },
                    { status: "Диагностика завершена", date: "10 января, 14:30", done: true, note: "Требуется замена экрана" },
                    { status: "В процессе ремонта", date: "11 января", done: false, current: true },
                    { status: "Готов к выдаче", date: "Ожидается", done: false },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          item.current
                            ? "bg-red-600 animate-pulse"
                            : item.done
                              ? "bg-green-100"
                              : "bg-gray-200"
                        }`}
                      >
                        <Icon
                          name={item.current ? "Wrench" : item.done ? "CheckCircle2" : "Circle"}
                          className={item.current ? "text-white" : item.done ? "text-green-600" : "text-gray-400"}
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.status}</h4>
                        <p className="text-sm text-gray-600">{item.date}</p>
                        {item.note && (
                          <p className="text-sm text-gray-500 mt-1">{item.note}</p>
                        )}
                        {item.current && (
                          <Badge className="mt-2 bg-red-600">Текущий этап</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-2 border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Bell" className="text-red-600" size={24} />
                    <h4 className="font-semibold text-gray-900 text-lg">Уведомления</h4>
                  </div>
                  <p className="text-gray-700">
                    Мы отправим SMS-уведомление, когда статус заказа изменится
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <RepairsSection
        repairs={repairs}
        workflow={workflow}
        brands={brands}
        equipment={equipment}
        reviews={reviews}
        contactName={contactName}
        contactPhone={contactPhone}
        contactMessage={contactMessage}
        onContactNameChange={onContactNameChange}
        onContactPhoneChange={onContactPhoneChange}
        onContactMessageChange={onContactMessageChange}
        onContactSubmit={onContactSubmit}
      />

      <AddressSection />

      <SiteFooter />
    </>
  );
};

export default MainContent;
