import { useState } from 'react';
import * as Styled from './styles'
import { FaPlus } from "react-icons/fa";
import { List } from '../List';

export const ListSection = () => {
    const [qntList, setQntList] = useState([]);

    const addList = () => {
        if (qntList.length < 4) {
            setQntList(prevList => [...prevList, `Lista ${prevList.length + 1}`]);
        }
    }

    const removeList = (index) => {
        setQntList(prevList => {
            const newList = [...prevList];
            newList.splice(index, 1);
            return newList;
        });
    }

    return (
        <Styled.ListContainer >
            {qntList.map((list, index) => (
                <List key={index} index={index} title={list} removeList={removeList} />
            ))}

            {qntList.length === 4 ?
                null :
                <button className='addButton' onClick={addList}><FaPlus />  Adicionar nova lista</button>
            }
        </Styled.ListContainer>


    );
};
