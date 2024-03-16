import * as Styled from './styles.js'
export const Card = ({ data }) =>{
    return (
        <Styled.CardContainer divColor={data.urgency}>
            <div></div>
            <p>
               {data.text}
            </p>
        </Styled.CardContainer>
    )
};