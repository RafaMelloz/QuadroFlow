import styled, {css} from "styled-components";

export const Nav = styled.nav`
    ${({ theme }) => css`
        width: 100%;
        padding: 1rem 0rem;
        display: flex;
    justify-content: space-between;
        max-width: 120rem;
        margin: 0 auto;

    `}


    h1.logo{
        font-size: 3rem;
        text-align:center;

        color:transparent;
        background:linear-gradient( 120deg, #bd34fe 30%, #41d1ff );
        background-clip: text;
    }


    @media screen and (max-width:580px) {
        padding:1rem 2rem;
    }

`