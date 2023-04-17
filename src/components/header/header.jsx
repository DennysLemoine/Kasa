import {useLocation} from "react-router-dom";
import header from './header.css'
import kasaLogo from '../../assets/Kasa_logo.svg'

function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <a className='logoKasa'>
                <img src={kasaLogo} alt="Logo du site internet Kasa"/>
            </a>
            <nav className='navLinks'>
                <a href="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</a>
                <a href="/" className={location.pathname === './informations/informations' ? 'active' : ''}>À Propos</a>
            </nav>
        </header>
    )
}

export default Header