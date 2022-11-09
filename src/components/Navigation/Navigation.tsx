import './styles.scss';
import Logo from './Logo';

const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Logo />
        <div className="navbar__links-wrapper">
          <ul className="navbar__links">
            <li>Features</li>
            <li>Pricing</li>
            <li>Apps</li>
            <li>Blog</li>
            <li>Help</li>
            <li>My Account</li>
          </ul>
          <button>Open Vault</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
