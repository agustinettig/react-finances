import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    date: string
}

type TransactionInput = Omit<Transaction, 'id' | 'date'>

interface TransactionsContextData {
    transactions: Transaction[],
    addTransaction: (transactionInput: TransactionInput) => Promise<void>    
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);



export const TransactionsProvider: React.FC = function({ children }) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => response.data)
            .then(data => setTransactions(data.transactions));
    }, []);

    async function addTransaction(transactionInput: TransactionInput) {
        const transaction = {
            ...transactionInput,
            date: new Date()
        };    
        const response = await api.post('transactions', transaction);
        setTransactions([...transactions, response.data.transaction]);
    }

    return (
        <TransactionsContext.Provider value={{
            transactions,
            addTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export const useTransactions = () => {
    return useContext(TransactionsContext);
};