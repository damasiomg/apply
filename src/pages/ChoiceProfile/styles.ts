import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 36px;
    color: #3A3A3A;
    margin-top: 40px;
    line-height: 56px;
`;

export const Container = styled.div`
    display: grid;
    max-width: 700px;
    margin-top: 30px;
    gap: 15px;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 768px) {
        justify-content: center;
        grid-template-columns: 1fr;
    }
`;

export const Option = styled.div`
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    transition: all .2s;
    display: grid;
    justify-content: center;
    justify-items: center;

    img{
        border-radius: 50%;
    }

    span{
        margin-top: 12px;
        font-size: 20px;
        color: #13335F;
        text-transform: capitalize;
    }

    &:hover{
        transform: translateY(-5px);
    }
`;

