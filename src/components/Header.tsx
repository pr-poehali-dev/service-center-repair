import Icon from "@/components/ui/icon";

interface HeaderProps {
  isScrolled: boolean;
  onContactClick: () => void;
}

const Header = ({ isScrolled, onContactClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-2 py-3 min-h-[68px]">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="relative">
              <div className="h-11 w-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Zap" className="text-white" size={22} />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900 whitespace-nowrap">
              Сервис Клик
            </h1>
          </div>

          <button
            onClick={onContactClick}
            className="flex items-center gap-1.5 font-bold text-orange-600 hover:text-orange-700 text-sm sm:text-base whitespace-nowrap flex-shrink-0"
          >
            <Icon name="Phone" className="text-orange-600 flex-shrink-0" size={16} />
            <span className="hidden xs:inline">8-3952-407-405</span>
            <span className="xs:hidden">Позвонить</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;