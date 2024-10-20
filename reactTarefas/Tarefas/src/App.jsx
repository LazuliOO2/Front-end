// App.js
import React, { useState, useRef } from 'react';
import SocialIcons, { BackgroundContainer, SubNav, Title, Description, ButtonContainer, Button, CardContainer, IconContainer, CardContent } from './style.jsx';
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

 // iniciamos uma constante activeIndex que seria o valor 0 ou seja o valor de agora e setActiveIndex é a função que vai atualizar o valor de activeIndex usado o useState aonde coloca um marcador de posição para o valor de agora
  const CirculosComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  // criamos um array de objeto que tem o objeto e o valor 
    const texts = [
      { title: "Emma Philmman", paragraph: "Fique à vontade para entrar em contato para obter mais informações." },
      { title: "Diogo", paragraph: "Isso me ajudou muito! Agora sempre lembro do que preciso comprar." },
      { title: "Beatriz", paragraph: "Interface muito amigável e fácil de usar." }
    ];
  
    // Função para atualizar o círculo ativo recebe o parametro o index que seria o indice eu poderia da qualquer nome para o index.Então como react sabe que index seria indice através da função map que é uma função de array que passa o indice como parametro alem de percorre toda a lista de objetos
    const handleCircleClick = (index) => {
      setActiveIndex(index); // Atualiza o círculo ativo
    };
   // vai retorna minha div estilizada junto com a função
    return (
         <div style={{position:'relative',display:'inline-block',justifyContent:'center',background:'rgb(21,21,37)',width:'100%', minHeight:'300px'}}>
         <div><p style={{background:'rgb(21,21,37)',width:'100%',color:'white',textAlign:'center',paddingTop:'100px'}}>{texts[activeIndex].title}</p></div>
        {/* Aspas posicionada com absolute */}
        <div
          id="Aspas"
          className="fas fa-quote-left"
          style={{
            fontSize:'120px',
            color: 'rgb(21,24,42)',
            position: 'absolute',
            opacity: '0.8',
            top: '65%',
            left: '50%',
            transform: 'translate(-50%, -50%)  rotate(180deg)'
          }}
        ></div>
        <h2 style={{position:'relative' , zIndex:'1',color:'white',textAlign:'center',paddingTop:'22px'}}>{texts[activeIndex].paragraph}</h2>
        {/* Círculos de navegação,a função map percorre todo array de objeto então texts que seria a const que declaramos la em cima para armazena chave e valor em seguida usamos __. Isso significa que você não precisa do valor do elemento (o objeto { title, paragraph }), apenas do índice.
        passamos uma chave seria um identifcado unico para a renderização no caso seria o indice e depois ao clicka no circulo ele ativa a função handleCircleClick que passa parametro index Isso significa que o índice (posição) do círculo clicado será passado para a função handleCircleClick, que por sua vez, usa o setActiveIndex para atualizar o estado.
        Assim, ao clicar no círculo, o índice do círculo clicado se torna o novo valor de activeIndex, marcando qual círculo é o ativo no momento
        className={circulo ${index === activeIndex ? 'ativo' : 'inativo'}}:
        Aqui, o className do div está sendo definido dinamicamente com base no valor de index comparado ao activeIndex.index === activeIndex: Se o índice do círculo atual for igual ao activeIndex (índice do círculo que está ativo), ele recebe a classe ativo.
        Caso contrário, ele recebe a classe inativo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '50px', marginTop: '60px' }}>
          {texts.map((_, index) => (
            <div
              key={index}
              onClick={() => handleCircleClick(index)}
              className={`circulo ${index === activeIndex ? 'ativo' : 'inativo'}`}
              style={{
                backgroundColor: index === activeIndex ? 'rgb(73,154,223)' : 'rgb(99,92,121)',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                cursor: 'pointer'
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  };

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
          <input ref={inputRef} type="text" placeholder="Digite uma tarefa" className="Add inputTarefa" />
          <button className="Add botaoAdicionar" onClick={handleAddTarefa}>Adicionar</button>
          {tarefas.map((tarefa) => (
            <div className="tarefa" key={tarefa.id}>
              <p>{tarefa.texto}</p>
              <button className="remover" onClick={() => deletarTarefa(tarefa.id)}>🗑️</button>
            </div>
          ))}
        </div>
      </BackgroundContainer>

      <div id="Sobre">
        <h1>Nossa História</h1>
        <div id="barra"></div>
        <div id="DescSobre">
          <h1>Lista de Tarefas</h1>
          <p>
            Lista de Tarefa é mais do que apenas um gerenciador de tarefas; é uma ferramenta de suporte projetada para ajudar você a manter o controle de suas tarefas pendentes e concluídas. 
            Nossa plataforma é construída para fornecer uma experiência perfeita, permitindo que você adicione e remova tarefas com facilidade.
          </p>
        </div>
      </div>

      <SubNav>
        <Title>Nossas Características</Title>
        <Description>Ferramentas inovadoras para aprimorar sua experiência de gerenciamento de tarefas.</Description>
        <ButtonContainer>
          <Button className="contato">Contato</Button>
          <Button className="avaliacao">Avaliação</Button>
        </ButtonContainer>
      </SubNav>

      <div style={{ display: 'flex', gap: '30px', width: '100%', background: 'rgb(21,21,37)', alignItems: 'center', justifyContent: 'center' }}>
        <CardContainer>
          <IconContainer><span>➔</span></IconContainer>
          <CardContent>
            <h2>Criação de tarefas</h2>
            <p>Adicione novas tarefas facilmente com apenas alguns cliques.</p>
          </CardContent>
        </CardContainer>

        <CardContainer>
          <IconContainer><span>➔</span></IconContainer>
          <CardContent>
            <h2>Remoção de tarefa</h2>
            <p>Remova rapidamente tarefas que você concluiu ou não precisa mais.</p>
          </CardContent>
        </CardContainer>

        <CardContainer>
          <IconContainer><span>➔</span></IconContainer>
          <CardContent>
            <h2>Acompanhamento do progresso</h2>
            <p>Monitore suas realizações e mantenha-se motivado.</p>
          </CardContent>
        </CardContainer>
      </div>
      <div style={{ display: 'flex', gap: '30px', width: '100%', background: 'rgb(21,21,37)', alignItems: 'center', justifyContent: 'center', paddingTop:'22px'}}>
        <CardContainer style={{height:'300px'}}>
          <IconContainer><span>➔</span></IconContainer>
          <CardContent>
            <h2>Lembretes</h2>
            <p>Adicione novas tarefas facilmente com apenas alguns cliques.</p>
          </CardContent>
        </CardContainer>

        <CardContainer style={{height:'300px'}}>
          <IconContainer><span>➔</span></IconContainer>
          <CardContent>
            <h2>Interface amigável</h2>
            <p>Navegue sem esforço com nosso design intuitivo.</p>
          </CardContent>
        </CardContainer>

        <CardContainer style={{height:'300px'}}>
          <IconContainer><span>➔</span></IconContainer>
          <CardContent>
            <h2>A Lista de Tarefas transformou minha rotina diária!</h2>
            <p>Adoro como é fácil manter o controle das minhas tarefas e me sentir realizada depois de removê-las. Este aplicativo é fantástico! A simplicidade de adicionar e remover tarefas me mantém organizado e motivado. Finalmente posso administrar meu tempo de forma eficaz</p>
          </CardContent>
        </CardContainer>
      </div>

      {/* Círculos e Testemunhos */}
      <CirculosComponent />
    </>
  );
}

export default App;
