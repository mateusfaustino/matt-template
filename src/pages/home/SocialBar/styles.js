import styled from 'styled-components'
import { colors } from '../../../components/styleguide/atoms/Colors'
export const Container = styled.ul`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    border-top: 1px solid ${colors.primary.main}; 
    border-bottom: 1px solid ${colors.primary.main};
    padding:4px 0;
    width:100%; 
    margin-top:16px;
    max-width:700px;
`
export const Item = styled.li`
    svg{
        width:auto;
        height:24px;
        fill:${colors.primary.main};
    }
`