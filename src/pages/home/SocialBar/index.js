import React from 'react'
import {Container, Item} from './styles'
import { useSpacing } from '../../../contexts/SpacingContext'
import {FaGithub,FaLinkedin,FaWhatsapp} from 'react-icons/fa'
const SocialBar = (props) => {
  
  return(
        <Container>
          <a  target="_blank" rel="noreferrer"  href='https://github.com/mateusfaustino' >
            <Item>
              <FaGithub/>
            </Item>
          </a>
          <a  target="_blank" rel="noreferrer"  href='https://github.com/mateusfaustino' >
            <Item>
              <FaLinkedin/>
            </Item>
          </a>

          <a  target="_blank" rel="noreferrer"  href='https://github.com/mateusfaustino' >
            <Item>
                <FaWhatsapp/>
            </Item>
          </a>
        </Container>
    )
}
export default SocialBar