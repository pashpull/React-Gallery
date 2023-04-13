import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <a href="React-Galary/" className="header__title-link">
          <h1 className="header__title">React Galary</h1>
        </a>
        <nav className="header__nav">
          <Link to="React-Galary/" className="header__link">
            Main
          </Link>
          <Link to="React-Galary/about" className="header__link">
            About
          </Link>
          <Link to="React-Galary/contacts" className="header__link">
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
