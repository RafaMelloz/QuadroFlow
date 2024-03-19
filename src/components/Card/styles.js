import styled, {css} from "styled-components";

export const CardContainer = styled.div`
    ${({ theme, divColor }) => css`
        background-color: ${theme.cardBG};
        color: ${theme.textColor1};
        border-radius: 1rem;
        padding: 2rem 1rem 1rem 1rem ;
        margin-bottom: 1rem;
        position: relative;

        div{
            position: absolute;
            width: 3rem;
            height: .2rem;
            background-color: ${divColor || 'red'};
            margin-bottom: 1rem;
            top: 1rem;
            left: -.4rem;
            border-radius: 1rem;
        }
    
        p{
            font-size: 1.4rem;
            text-align: justify;
            word-wrap: break-word;
        }

    `}

`