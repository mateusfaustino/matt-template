import styled from "styled-components"
import { useSpacing } from "../../../../contexts/SpacingContext"
import { colors } from "../../atoms/Colors"
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    max-width:700px;
`
export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:10000;
    position:fixed;
    top:0;
    width:100%;
    right:0;
    background:${props=>props.isActive? colors.primary.dark :colors.primary.main};
    transition:0.5s;
    transform: translateY(${props=>props.isDisplayed?`0`:'-52px'});
    padding:2px ${props=>props.spacing.margin};

`

const Nav = (props)=>{
    const { spacing } = useSpacing()
    return(
        <StyledContainer isActive={props.isActive} isDisplayed={props.isDisplayed} spacing={spacing}>
            {props.children}
        </StyledContainer>
    )
}
export default Nav