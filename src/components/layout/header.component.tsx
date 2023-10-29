import React from 'react'
import "../../assets/styles/header.scss"

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
    <header className='header'>
        <div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <p>A sapataria vitoriana</p>
            </div>
            <div>
                <div>Seja bem vindo(a)!</div>
                <div>[userName]</div>
            </div>
        </div>
    </header>
)

export default Header 