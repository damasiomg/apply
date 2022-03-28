import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderMenu, Logo, MenuLinks, TitleLogo, LogoGroup } from './styles';
import { FiList, FiLogIn } from 'react-icons/fi';
import LogoImg from '../../assets/logo.png';

interface NavigationMenuProps{
    profile: string | null;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({profile}) => {

    return (
        <>
            <HeaderMenu>
                <LogoGroup>     
                    <Logo onClick={() => window.location.replace('/')}>
                        <img src={LogoImg} alt='Logo do produto'></img>
                        <TitleLogo>Apply</TitleLogo>
                    </Logo>
                    {profile && `(${profile})`}
                    
                </LogoGroup>
                <MenuLinks>
                    {(profile) && <>
                            {window.location.pathname !== '/jobs-list' && <Link to='/jobs-list'>
                                    Listar vagas
                                    <FiList size={16}/>
                            </Link>}
                            <Link to='/'>
                                    Mudar perfil
                                    <FiLogIn size={16}/>
                            </Link>
                        </>}
                </MenuLinks>
            </HeaderMenu> 
        </>
    )
}
export default NavigationMenu;