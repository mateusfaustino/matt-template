import styled from "styled-components"
import Spacing from "../../components/styleguide/atoms/spacing"
import { useSpacing } from "../../contexts/SpacingContext"
const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
    margin: 50px ${props=>props.margin};
    

`

const Container = (props)=>{
    const {spacing, Grid} = useSpacing()
    const margin = spacing.margin
    return(
        <StyledContainer margin={margin}>
            {props.children}
        </StyledContainer>
    )
}
export default Container