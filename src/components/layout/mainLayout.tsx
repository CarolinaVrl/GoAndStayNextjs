import React, { ReactNode } from 'react';
import NavBar from '../molecules/NavBar';
import Footer from '../organism/Footer';
interface IMainLayout{
    children:ReactNode
}
const MainLayout = ({children}:IMainLayout) => {
    return (
        <div>
            <NavBar/>
            {
                children
            }
            <Footer/>
            
            
        </div>
    );
};

export default MainLayout;