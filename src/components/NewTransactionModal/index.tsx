import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { api } from '../../services/api';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {
    const { addTransaction } = useTransactions();

    const [type, setType] = useState('income');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await addTransaction({
            type,
            title,
            amount,
            category
        });

        setType('income');
        setTitle('');
        setAmount(0);
        setCategory('');

        onRequestClose();
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
                <button 
                    type="button" 
                    onClick={onRequestClose} 
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="close modal" />
                </button>
                <Container onSubmit={handleSubmit}>
                    <h2>New transaction</h2>
                    <input 
                        type="text" 
                        placeholder="Title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        />
                    <input 
                        type="number" 
                        placeholder="Amount"
                        value={amount}
                        onChange={event => setAmount(Number(event.target.value))}
                    />
                    <TransactionTypeContainer>
                        <RadioBox 
                            type="button" 
                            onClick={() => setType('income')}
                            isActive={type === 'income'}
                            activeColor="green"
                        >
                            <img src={incomeImg} alt="income icon" />
                            <span>Income</span>
                        </RadioBox>
                        <RadioBox 
                            type="button" 
                            onClick={() => setType('outcome')}
                            isActive={type === 'outcome'}
                            activeColor="red"
                        >
                            <img src={outcomeImg} alt="outcome icon" />
                            <span>Outcome</span>
                        </RadioBox>
                    </TransactionTypeContainer>
                    <input 
                        type="text" 
                        placeholder="Category"
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />
                    <button type="submit">Save</button>
                </Container>
        </Modal>
    );
}
