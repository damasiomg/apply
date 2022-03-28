import styled from 'styled-components';

export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const Logo = styled.div`
    font-size: 14px;
    color: #13335F;
    display: flex;
    cursor: pointer;
`;

export const MenuLinks = styled.div`
    display: grid;
    gap: 15px;

    a{
        text-decoration: none;
        color: #13335F;
        display: flex;
        justify-content: center;
        position: relative;
        transition: all .2s;
        align-items: center;
        gap: 5px;

        &:hover{
            transform: translateX(5px);
        }
    }   

`;

export const TitleLogo = styled.h1`

`;

export const LogoGroup = styled.div`
    display: flex;
    justify-items: center;
    color: gray;
    align-items: center;
    gap: 2px;

`;