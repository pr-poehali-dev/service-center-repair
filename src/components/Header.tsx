import Icon from "@/components/ui/icon";

interface HeaderProps {
  isScrolled: boolean;
  onContactClick: () => void;
}

const Header = ({ isScrolled, onContactClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between gap-4 h-full">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Сервис Клик
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Icon name="Phone" className="text-orange-600" size={18} />
            <button
              onClick={onContactClick}
              className="font-bold text-orange-600 hover:text-orange-700 text-base"
            >
              83952407405
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;