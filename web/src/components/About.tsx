import React from 'react';

const About: React.FC = () => {
  return (
    <section className="container_about_all" id="about">
      <div className="container_about">
        <h1>Sobre nós<span>:</span></h1>
        <p>Desde 2017 a Casa de festas <span>: Pura Folia</span> realiza festas infantis, 15 anos, formatura, casamentos ou qualquer tipo de evento que imaginar!
          {/* Restante do conteúdo aqui */}
        </p>
      </div>
      <div className="container_about_img">
        <img src=".../public/" alt="Salão Brinquedos" />
        <img src="/assets/salaobrinq2.JPG" alt="Salão Brinquedos" />
      </div>
    </section>
  );
}

export default About;
