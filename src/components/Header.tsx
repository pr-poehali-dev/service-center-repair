import Icon from "@/components/ui/icon";

interface HeaderProps {
  isScrolled: boolean;
  onContactClick: () => void;
}

const Header = ({ isScrolled, onContactClick }: HeaderProps) => {
  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "gap-4" : "flex-col lg:flex-row gap-4"}`}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className={`bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${isScrolled ? "h-12 w-12" : "h-16 w-16"}`}
              >
                <Icon
                  name="Zap"
                  className="text-white"
                  size={isScrolled ? 24 : 32}
                />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <h1
                className={`font-bold text-gray-900 transition-all duration-300 ${isScrolled ? "text-lg" : "text-2xl"}`}
              >
                Сервис Клик
              </h1>
              {!isScrolled && (
                <p className="text-sm text-gray-600">
                  Профессиональный ремонт техники
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Icon name="Phone" className="text-orange-600" size={18} />
            <button
              onClick={onContactClick}
              className={`font-bold text-orange-600 hover:text-orange-700 transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"}`}
            >
              83952407405
            </button>
          </div>

          {!isScrolled && (
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="text-gray-600" size={18} />
                <div className="text-gray-700">
                  г. Иркутск, ул. Рабочего Штаба 78
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Clock" className="text-gray-600" size={18} />
                <div className="text-gray-700">
                  <div>Пн-Пт: 9:00-19:00</div>
                  <div className="text-xs">Сб: 10:00-16:00, Вс: выходной</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;