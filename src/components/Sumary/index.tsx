import { SummaryCard } from '../SummaryCard'
import { CardContainer, Container } from './styles'

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { TransactionsTable } from '../TransactionsTable';
import { useTransactions } from '../../hooks/useTransactions';

export const Sumary = () => {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction)=> {
        if (transaction.type === 'income') {
            acc.incomeTotal += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.outcomeTotal += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        incomeTotal: 0,
        outcomeTotal: 0,
        total: 0
    })

    return (
        <Container>
            <CardContainer>
                <SummaryCard title="Income" icon={incomeIcon} amount={summary.incomeTotal}/>
                <SummaryCard title="Outcome" icon={outcomeIcon} amount={summary.outcomeTotal}/>
                <SummaryCard title="Total" icon={totalIcon} isTotal amount={summary.total}/>
            </CardContainer>
            <TransactionsTable />
        </Container>
    )
}