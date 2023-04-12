import {Link} from "react-router-dom";
import styled from 'styled-components'
import kasaLogo from '../../assets/Kasa_logo.png'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 60px 0;
  padding: 0 70px 0 25px;
`

const StyledLogo = styled.img`
  width: 200px;
  height: 100%;
`

function Header() {
    return (
        <StyledNav>
            <StyledLogo src={kasaLogo} ></StyledLogo>
            <div>
                <Link to="/">Accueil</Link>
            </div>
        </StyledNav>
    )
}

export default Header