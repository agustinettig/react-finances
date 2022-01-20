import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 2rem;
        }

        td {
            padding: 1rem 1.5rem;
            background: var(--shape);
            border: 0;
            border-radius: 0.25rem;
            color: var(--text-body);

            &:first-child {
                color: var(--text-title);
            }            
        }

        .income {
            color: var(--green);
        }

        .outcome {
            color: var(--red);
        }
    }
`;