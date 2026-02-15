import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  isScrolled: boolean;
  onContactClick: () => void;
  onRouteClick: () => void;
}

const Header = ({ isScrolled, onContactClick, onRouteClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      style={{
        height: "72px",
        minHeight: "72px",
        maxHeight: "72px",
      }}
    >
      <div
        className="w-full px-4"
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: window.innerWidth > 480 ? "12px" : "8px",
            flexShrink: 1,
            minWidth: 0,
          }}
        >
          <div
            style={{
              width: window.innerWidth > 480 ? "48px" : "40px",
              height: window.innerWidth > 480 ? "48px" : "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Icon name="Zap" className="text-white" size={24} />
            <div
              style={{
                position: "absolute",
                top: "-2px",
                right: "-2px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                border: "2px solid white",
              }}
            />
          </div>
          <h1
            style={{
              fontSize: window.innerWidth > 480 ? "32px" : "24px",
              fontWeight: "700",
              color: "#111827",
              margin: 0,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Сервис Клик
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: window.innerWidth > 768 ? "24px" : "8px",
          }}
        >
          <div
            style={{
              display: window.innerWidth > 768 ? "flex" : "none",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                color: "#6b7280",
              }}
            >
              <Icon name="Clock" size={14} className="text-orange-600" />
              <span>Пн-Пт: 9:00-19:00, Сб-Вс: 10:00-18:00</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                color: "#6b7280",
              }}
            ></div>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#f97316",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ea580c";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f97316";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Icon name="Menu" className="text-white" size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-start justify-center pt-20 p-4 animate-in fade-in duration-200"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[85vh] flex flex-col animate-in slide-in-from-top duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 pb-4 flex-shrink-0">
              <h3 className="text-2xl font-bold text-gray-900">Навигация</h3>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <Icon name="X" className="text-gray-600" size={24} />
              </button>
            </div>

            <div className="space-y-2 px-6 pb-6 overflow-y-auto flex-1">
              <button
                onClick={() => scrollToSection("repairs")}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-xl border-2 border-orange-200 transition-all duration-300 hover:shadow-lg group text-left"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon name="Wrench" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Услуги</div>
                  <div className="text-sm text-gray-600">
                    Что мы ремонтируем
                  </div>
                </div>
              </button>

              <button
                onClick={() => scrollToSection("workflow")}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl border-2 border-blue-200 transition-all duration-300 hover:shadow-lg group text-left"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon name="ListChecks" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Процесс</div>
                  <div className="text-sm text-gray-600">
                    Как проходит ремонт
                  </div>
                </div>
              </button>

              <button
                onClick={() => scrollToSection("brands")}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl border-2 border-purple-200 transition-all duration-300 hover:shadow-lg group text-left"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon name="Sparkles" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Бренды</div>
                  <div className="text-sm text-gray-600">
                    Ремонтируем все бренды
                  </div>
                </div>
              </button>

              <button
                onClick={() => scrollToSection("equipment")}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl border-2 border-green-200 transition-all duration-300 hover:shadow-lg group text-left"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon name="Settings" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Оборудование
                  </div>
                  <div className="text-sm text-gray-600">Наши инструменты</div>
                </div>
              </button>

              <button
                onClick={() => scrollToSection("reviews")}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 rounded-xl border-2 border-yellow-200 transition-all duration-300 hover:shadow-lg group text-left"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon name="Star" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Отзывы</div>
                  <div className="text-sm text-gray-600">
                    Что говорят клиенты
                  </div>
                </div>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 rounded-xl border-2 border-red-200 transition-all duration-300 hover:shadow-lg group text-left"
              >
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon name="MessageSquare" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Контакты</div>
                  <div className="text-sm text-gray-600">Свяжитесь с нами</div>
                </div>
              </button>

              <button
                onClick={() => scrollToSection("map")}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 rounded-xl border-2 border-cyan-200 transition-all duration-300 hover:shadow-lg group text-left"
              >
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon name="Map" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Карта</div>
                  <div className="text-sm text-gray-600">
                    Наше местоположение
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  onRouteClick();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 rounded-xl border-2 border-indigo-200 transition-all duration-300 hover:shadow-lg group text-left"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon name="Navigation" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Построить маршрут
                  </div>
                  <div className="text-sm text-gray-600">Как добраться</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
