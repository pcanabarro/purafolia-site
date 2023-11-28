import React from 'react';

const Contato: React.FC = () => {
  return (
    <section className="container_contato_all" id="contato">
      <h1>Entre em contato conosco<span>!</span></h1>
      <p>Basta clicar no botão abaixo ou chamar no WhatsApp:</p>
      <a href="https://api.whatsapp.com/send?phone=5551981701508" className="logo" target="_blank">
        <i className="fa-brands fa-whatsapp"></i> (55) 51 98170-1508
      </a>
    </section>
  );
}

export default Contato;
