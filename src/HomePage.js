import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className='home-page'>
      <header className='home-header'>
        <h1>Plataforma de Dados de Utilizador</h1>
        <p>
          Desenvolver uma Plataforma de Dados do utilizador que integre dados de
          várias fontes (como sistemas CRM, interações/analytics no site e
          histórico de compras) para criar um perfil único do cliente.
        </p>
      </header>
      <main className='home-content'>
        <section className='home-section'>
          <h2>Integração de Dados</h2>
          <p>
            Combinar dados de fontes diversas para criar uma visão abrangente de
            cada cliente. (trabalhar com APIs)
          </p>
        </section>
        <section className='home-section'>
          <h2>Análise e Segmentação de Dados</h2>
          <p>
            Utilizar análise de dados para segmentar clientes e entender padrões
            de comportamento.
          </p>
        </section>
        <section className='home-section'>
          <h2>Estratégias de Personalização</h2>
          <p>
            Implementar algoritmos para estratégias de marketing e vendas
            personalizadas.
          </p>
        </section>
        <section className='home-section'>
          <h2>Impacto no Negócio</h2>
          <p>
            Melhora a eficácia do marketing, aumenta o envolvimento do cliente e
            impulsiona o crescimento das vendas através de insights orientados
            por dados.
          </p>
        </section>
      </main>
      <footer className='home-footer'>
        <p>
          &copy; 2024 Plataforma de Dados de Utilizador. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
