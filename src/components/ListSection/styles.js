import styled, {css} from "styled-components";

export const ListContainer = styled.main`
    ${({theme}) => css`
        max-width: 120rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax( 28.5rem, 4fr));
        gap: 2rem;

        .addButton{
            background-color: ${theme.buttonAdd};
            border: none;
            height: 4.4rem;
            border-radius: 1rem;
            font-size: 1.8rem;
            cursor:pointer;
            color: ${theme.buttonAddText};

            display: flex;
            align-items: center;
            justify-content: center;

            svg{
                margin-right: 1rem;
            }
        }
    `}
`