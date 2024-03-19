import * as Styled from './styles'
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { Card } from '../Card';
import { useState } from 'react';
import RegisterModal from '../RegisterModal';
import { ReactSortable } from 'react-sortablejs';
import Swal from 'sweetalert2';




export const List = ({ index, removeList, title }) =>{
    const [cards, setCards] = useState([]);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        text: '',
        urgency: ''
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const addCard = () => {
        // Verifica se os campos estão vazios
        if (!formData.text || !formData.urgency) {
            Swal.fire({
                title: "Preencha todos os campos",
                icon: "error"
            });
            return; // Retorna para impedir a adição do cartão
        }

        // Se os campos não estiverem vazios, adiciona o cartão
        const newCard = {
            text: formData.text,
            urgency: formData.urgency
        };
        setCards(prevCards => [...prevCards, newCard]);
        setFormData({
            text: '',
            urgency: ''
        });
        handleClose(); // Fechar o modal após adicionar o cartão
    }


    return  (
        <>
            <Styled.ContentList>
                <div className='header-list' id={index}>
                    <h3>{title}</h3>
                    <button onClick={() => removeList(index)}><IoCloseSharp /></button>
                </div>

                <div className='list'>
                
                    <ReactSortable list={cards} setList={setCards} group="listCard" className='sorti'>
                        {cards.map((card, cardIndex) => (
                            <Card key={cardIndex} data={card} removeCard={() => removeCard(cardIndex)} />
                        ))}
                    </ReactSortable>

                    <button onClick={handleOpen}>Novo Card <FaPlus /></button>
                </div>
            </Styled.ContentList>

            <RegisterModal 
                open={open} 
                handleClose={handleClose} 
                handleChange={handleChange}
                addCard={addCard}
                textValue={formData.text}
                slcValue={formData.urgency}
            />
        </>
    );
};
