import Icon from "@/components/ui/icon";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Выберите способ связи
          </h3>
          <p className="text-gray-600">Свяжитесь с нами удобным способом</p>
        </div>

        <div className="space-y-3">
          <a
            href="tel:+79245401717"
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-xl border-2 border-orange-200 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="Phone" className="text-white" size={28} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Позвонить</div>
              <div className="text-sm text-gray-600">8-924-540-17-17</div>
            </div>
          </a>

          <a
            href="https://t.me/element5_irk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl border-2 border-blue-200 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="Send" className="text-white" size={28} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Telegram</div>
              <div className="text-sm text-gray-600">Написать в Telegram</div>
            </div>
          </a>

          <a
            href="https://t.me/+HKTSqQ6MPBwwZTMy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl border-2 border-purple-200 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="Users" className="text-white" size={28} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">
                Перейти в группу
              </div>
              <div className="text-sm text-gray-600">Telegram группа</div>
            </div>
          </a>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
