import styled from "styled-components";

export const Container = styled.div`
    div {
        height: 3rem;
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        border: 2px solid var(--gray-light);
        background-color: var(--gray-dark);
    
        :focus-within {
            border-color: var(--primary);
        } 
        
        input {
            width: 100%;
            height: 100%;   
            padding: 0.25rem;
            border: none;
            color: var(--gray-light);
            background-color: var(--gray-dark);
        }

        label {
            color: var(--gray-light);
            display: flex;
            align-items: center;
            height: 100%;    
            position: absolute;
            top: 0;
            left: 0.75rem;    
            transition: top 0.5s, left 0.3s ease-out;
        }

        input:is(:focus, :not(:placeholder-shown)) + label {
            top: -0.75rem;
            left: 0.625rem;    
            height: fit-content;
            background-color: var(--secondary);    
            padding: 1px 0.25rem;
            font-size: 0.875rem;
        }
    
        input:focus ~ svg {
            color: var(--primary);
        }
    
        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
    
    p {
        margin-top: 2px;
        text-align: left;
        color: var(--error);
    }

    & + & {
        margin-top: 1.5rem;
    }
`;