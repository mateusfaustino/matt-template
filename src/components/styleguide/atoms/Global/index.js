import { createGlobalStyle } from 'styled-components';
import {colors} from '../Colors';
import scroll from '../scroll';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background: ${(props)=>props.theme=='dark'? colors.background.dark:colors.background.main};
    color:${(props)=>props.theme=='dark'? colors.background.onDarkText:colors.background.onLightText};
    ${scroll}
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:#000;
  }
`
const Global = ({theme}) => 
  <GlobalStyle
    theme={theme}
  />
    
export default Global
