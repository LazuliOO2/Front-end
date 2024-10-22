import React from 'react';
import { SubNavContainer, Title, Description, ButtonContainer, Button } from './style.jsx'; // Importa os styled-components

export default function SubNav() {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <SubNavContainer>
      <Title>Nossas Características</Title>
      <Description>Ferramentas inovadoras para aprimorar sua experiência de gerenciamento de tarefas.</Description>
      <ButtonContainer>
        <Button className="contato" onClick={() => scrollToSection('#Contatos')}>Contato</Button>
        <Button className="avaliacao" onClick={() => scrollToSection('#Testemunho')}>Avaliação</Button>
      </ButtonContainer>
    </SubNavContainer>
  );
}
