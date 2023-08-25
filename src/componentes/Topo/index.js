import React from "react";
import './style.css'

export default function Header(){
    return(
        <header>
            <div className="limitar-secao topo">
                <img src="assets/logo.png"></img>
                <nav>
                    <a href="#produtos">Produtos</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    );
}