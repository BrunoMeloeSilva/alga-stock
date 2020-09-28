import React from 'react';
import './Header.css'

const Header: React.FC< {title: string} > = (props) => {
    return <header className="AppHeader">
        <h1>{ props.title }</h1>
    </header>
}

export default Header