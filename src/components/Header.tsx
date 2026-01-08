import Icon from "@/components/ui/icon";

interface HeaderProps {
  isScrolled: boolean;
  onContactClick: () => void;
}

const Header = ({ isScrolled, onContactClick }: HeaderProps) => {
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
            СЕРВИС КЛИК
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
            >
              <Icon name="MapPin" size={14} className="text-orange-600" />
              <span>
                г. Иркутск, ул. Рабочего Штаба 78, здание супермаркета Слата, 2
                этаж
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;