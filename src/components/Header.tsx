import Icon from "@/components/ui/icon";

interface HeaderProps {
  isScrolled: boolean;
  onContactClick: () => void;
}

const Header = ({ isScrolled, onContactClick }: HeaderProps) => {
  return (
    <header 
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
      style={{
        height: '72px',
        minHeight: '72px',
        maxHeight: '72px'
      }}
    >
      <div 
        className="w-full px-4"
        style={{
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1280px',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div 
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              position: 'relative'
            }}
          >
            <Icon name="Zap" className="text-white" size={24} />
            <div 
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                border: '2px solid white'
              }}
            />
          </div>
          <h1 
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#111827',
              margin: 0,
              lineHeight: 1
            }}
          >
            Сервис Клик
          </h1>
        </div>

        <button
          onClick={onContactClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '16px',
            fontWeight: '700',
            color: '#ea580c',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '8px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fff7ed'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <Icon name="Phone" size={18} />
          <span>8-3952-407-405</span>
        </button>
      </div>
    </header>
  );
};

export default Header;