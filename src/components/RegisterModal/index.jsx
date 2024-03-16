import * as React from 'react';
import * as Styled from './styles'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoCloseSharp } from 'react-icons/io5';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    boxShadow: 24,
    borderRadius: '1rem'
};

export default function RegisterModal({ open, handleClose, addCard, textValue, slcValue, handleChange }) {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Styled.ModalContent>
                    <div className='modalHeader'>
                        <h3>Escreva sua tarefa:</h3>
                        <IoCloseSharp onClick={handleClose} />
                    </div>

                    <form className="modalContent">
                        <textarea
                            name="text"
                            id="inp-Text"
                            cols="30"
                            rows="10"
                            placeholder='Escreva sua tarefa...'
                            value={textValue}
                            onChange={handleChange}
                        />

                        <label htmlFor="inp-color">Selecione a urgência</label><br />
                        <select
                            name="urgency"
                            id="inp-color"
                            value={slcValue}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecione</option>
                            <option value="Urgente">Urgente</option>
                            <option value="Meio termo">Meio termo</option>
                            <option value="Sem preocupação">Sem preocupação</option>
                        </select>

                        <button type="button" onClick={addCard}>Adicionar Card</button>
                    </form>
                </Styled.ModalContent>
            </Box>
        </Modal>
    );
}
