import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export function Button(){
    return(
        <Link to='login'>
            <button className='btn'>
                Entrar
            </button>
        </Link>
    )
}
