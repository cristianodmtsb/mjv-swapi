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
    `,
    error: css`
        background: var(--error);
    `,
    inline: css`
        background: none;
        color: var(--primary);
        text-decoration: none;
        font-weight: bold;
    `,
}

const ButtonDefaultStyle = css`
    min-height: 3rem;
    padding: 0 1rem;
    font-weight: 600;
    text-transform: uppercase;
    border: 2px solid var(--secondary);

    &:hover {
        background-color: var(--secondary);
        border-color: var(--primary);
        color: var(--primary);
    }
`

export const Button = styled.button<IButtonProps>`
    ${({ variant }) => ButtonStyle[variant]}
    ${ButtonDefaultStyle}
    width: ${({ width }) => width || '100%' } ;
`;