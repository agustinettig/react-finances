import { Container, Title } from './styles';

interface SummaryCardProps {
    title: string;
    icon: string;
    isTotal?: boolean;
    amount: number;
}

export const SummaryCard = ({title, icon, isTotal = false, amount}: SummaryCardProps) => {    
    return (
        <Container isTotal={isTotal}> 
            <Title>
                <p>{title}</p>
                <img src={icon} alt="icone" />
            </Title>
            <strong>{
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(amount)}
            </strong>
        </Container>
    );
}