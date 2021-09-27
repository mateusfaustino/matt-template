import styled from 'styled-components'
import  typography  from '../../../../components/styleguide/atoms/Typographies'
import { colors } from '../../../../components/styleguide/atoms/Colors'
const StyledContainer = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    ${typography.header2}
    color: ${colors.primary.dark};
    width:auto;

    #text_Mateus{
        animation: name 3s ease 0.4s both ;
    }
    #slogan{
        font-size:20px;
        color:${colors.primary.light};
        animation: name 3s ease 1s both ;
        line-height: 60%;
    }
    
    @keyframes name{
        0%{
            opacity:0 ;
        }
        20%{
            opacity:0  ;
        }
        40%{
            opacity:0 ;
        }
        60%{
            opacity:0 ;
        }
        80%{
            opacity:0 ;
        }
        100%{
            opacity:1 ;
        }
    }
    
`
const Container = (props) => {
    return ( 
        <StyledContainer > 
            {props.children} 
        </StyledContainer>
    )
}
export default Container