import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    width: 100%;

    .slick-arrow{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9;
        background-color: var(--gray-dark);
        width: 25px;
        height: 25px;
        border-radius: 50%;
        opacity: 0.5;
        &:hover{
            opacity: 0.8;
        }
    }
    .slick-prev{
        left: 5px;
        &::before{
            content: '❮';
            font-size: 13px;
            line-height: 0.75;
        }
    }
    .slick-next{
        right: 5px;
        &::before{
            content: '❯';
            font-size: 13px;
            line-height: 0.75;
        }
    }

    .slick-dots{
        bottom: 10px;
        li {
            &.slick-active{
                button:before {
                    opacity: .85;
                }
            }
            button {
                &:before {
                    opacity: .45;
                    color: var(--primary);
                }

            }
        }

    }
`;

export const SlideItem = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    img {
        width: 100%;
    }
`;

export const SlideMeta = styled.div`
    position: absolute;
    bottom: 20%;
    left: 5%;
    width: 100%;
    max-width: 340px;
    h2 {
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        color: var(--gray-dark);
        margin-bottom: 14px;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: var(--gray-dark);
    }
    .link{
        display: inline-block;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--gray-dark);

        padding: 4px 25px;
        margin-top: 10px;

        background-color: var(--primary);
        border: 1px solid var(--gray-dark);
        &:hover{
            background-color: var(--gray-dark);
            color: var(--primary);
        }
    }

`;