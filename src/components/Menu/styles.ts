import styled from 'styled-components';

export const Container = styled.nav`
    color: var(--white);
    height: 3rem;
    width: 100%;
    border-bottom: 1px solid var(--gray-light);
    border-top: 1px solid var(--gray-light);
    display: flex;

    ul {
        list-style: none;
        margin: 0 auto;
        display: flex;
        align-items: center;        

        li {
            margin-right: 3.75rem;
            text-transform: uppercase;
            border: 2px solid #000;
            padding: 1px 0;

            a {
                color: var(--white);
                text-decoration: none;

                &:hover {
                    border-bottom: 2px solid var(--primary);
                    cursor: pointer;
                    color: var(--primary);
                }
            }
        }
    }
`;