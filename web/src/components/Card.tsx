import React from 'react';

const Card: React.FC = () => {
  return (
    <section className="container_card_all" id="services">
      <div className="container_card_left">
        <h3>Gastronomia</h3>
        <p>Possuímos os mais saborosos salgados fritos e assados, incluindo a irresistível tapioca com queijo qualho e a apetitosíssima mini pizza. Saboreie pratos quentes, como o nosso quiosque de cachorro quente, e desfrute de sobremesas inigualáveis, como sagu, docinhos, croissant de chocolate e muito mais. <span>Entre em contato para uma experiência única!</span></p>
      </div>
      <div className="container_card_middle">
        <h3>Decoração</h3>
        <p>A decoração é repleta de recursos modernos, como painel e tapete de LED, e mesas coloridas com variados temas à escolha. Nas festas adultas, contamos com poltronas, mesa rústica de madeira e uma mesa exclusiva para o bolo, além de elegantes lustres.!</p>
      </div>
      <div className="container_card_right">
          <h3>Equipe</h3>
          <p>Em todas as ocasiões especiais, contamos com uma equipe altamente capacitada, pronta para suprir todas as suas demandas! Garantindo tranquilidade e conforto, nossos serviços abrangem segurança, garçons, copeiras, monitores e até mesmo um animador de festa! Assim, você pode relaxar e desfrutar de momentos memoráveis com seus convidados!</p>
        </div>
    </section>
  );
}

export default Card;
