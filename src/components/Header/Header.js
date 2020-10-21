import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="main-header">
            <h1>Probando Router!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cactus">Cactus!</Link>
                <Link to="/orquideas">Orquídeas</Link>
            </nav>
        </header>
    );
}

export default Header;