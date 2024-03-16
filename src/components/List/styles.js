import styled, {css} from "styled-components";

export const ContentList = styled.div`
    ${({theme}) => css`
        .Column{
            display: flex;
            flex-direction: column;
        }

        .header-list{
            background-color: ${theme.thirdColor};
            padding: 1rem;
            border-radius: 1rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;


            h3{
                font-size: 1.6rem;
                color: transparent;
                background: linear-gradient( 120deg, #bd34fe 30%, #41d1ff );
                background-clip: text;
            }

            button{
                border: none;
                background-color: transparent;
                color: #dd1d1d;
                cursor:pointer;
                font-size: 2rem;
                height: 2rem;
                width: 2rem;
            }
        }

        .list{
            background-color: ${theme.thirdColor};
            width: 100%;
            padding: 1rem;
            border-radius: 1rem;
            margin-top: 1rem;
            max-height: 80vh;

            button{
                border: none;
                margin: 1rem auto;
                display: block;
                font-size: 1.4rem;
                display: flex;
                align-items: center;
                min-width: 12rem;
                justify-content: space-around;
                padding: 1rem;
                border-radius: 1rem;
                background-color: ${theme.buttonAdd};
                color: ${theme.buttonAddText};

                cursor: pointer;
            }

            .sorti{
                max-height: 46rem;
                overflow-y: auto;
            }
            

            .sorti::-webkit-scrollbar {
                width: .6rem;
                border-radius: 1rem;
                margin-left: 5rem;

            }

            .sorti::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px grey; 
                border-radius: 10px;
            }   

            .sorti::-webkit-scrollbar-thumb {
                background: red; 
                border-radius: 1rem;
                
            }
        }
    `}

`