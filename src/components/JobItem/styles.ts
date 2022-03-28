import styled from 'styled-components';
import { shade } from 'polished';

export const Job = styled.div`
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: grid;
    text-decoration: none; 
    grid-template-columns: 10fr 2fr;
    align-items: center;
    min-height: 99px;

    & + div {
        margin-top: 10px;
    }
`;

export const JobInfo = styled.div`
    
`;

export const ActionsJob = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 10px;
    font-size: 14px;

    a{
        text-decoration: none;
        color: #fff;
        background: #13335F;
        border-radius: 5px;
        padding: 3px;
        transition: all .2s;

        &:hover{
            background: ${shade(.8, '#13335F')};
        }
    }

`;

export const ActionButton = styled.div`
    display: flex;
    justify-content: end;

    a{
        text-decoration: none;
        color: #13335F;
        display: flex;
        justify-content: center;
        position: relative;
        transition: all .2s;

        &:hover{
            transform: translateX(5px);
        }
    }
`;