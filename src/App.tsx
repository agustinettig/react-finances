import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Sumary } from './components/Sumary';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Sumary />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
    </TransactionsProvider>
  );
}

export default App;
