import header from './header.css'
import kasaLogo from '../../assets/Kasa_logo.svg'

function Header() {
    return (
        <header className='header'>
            <a className='logoKasa'>
                <img src={kasaLogo} alt="Logo du site internet Kasa"/>
            </a>
            <nav className='navLinks'>
                <a href="/">Accueil</a>
                <a href="/">À Propos</a>
            </nav>
        </header>
    )
}

export default Header