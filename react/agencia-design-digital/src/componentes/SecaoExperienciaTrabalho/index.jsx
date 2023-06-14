import React, { useState } from 'react';
import './style.css';
import Card from '../Card';

export default function SecaoExperienciaTrabalho (props) {

  return (
    <section id='secaoExpDeTrab' className={props.ehTemaEscuro ? "secao-modo-escuro" : "secao-modo-claro"}>
      <div id='container-texto' className={props.ehTemaEscuro ? "titulo-modo-escuro" : "titulo-modo-claro"}>
        <h2>Experiências de Trabalho</h2>
        <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
      </div>

      <div className='container-cards limita-largura'>
        <Card
          // ehTemaEscuro={ehTemaEscuro ? "secao-modo-escuro" : "secao-modo-claro"}
          periodo="JUNHO 2012 - 2016" servico="Web Designer" empresa="Pied Piper StartUp." descricao="Criação de Landing Pages, Sites Institucionais e E-Commerce completamente personalizadas e otimizados para buscadores"
        />
        <Card 
          // ehTemaEscuro={ehTemaEscuro}
          periodo="AGOSTO 2016 - 2019" servico="Product Designer" empresa="E Corp." descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
        />
        <Card 
        // ehTemaEscuro={ehTemaEscuro}
          periodo="FEVEREIRO 2019 - 2021" servico="Digital Consulting" empresa="Arasaka Inc." descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
        />
      </div>
    </section>
  );
}