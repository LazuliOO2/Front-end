// App.js
import React, { useState,useRef } from 'react';
import SocialIcons , { BackgroundContainer,SubNav, Title, Description, ButtonContainer, Button,CardContainer, IconContainer, CardContent,CardContainer2, IconContainer2, CardContent2 } from './style.jsx';
import './index.css'; 
import { v4 as uuidv4 } from 'uuid'; 

function App() {
  const [tarefas, setTarefas] = useState([]);
  const inputRef = useRef();

  // Função para adicionar uma nova tarefa
  function handleAddTarefa() {
    const novaTarefa = inputRef.current.value;
    if (novaTarefa === '') {
      alert('Digite uma tarefa válida!');
      return;
    }

    setTarefas([...tarefas, { id: uuidv4(), texto: novaTarefa }]);
    inputRef.current.value = ''; // Limpa o campo após adicionar a tarefa
  }

  // Função para deletar uma tarefa
  function deletarTarefa(id) {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas); // Atualiza a lista de tarefas
  }


  return (
    <>
      <header>
        <div className="container-fluid" id="navegação">
          <div className="row">
            <nav className="col d-flex justify-content-between">
              <div className="d-inline-block ms-auto" style={{ paddingRight: '200px' }}>
                <ul className="nav">
                  <li className="nav-item"><a className="nav-link" href="#Sobre">Sobre</a></li>
                  <li className="nav-item"><a className="nav-link" href="#Serviços">Serviços</a></li>
                  <li className="nav-item"><a className="nav-link" href="#Testemunho">Testemunho</a></li>
                  <li className="nav-item"><a className="nav-link" href="#Contatos">Contatos</a></li>
                  <li className="nav-item fixed-icons">
                    <SocialIcons />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      
      <BackgroundContainer>
      <h1 id="PrimTit">Lista de Tarefas</h1>
         <div id="tarefas">
            <input ref={inputRef} type="text" placeholder='Digite uma tarefa' className="Add inputTarefa" />
            <button className="Add  botaoAdicionar" onClick={handleAddTarefa}>Adicionar</button>
            {tarefas.map((tarefa) => 
              <div className="tarefa" key={tarefa.id}>
                <p>{tarefa.texto}</p>
                <button className="remover" onClick={() => deletarTarefa(tarefa.id)}>🗑️</button>
              </div>
            )}
         </div>
      </BackgroundContainer>
      <div id="Sobre">
        <h1>Noss <br />A <br />histó <br />ria </h1>
        <div id="barra"></div>
        <div id="DescSobre">
          <h1>Lista de Tarefas</h1>
          <p>
           Lista de Tarefa é mais do que apenas um gerenciador de tarefas; é uma ferramenta de  suporte projetada para ajudar você a manter o controle de suas tarefas pendentes e 
           concluídas. Nossa plataforma é construída para fornecer uma experiência perfeita,  permitindo que você adicione e remova tarefas com facilidade. Quer você esteja gerenciando tarefas diárias ou projetos de longo prazo, estamos aqui para capacitá-lo em  sua jornada para melhor organização e produtividade.
          </p>
        </div>
      </div>
      <SubNav>
      <Title>Nossas características</Title>
      <Description>
        Ferramentas inovadoras para aprimorar sua experiência de gerenciamento de tarefas
      </Description>
      <ButtonContainer>
        <Button className="contato">Contato</Button>
        <Button className="avaliacao">Avaliação</Button>
      </ButtonContainer>
    </SubNav>
    

    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px', // Espaçamento entre os cards
    minHeight: '100vh',
    backgroundColor: 'rgb(21, 21, 37)',
    paddingBottom:'800px'
  }}
>
  <CardContainer>
    <IconContainer>
      <span>➔</span> {/* Ícone de seta */}
    </IconContainer>
    <CardContent>
      <h2>Criação de tarefas</h2>
      <p>Adicione novas tarefas facilmente com apenas alguns cliques.</p>
    </CardContent>
  </CardContainer>

  <CardContainer>
    <IconContainer>
      <span>➔</span> {/* Ícone de seta */}
    </IconContainer>
    <CardContent>
      <h2>Remoção de tarefa</h2>
      <p>Remova rapidamente tarefas que você concluiu ou não precisa mais.</p>
    </CardContent>
  </CardContainer>

  <CardContainer>
    <IconContainer>
      <span>➔</span> {/* Ícone de seta */}
    </IconContainer>
    <CardContent>
      <h2>Acompanhamento do progresso</h2>
      <p>Monitore suas realizações e mantenha-se motivado.</p>
    </CardContent>
  </CardContainer>
</div>
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px', // Espaçamento entre os cards
    minHeight: '100vh',
    backgroundColor: 'rgb(21, 21, 37)',
    paddingBottom:'2000px',
    marginTop:'-700px'
  }}
>
  <CardContainer2>
    <IconContainer2>
      <span>➔</span> {/* Ícone de seta */}
    </IconContainer2>
    <CardContent2>
      <h2>Lembretes</h2>
      <p>Defina notificações para manter você no caminho certo.</p>
    </CardContent2>
  </CardContainer2>

  <CardContainer2>
    <IconContainer2>
      <span>➔</span> {/* Ícone de seta */}
    </IconContainer2>
    <CardContent2>
      <h2>Interface amigável</h2>
      <p>Navegue sem esforço com nosso design intuitivo.</p>
    </CardContent2>
  </CardContainer2>
  <CardContainer2>
    <IconContainer2>
      <span>➔</span> {/* Ícone de seta */}
    </IconContainer2>
      <CardContent2>
      <h2>A Lista de Tarefas transformou minha rotina diária!</h2>
      <p>Adoro como é fácil manter o controle das minhas tarefas e me sentir realizada depois de removê-las.</p>
      <p>Este aplicativo é fantástico! A simplicidade de adicionar e remover tarefas me mantém organizado e motivado. Finalmente posso administrar meu tempo de forma eficaz.</p>
    </CardContent2>
  </CardContainer2>
</div>  

    </>
  );
}

export default App;

