import React, { useState } from 'react';
import './Accordion.css';

const faqItems = [
  {
    question: 'Como faço para agendar uma visita a uma propriedade?',
    answer: 'Você pode agendar uma visita diretamente em nossa página de listagem de imóveis, clicando no botão "Agendar Visita". Alternativamente, entre em contato conosco por telefone ou e-mail.'
  },
  {
    question: 'Vocês oferecem consultoria de financiamento?',
    answer: 'Sim, nossa equipe de consultores especializados está pronta para auxiliar você em todas as etapas do processo de financiamento, garantindo as melhores condições para a sua compra.'
  },
  {
    question: 'Quais são as taxas de comissão?',
    answer: 'Nossas taxas de comissão são competitivas e transparentes. Para mais detalhes, por favor, entre em contato com um de nossos consultores.'
  },
  {
    question: 'Como a minha privacidade é protegida?',
    answer: 'A privacidade e a discrição são fundamentais em nossos serviços. Todas as suas informações são tratadas com a máxima confidencialidade e segurança, e só são compartilhadas com sua permissão explícita.'
  }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {faqItems.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {item.question}
          </button>
          <div
            className="accordion-content"
            style={{
              maxHeight: activeIndex === index ? '200px' : '0'
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;