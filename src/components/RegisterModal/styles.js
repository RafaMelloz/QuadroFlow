import styled, { css } from "styled-components";

export const ModalContent = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        background-color: ${theme.modalBG};
        color: ${theme.textColor1};
        padding: 1rem;
        
        .modalHeader{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3{
                font-size: 1.8rem;
            }

            svg{
                font-size: 2rem;
                cursor: pointer;
            }
        }

        form{
            width: 100%;

            textarea{
                width: 100%;
                resize: none;
            }
        }
        
    `}
`