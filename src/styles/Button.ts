import styled, { css } from "styled-components";

interface IButtonProps {
    variant: 'primary' | 'error' | 'inline';
    width?: string;
}

const ButtonStyle = {
    primary: css` 
        background: var(--primary);
        color: var(--secondary);
        padding: 0 1rem;
        text-transform: uppercase;
        border: 2px solid var(--secondary);
        width: 100%;

        &:hover {
        background-color: var(--secondary);
        border-color: var(--primary);
        color: var(--primary);
    }
    `,
    error: css`
        background: var(--error);
    `,
    inline: css`
        background: none;
        color: var(--primary);
        text-decoration: none;
        font-weight: bold;

        &:disabled {
            color: var(--gray-light);
            border: none;
        }
    `,
}

const ButtonDefaultStyle = css`
    min-height: 3rem;
    padding: 0 1rem;
    font-weight: 600;
`

export const Button = styled.button<IButtonProps>`
    ${({ variant }) => ButtonStyle[variant]}
    ${ButtonDefaultStyle}
`;