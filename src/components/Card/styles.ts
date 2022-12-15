import styled from 'styled-components';

export const Item = styled.li`
    width: 12rem;
    min-height: 13rem;
    background-color: var(--gray-dark);
    padding: 1rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;

    h3 {
        color: var(--primary);
        font-weight: 400;
        font-size: 1rem;
        padding-bottom: 1rem;
    }

    a {
        color: var(--primary);
        text-decoration: none;
    }
`;