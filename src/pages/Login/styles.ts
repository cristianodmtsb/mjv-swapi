import styled from "styled-components";

export const Main = styled.main`
    width: 18rem;
    margin: 4rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
        margin-bottom: 3rem;
    }

    button {
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }

    a {
        text-decoration: none;
        color: var(--primary);
        font-weight: 500;
        font-size: 0.875rem;        
    }
`;