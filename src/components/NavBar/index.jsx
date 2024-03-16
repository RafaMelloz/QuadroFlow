import { ToggleTheme } from '../ToggleTheme';
import * as Styled from './styles'

export const NavBar = ({toggle}) =>{
    return(
        <Styled.Nav>
            <h1 className='logo'> QuadroFlow</h1>

            <ToggleTheme toggle={toggle}/>
        </Styled.Nav>
    )
};