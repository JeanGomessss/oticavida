import React from "react";
import Header from '../Topo/'
import SecaoCapa from '../SecaoCapa/'
import SecaoConteudo from "../SecaoProdutos";
import SecaoSobre from "../SecaoSobre";
import SecaoContato from "../SecaoContato";
import Rodape from "../Rodape";

export default function Conteudo(){
    return(
        <main>
            <Header />
           <SecaoCapa />
           <SecaoConteudo />
           <SecaoSobre />
           <SecaoContato />
           <Rodape />
        </main>
    );
}