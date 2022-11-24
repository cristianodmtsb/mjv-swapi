import styled from 'styled-components';

export const Container = styled.nav`
    color: var(--white);
    max-height: 3rem;
    width: 100%;
    border-bottom: 1px solid var(--gray-light);
    border-top: 1px solid var(--gray-light);
    display: flex;

    ul {
        list-style: none;
        margin: 0.75rem auto;
        display: flex;
        max-width: 64rem;

        li {
            margin-right: 4rem;
            text-transform: uppercase;

            &:hover {
                border-bottom: 2px solid var(--primary);
            }
        }
    }
`;