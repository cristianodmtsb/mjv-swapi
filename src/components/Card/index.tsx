import { ReactNode } from "react";

import { Item } from './styles';

interface ICardProps {
    title: string;
    children: ReactNode;
}
export function Card({ title, children}: ICardProps) {
    return (
        <Item>
            <h3>{title}</h3>
            <ul>
                {children}
            </ul>
        </Item>
    )
}