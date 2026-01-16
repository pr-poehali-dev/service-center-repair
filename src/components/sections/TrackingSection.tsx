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

interface TrackingSectionProps {
  orderNumber: string;
  trackingVisible: boolean;
}

const TrackingSection = ({ orderNumber, trackingVisible }: TrackingSectionProps) => {
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
      <section id="tracking-widget" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-orange-200 shadow-xl">
              <CardHeader className="text-center bg-gradient-to-r from-orange-50 to-white">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl sm:text-3xl text-gray-900">
                  Проверить статус ремонта
                </CardTitle>
                <CardDescription className="text-lg">
                  Введите номер заказа для отслеживания
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="relative flex flex-col items-center justify-center min-h-[250px]">
                  <div
                    id="livesklad-widget"
                    className="w-full max-w-md ml-2"
                  ></div>

                  {!hideLoader && (
                    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-4 z-10">
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-orange-200 rounded-full"></div>
                        <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-gray-900 font-medium">
                          Загрузка виджета отслеживания
                        </p>
                        <p className="text-sm text-gray-500">
                          Подождите несколько секунд...
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {trackingVisible && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-orange-200 shadow-xl">
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
                    {
                      status: "Принят в работу",
                      date: "10 января, 10:00",
                      done: true,
                    },
                    {
                      status: "Диагностика завершена",
                      date: "10 января, 14:30",
                      done: true,
                      note: "Требуется замена экрана",
                    },
                    {
                      status: "В процессе ремонта",
                      date: "11 января",
                      done: false,
                      current: true,
                    },
                    {
                      status: "Готов к выдаче",
                      date: "Ожидается",
                      done: false,
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          item.current
                            ? "bg-orange-600 animate-pulse"
                            : item.done
                              ? "bg-green-100"
                              : "bg-gray-200"
                        }`}
                      >
                        <Icon
                          name={
                            item.current
                              ? "Wrench"
                              : item.done
                                ? "CheckCircle2"
                                : "Circle"
                          }
                          className={
                            item.current
                              ? "text-white"
                              : item.done
                                ? "text-green-600"
                                : "text-gray-400"
                          }
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {item.status}
                        </h4>
                        <p className="text-sm text-gray-600">{item.date}</p>
                        {item.note && (
                          <p className="text-sm text-gray-500 mt-1">
                            {item.note}
                          </p>
                        )}
                        {item.current && (
                          <Badge className="mt-2 bg-orange-600">
                            Текущий этап
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Bell" className="text-orange-600" size={24} />
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Уведомления
                    </h4>
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
    </>
  );
};

export default TrackingSection;
