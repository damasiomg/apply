import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 36px;
    color: #3A3A3A;
    margin-top: 40px;
    line-height: 56px;
`;

export const List = styled.div`
    max-width: 700px;
    margin-top: 15px;
`;

export const Card = styled.div`
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    display: flex;
    min-height: 80px;
    flex-direction: column;

    & + div {
        margin-top: 10px;
    }
`;