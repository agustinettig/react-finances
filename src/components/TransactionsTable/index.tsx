import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export const TransactionsTable = () => {
    const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {transaction.type === 'outcome' ? '- ' : ''}
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR')
                                .format(new Date(transaction.date))}
                            </td>
                        </tr>  
                    ))}                  
                </tbody>
            </table>
        </Container>
    )
}
