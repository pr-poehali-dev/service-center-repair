import Icon from "@/components/ui/icon";

interface HeaderProps {
  isScrolled: boolean;
  onContactClick: () => void;
}

const Header = ({ isScrolled, onContactClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm" style={{ height: '64px' }}>
      <div className="container mx-auto px-4" style={{ height: '64px' }}>
        <div className="grid grid-cols-2 items-center gap-4" style={{ height: '64px' }}>
          <div className="flex items-center gap-3">
            <div className="relative" style={{ width: '40px', height: '40px' }}>
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={20} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
            </div>
            <h1 className="font-bold text-gray-900" style={{ fontSize: '17px', lineHeight: '1.2' }}>
              Сервис Клик
            </h1>
          </div>

          <div className="flex items-center justify-end">
            <button
              onClick={onContactClick}
              className="flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700"
              style={{ fontSize: '15px' }}
            >
              <Icon name="Phone" size={16} />
              <span>Позвонить</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;