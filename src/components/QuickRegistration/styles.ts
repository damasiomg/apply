import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: 700px;
    margin-top: 30px;
`;

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;


    input {
        height: 50px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #FFF;
        &::placeholder {
            color: #a8a8b3;
        }

    }

    button{
        height: 50px;
        padding: 8px;
        background: #13335F;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color .2s;
        &:hover{
            background: ${shade(.4, '#13335F')};
        }
    }

`;

export const Error = styled.span`
    color: #c53030;
    font-size: 15px;
    position: relative;
    left: 1px;
    margin-bottom: 10px;
`;