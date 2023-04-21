import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

import header from './header.css'
import kasaLogo from '../../assets/Kasa_logo.svg'

function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <img className='logoKasa' src={kasaLogo} alt="Logo du site internet Kasa"/>
            <nav className='navLinks'>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                <Link to="/informations" className={location.pathname === '/informations' ? 'active' : ''}>À Propos</Link>
            </nav>
        </header>
    )
}

export default Header