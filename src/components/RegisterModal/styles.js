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
                border-radius: 1rem;
                padding: 1rem;
                border: .1rem solid ${theme.secondaryColor};
                background-color: ${theme.thirdColor};
                color: ${theme.textColor1};
            }

            label{
                font-size: 1.6rem;
            }
            select{
                padding: 1rem;
                border-radius: 1rem ;   
                border: .1rem solid ${theme.secondaryColor};
                background-color: ${theme.thirdColor};
                color: ${theme.textColor1};
            }







            button{
                display: block;
                margin: 1rem auto;
                padding: .8rem 1rem;
                border-radius: 2rem;
                border: .1rem solid ${theme.secondaryColor};
                background-color: ${theme.thirdColor};
                color: ${theme.textColor1};
                font-size: 1.4rem;
                cursor: pointer;
                transition: .3s;
            }

            button:hover{
                border: .1rem solid ${theme.thirdColor};
                background-color: ${theme.secondaryColor};
                color: ${theme.primaryColor};
            }
        }
        
    `}
`