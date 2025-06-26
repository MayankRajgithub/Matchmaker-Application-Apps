import { useLocation } from 'react-router-dom';

function Header(){
    const location = useLocation();

    const getTitle = () => {
      switch (location.pathname) {
        case '/':
          return 'Dashboard';
        case '/contact-us':
          return 'Contact Us';
        case '/settings':
          return 'Settings';
        default:
          return '';
      }
    };
  
    return(
<>
<div className="bg-white shadow-sm px-4 py-3 border-bottom d-flex justify-content-between align-items-center" style={{
      position: "fixed",
      top: 0,
      left: "250px", // offset for sidebar
      right: 0,
      zIndex: 1000,
      height: "64px"
    }}>
      <h5 className="mb-0">{getTitle()}</h5>
      <div>
        {/* Optional: Profile icon, notification, etc. */}
      </div>
    </div>
</>
    );
}

export default Header;