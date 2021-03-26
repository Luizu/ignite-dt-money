import Modal from 'react-modal'

import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import closeImage from '../../assets/close.svg'
import { Container, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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
        <img src={closeImage} alt="Fechar modal"/>
      </button>

      <Container>
      <h2>Cadastrar transação</h2>

      <input placeholder="Titulo"/>

      <input type="number" placeholder="Valor"/>

      <TransactionTypeContainer>
      <button 
      type="button"
      >
        <img src={incomeImage} alt="Entrada"/>
        <span>Entrada</span>
      </button>
      
      <button 
      type="button"
      >
        <img src={outcomeImage} alt="Saida"/>
        <span>Saida</span>
      </button>

      </TransactionTypeContainer>

      <input placeholder="Categoria"/>

    <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

