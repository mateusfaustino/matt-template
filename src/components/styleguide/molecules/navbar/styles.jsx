import styled from "styled-components"
import Spacing from "../../components/styleguide/atoms/spacing"
import { useSpacing } from "../../contexts/SpacingContext"

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:4px ${spacing.margin};
    right:0;
    .nav__icon{
        height:auto ;
        width: 32px;
        max-width:40px;
        
        &.nav__close{
            display:${props => props.icon==='close' ? 'block' : 'none' } ;
        }
        &.nav__bars{
            display:${props => props.icon==='open' ? 'block' : 'none' } ;
        }
        &:hover{
            cursor: pointer;
        }
    }

    @media screen and (min-width: 755px) {

        .nav__icon {
            display: none !important;
        }
        

    }

`

const Container = (props)=>{
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}
export default Container