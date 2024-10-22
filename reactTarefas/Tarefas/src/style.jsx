import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import TarefasImg from './tarefas.webp';
import styled, { keyframes } from 'styled-components';

function SocialIcons() {
  return (
    <div style={{ display: 'flex', gap: '10px',paddingTop:'5px' }}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} color="White" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} color="White" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} color="White" />
      </a>
    </div>
  );
}

export const BackgroundContainer = styled.div`
  width: 100%;
  background-image: url(${TarefasImg});
  background-size: cover; /* Ajusta a imagem para cobrir todo o container */
  background-position: center;
  height: 900px; /* Ajuste conforme necessário */
`;

export const SubNavContainer = styled.div`
  background-color: rgb(21, 21, 37); /* Fundo escuro */
  padding: 40px;
  text-align: center;
  color: white; /* Texto em branco */
`;


export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease; /* Efeito suave de hover */

  &.contato {
    background-color: rgb(69, 149, 220); /* Azul */
    color: white;
  }

  &.contato:hover {
    background-color: rgb(52, 132, 200); /* Azul mais escuro no hover */
  }

  &.avaliacao {
    background-color: rgb(236, 240, 241); /* Branco claro */
    color: rgb(44, 62, 80); /* Cinza escuro */
  }

  &.avaliacao:hover {
    background-color: rgb(220, 225, 225); /* Levemente mais escuro no hover */
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:'20px';
  background-color: #61aaf7;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height:150px;
  width:300px;
  gap:20px;
  transition: transform 0.2s ease-in-out;
/* O hover pseudo-classe é usada para aplicar estilos a um elemento quando o mouse está sobre ele*/
/* transform: scale(1.05): Essa propriedade aplica uma transformação ao elemento, neste caso, uma escala. O valor 1.05 significa que o elemento será aumentado em 5% em todas as direções (largura e altura). É por isso que o card parece crescer quando o mouse passa sobre ele */
  &:hover {
    transform: scale(1.05);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  background-color:#3b86d1;
  width: 40px;
  height: 100%;
  flex-shrink: 0; /* Impede que a largura mude */
  align-items: center;
  justify-content: center;

  span {
    font-size: 24px;
    color: white;
    transform: rotate(0deg); /* Centraliza a seta para frente */
  }
`;

export const CardContent = styled.div`
  flex-direction: column;
  justify-content: center;
  h2 {
    margin: 0;
    font-size: 18px;
    color: white;
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #f1f1f1;
  }
`;

const moverEsquerda = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const AnimacaoContainer = styled.div`
  background: white;
  color: rgb(51,130,209);
  height: 95px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  animation: ${moverEsquerda} 10s linear infinite;
`;

export const Estrela = styled.i`
  margin-right: 10px;
  color: rgb(51,130,209);
`;

export const Mensagem = styled.span`
  white-space: nowrap;
  margin-right: 30px;
  font-size: 1.5em;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px; /* Espaço para o asterisco à direita */
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
`;

export const Asterisk = styled.span`
  position: absolute;
  right: 10px;
  top: 75%;
  transform: translateY(-50%);
  color: black; /* Cor do asterisco */
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgb(21,21,37); /* cor de fundo */
  color: #fff;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const SocialIconsFooter = styled.div`
  display: flex;
  gap: 10px;
`;

export const Icon = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #3b5998; /* Cor base, você pode mudar para cada rede */
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  color: #fff;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export default SocialIcons;