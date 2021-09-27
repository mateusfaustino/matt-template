import { colors } from './Colors'
import border from './Borders'
const Scroll = `
::-webkit-scrollbar {
    width: 8px;
    border-radius: ${border.border8};
    border: 2px solid ${colors.primary.main};
}

::-webkit-scrollbar-track {
    background-color: ${colors.primary.main};
    border-radius: ${border.border8};
}

::-webkit-scrollbar-thumb {
    background: ${colors.primary.main}; 
    border-radius: ${border.border8};
    border: 2px solid ${colors.primary.light};
}

::-webkit-scrollbar-thumb:hover {
    background: ${colors.primary.main}; 
}

@media (min-width:$mobile-breakpoint) {
    ::-webkit-scrollbar {
        width: 10px;
    }
}
`
export default Scroll
