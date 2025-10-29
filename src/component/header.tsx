import './header.scss';
import { useState } from 'react';
import logoImg from '../assets/logo.svg';

export interface NavItem {
    id: number;
    itemText: string;
    href: string;
}

interface WebHeaderProps {
    navList: NavItem[];
}

const WebHeader = ({ navList }: WebHeaderProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className={`webHeader${isOpen ? ' isOpen' : ''}`}>
            <div className='webHeader__top'>
                <nav className="webHeader__nav" aria-label="navigation menu">
                    <button className="webHeader__nav-toggle" 
                        aria-controls="nav-menu"
                        type='button' 
                        aria-expanded={isOpen} 
                        aria-label="toggle navigation menu"
                        onClick={handleToggle}>
                    </button>
                    <ul className="webHeader__nav-list" id="nav-menu">
                        {navList.map(({ id, itemText, href }) => (
                            <li key={id}>
                                <a href={href}>{itemText}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="webHeader__logo">
                    <img className="webHeader__logoImg" src={logoImg} alt='Room'/>
                    <h1 className='webHeader__title'>Room</h1>
                </div>
                <div className='webHeader__overlay' onClick={handleToggle}></div>
            </div>
        </header>
    )
}
export default WebHeader;