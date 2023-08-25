import React from "react";
import './style.css'

export default function SecaoContato(){
    return(
        <section id="contato" className="fale-conosco">
            <div className="limitar-secao">
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="contato">
                   <div className="contato-container">
                      <h4>Contato</h4>
                      <div className="contato-redes">
                        <img src="assets/local.png"></img>
                        <p>Nova Iguaçu, RJ</p>
                      </div>
                      <div className="contato-redes">
                        <img src="assets/telefone.png"></img>
                        <p>(21) 99900-7679</p>
                      </div>
                      <div className="contato-redes">
                        <img src="assets/email.png"></img>
                        <p>contato@oticavida.com</p>
                      </div>
                   </div> 

                   <div className="contato-container">
                      <h4>Nossas Redes Sociais</h4>
                      <div className="contato-redes">
                        <img src="assets/fb.png"></img>
                        <p>/OticaVida</p>
                      </div>
                      <div className="contato-redes">
                        <img src="assets/ig.png"></img>
                        <p>@oticavidarj</p>
                      </div>
                      <div className="contato-redes">
                        <img src="assets/tt.png"></img>
                        <p>@oticavidarj</p>
                      </div>
                   </div>
                </div>
            </div>
        </section>
    );
}