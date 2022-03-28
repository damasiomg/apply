import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 36px;
    color: #3A3A3A;
    margin-top: 40px;
    line-height: 56px; 
`;

export const Form = styled.form`
    display: grid;
    max-width: 700px;
    margin-top: 30px;
    gap: 0 15px;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
        justify-content: center;
        grid-template-columns: 1fr;
    }
`;

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;

    input {
        height: 50px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px;
        color: #3a3a3a;
        border: 2px solid #FFF;
        &::placeholder {
            color: #a8a8b3;
        }

    }

    button{
        height: 50px;
        background: #13335F;
        border-radius: 5px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color .2s;
        &:hover{
            background: ${shade(.4, '#13335F')};
        }

    }
`

export const Error = styled.span`
    color: #c53030;
    font-size: 15px;
    position: relative;
    left: 1px;
    margin-bottom: 10px;

`;