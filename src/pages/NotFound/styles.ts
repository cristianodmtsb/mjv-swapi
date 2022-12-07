import styled from "styled-components";

export const Main = styled.main`
    width: 24rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    img {
        width: 40%;
        margin: 2rem auto;
    }

    a {
        text-decoration: none;
        color: var(--primary);
        font-weight: 500;
        font-size: 1rem;        
    }
`;