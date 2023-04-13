import styled from "styled-components";
import colors from "../../utils/styles/colors";

const CardWrapper = styled.div`
  display: flex;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, #FD6868 0%, rgba(0, 0, 0, 0.9) 90%);
  &:hover {
    cursor: pointer;
  }
`

const CardTitle=styled.span`
color: white;
`

function Card() {
    return (
        <CardWrapper>
            <CardTitle>Titre de la location</CardTitle>
        </CardWrapper>
    )
}

export default Card