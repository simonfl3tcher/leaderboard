// CSS/Assets
import './Header.scss';
import logo from '../../assets/logo.svg';

// JS
import { Link } from 'react-router';

const Header = () =>
  <div className="Header">
    <header>
      <div className="pull-left comp">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="pull-right links comp">
        <Link className="header-link" to="match/new">
          Create Match!
        </Link>
      </div>
    </header>
  </div>

export default Header;
