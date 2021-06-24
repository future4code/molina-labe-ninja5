import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    LabeNinja
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/serviços' className='nav-links' onClick={closeMobileMenu}>
                            Serviços <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/adicionar-servicos' className='nav-links' onClick={closeMobileMenu}>
                            Adicionar Serviços
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/carrinho' className='nav-links' onClick={closeMobileMenu}>
                            Carrinho
                        </Link>
                    </li>
                    <li className='nav-item'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Entrar
                            </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </div>
    )
}

export default Navbar;