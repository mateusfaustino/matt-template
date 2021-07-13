import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {palette} from '../../atoms/colors'
import {ReactComponent as SVGLogo} from '../../../../assets/logo.svg'

const Brand = styled.h2`
    letter-spacing: 4px;
    font-weight: 200;
    svg{
        width:auto;
        height:100%;
    }
`
const StyledLogo= styled.div`
    
    a{
        
    }
    @media screen and (min-width: 755px) {
        
    }
`

const Logo = (props) => {
    return (
        <StyledLogo className={props.isActive? "active": ""}>
            <Link to='/'>
                <Brand><SVGLogo/></Brand>
            </Link>
        </StyledLogo>
    )
}

export default Logo
