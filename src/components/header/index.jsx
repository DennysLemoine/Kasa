import {Link} from "react-router-dom";
import styled from 'styled-components'
import colors from "../../utils/styles/colors";
import fonts from "../../utils/styles/fonts";
import kasaLogo from '../../assets/Kasa_logo.svg'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 60px 0;
  padding: 0 70px 0 25px;
  font-family: ${fonts.primary.name};
`

const StyledLogo = styled.img`
  width: 210px;
  height: 100%;
`

const StyledLink = styled(Link)`
  padding: 5px 20px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 17px;
`

function Header() {
    return (
        <StyledNav>
            <StyledLogo src={kasaLogo}></StyledLogo>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink>À Propos</StyledLink>
            </div>
        </StyledNav>
    )
}

export default Header