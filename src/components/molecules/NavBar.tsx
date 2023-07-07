import React from 'react';
import Logo from '../svg/Logo';
import Image from 'next/image';

const NavBar = () => {
    return (
        <div>
            <Logo/>
            <div>
                <Image height={65} width={65} alt='Perfil' src={'/Perfil.svg'}/>
                <Image height={65} width={65} alt='Moneda' src={'/MonedaFiltro.svg'}/>
            </div>
        </div>
    );
};

export default NavBar;