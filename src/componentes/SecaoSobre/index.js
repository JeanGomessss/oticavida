import React from "react";
import './style.css'

export default function SecaoSobre(){
    return(
        <section id="sobre" className="sobre">
            <div className="limitar-secao">
                <h2>QUEM SOMOS NÓS?</h2>
                <p className="sobre-paragrafo">Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa,
                    sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                </p>
                <div className="box">
                    <img src="assets/loja.png"></img>
                    <div className="box-card">
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="box-card">
                        <h3>ATENDIMENTO FLEXÍVEL</h3>
                        <p>Nossa equipe possui treinamento para lhe atender</p>
                    </div>
                    <img src="assets/atendimento.png"></img>
                </div>
            </div>
        </section>
    );
}