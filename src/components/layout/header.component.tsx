import React from 'react'
import "../../assets/styles/header.scss"

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
    <header className='header'>
            <div className='store-tittle'>
                <h1>{title}</h1>
            </div>
            <div className='slogan'>
                A sapataria vitoriana
            </div>
            <div className='user-frame'>
                <div>Seja bem vindo(a)!</div>
                <div>[userName]</div>
            </div>
    </header>
)

export default Header 