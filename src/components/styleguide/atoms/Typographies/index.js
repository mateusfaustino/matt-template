 import breakpoints from "../breakpoints"
 import {colors} from "../Colors"
 import { handleDefault } from "../../functions"

 const header_0 = `
    font-size: 48px;
    line-height: 110%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 56px;
    }`

const header_1 = `
    
    font-size: 32px;
    line-height: 120%;
    @media (min-width:${breakpoints.mobile}) {
        font-size: 40px;
    }`

const header_2 =`
    font-size: 24px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 32px;
    }
`
const header_3 =`
    font-size: 20px;
    line-height: 120%;
    @media (min-width:${breakpoints.mobile}) {
        font-size: 22px;
    }
`
const header_4 =`
    font-size: 20px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 24px;
    }
`
const header_5 =`
    font-size: 18px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 22px;
    }
`
const paragraph = `
    font-size: 14px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const paragraph_bold = `
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const paragraph_italic = `
    font-style: italic;
    font-size: 14px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const paragraph_capitalized = `
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const small = `
    font-size: 12px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 14px;
    }
`
const small_bold =`
    font-weight: bold;
    font-size: 12px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 14px;
    }
`
const tiny_italic =`
    
    font-style: italic;
    font-weight: 500;
    font-size: 11px;
    line-height: 110%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 12px;
        line-height: 120%;
    }
`

const scratched = `
    
    font-size: 12px;
    line-height: 150%;
    text-decoration-line: line-through;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 14px;
    }
`

const typographies = {
    header0: header_0,
    header1: header_1,
    header2: header_2,
    header3: header_3,
    header4: header_4,
    header5: header_5,
    paragraph:paragraph,
    paragraphBold:paragraph_bold,
    paragraphCapitalized:paragraph_capitalized,
    paragraphItalic:paragraph_italic,
    small:small,
    smallBold:small_bold,
    smallScratched:scratched,
    tinyItalic:tiny_italic
}

export default typographies