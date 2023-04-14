import kasaLogoFooter from '../../assets/Kasa_logo_footer.svg'
import footer from './footer.css'
function Footer() {
    return(
        <footer className="divFooter">
            <img className="kasaLogoFooter" src={kasaLogoFooter} alt="Logo du site internet Kasa"/>
            <p className="pFooter" >© 2020 Kasa. All rights reserved </p>
        </footer>
    )
}

export default Footer