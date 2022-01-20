import styled from 'styled-components';

interface ContainerProps {
    isTotal: boolean
}

export const Container = styled.div<ContainerProps>`    
    background: ${({isTotal}: ContainerProps) => isTotal ? 'var(--green)' : 'var(--shape)'};
    border-radius: 0.25rem;
    padding: 2rem;
    color: ${({isTotal}: ContainerProps) => isTotal ? 'var(--white)' : 'var(--text-title)'};
    width: 100%;

    strong {
        display: block;
        margin-top: 1rem;
        font-weight: 500;
        font-size: 2rem;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;