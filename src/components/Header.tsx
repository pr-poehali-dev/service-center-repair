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
        <div style={{ display: 'flex', alignItems: 'center', gap: window.innerWidth > 480 ? '12px' : '8px', flexShrink: 1, minWidth: 0 }}>
          <div 
            style={{
              width: window.innerWidth > 480 ? '48px' : '40px',
              height: window.innerWidth > 480 ? '48px' : '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              position: 'relative',
              flexShrink: 0
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
              fontSize: window.innerWidth > 480 ? '32px' : '24px',
              fontWeight: '700',
              color: '#111827',
              margin: 0,
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}
          >
            Сервис Клик
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href="tel:83952407405"
            style={{
              display: window.innerWidth > 480 ? 'flex' : 'none',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: '700',
              color: '#ea580c',
              background: 'transparent',
              textDecoration: 'none',
              padding: '6px 8px',
              borderRadius: '8px',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fff7ed'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span>8-3952-407-405</span>
          </a>
          <button
            onClick={onContactClick}
            style={{
              display: window.innerWidth <= 480 ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 0 4px rgba(34, 197, 94, 0.2)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Icon name="Phone" size={20} className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;