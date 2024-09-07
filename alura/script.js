//Pega o id do elemento
document.getElementById('seta').addEventListener('click',function(){
//Window representa a janela do navegador.É objeto global que contém todas as outras variáveis,Scroll define a rolagem
    window.scrollBy({
//Top significa para cima porém nesse contexto não o scrollby so aceita valores top ou left se quiser mover para baixo coloca valor positivio se quiser mover para cima coloca valores negativo
        top:300, 
//Behavior é uma propriedade que define como corre a rolagem no caso smooth que seria suave tem também auto que seria instantaneamente sem animação
        behavior:'smooth'
    })
})
//Pega todos os item com a class nav-link for each faz: código está repentindo as mesmas instruções para cada um dos elementos da lista.o Anchor não é uma função do JS você pode coloca o nome que quiser
document.querySelectorAll('.nav-link').forEach(anchor => {
//anchor seria o ouvinte do evento de click e addEventListener cria um evento especificado que seria o click
    anchor.addEventListener('click', function(e) {
//e objeto que contem as informações sobre o evento de clique o preventdefault impede o comportamento padrão do evento ou seja impedir de ir para url especificada no atributo href o e ele não é uma função do js é so uma variavel voce pode da o nome que quiser
        e.preventDefault();
//Seleciona o elemento no documento que corresponde ao seletor CSS especificado no atributo href do elemento anchor clicado.this.getAttribute('href') obtém o valor do atributo href do elemento anchor clicado.scrollIntoView  rola a página até que o elemento especificado esteja visível na janela de visualização
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//Pega o id do botão e add evento de click 
document.getElementById('botaoServico').addEventListener('click',function() {
//Pega id da onde deseja ir e usar função scrollIntoView para ir até o elemento especificado
    document.getElementById('Serviços').scrollIntoView({
        behavior:'smooth'
    });
});

//Pega o id do botão e add evento de click 
document.getElementById('botaoDif').addEventListener('click',function() {
    //Pega id da onde deseja ir e usar função scrollIntoView para ir até o elemento especificado
        document.getElementById('Contatos').scrollIntoView({
            behavior:'smooth'
        });
    });
//Criamos uma função de pesquisarEsporte pega id do botão e class subBane além de transformar tudo que o usuario digitar em letra minuscula
    function pesquisarEsporte() {
        const esporte = document.getElementById('esporteInput').value.toLowerCase();
        const bainers = document.querySelectorAll('.subBane');
// Usamos if else if e else para verificar oque usuario digito e com isso modificar o titulo p e a img do bane
        if (esporte === 'futebol') {
bainers[0].querySelector('h6').innerText = 'História do Futebol no Brasil';
bainers[0].querySelector('img').src = 'img/qndchego.jfif';
bainers[0].querySelector('p').innerText = 'O futebol foi introduzido no Brasil no final do século XIX, mais precisamente em 1894. O responsável por trazer o esporte para o país foi Charles Miller, um jovem brasileiro que havia estudado na Inglaterra e retornou com bolas e as regras do jogo.A primeira partida oficial aconteceu em São Paulo, no campo do São Paulo Railway, e contou com a participação de ingleses e brasileiros.';

bainers[1].querySelector('h6').innerText = 'Futebol nas Olimpíadas';
bainers[1].querySelector('img').src = 'img/quandovir.jfif';
bainers[1].querySelector('p').innerText = 'O futebol fez sua estreia nos Jogos Olímpicos de Atenas em 1896. No entanto, a modalidade foi retirada do programa olímpico após a edição de 1928. Somente em 1992, o futebol retornou aos Jogos Olímpicos, mas com algumas restrições, como a participação de jogadores com idade inferior a 23 anos.';

bainers[2].querySelector('h6').innerText = 'Jogadores em Destaque';
bainers[2].querySelector('img').src = 'img/atlet.jfif';
bainers[2].querySelector('p').innerText = 'Romário: O baixinho fez parte da seleção brasileira que conquistou a medalha de bronze nos Jogos Olímpicos de 1992.Neymar: O craque brasileiro liderou a seleção que conquistou a medalha de ouro nos Jogos Olímpicos de 2016, no Rio de Janeiro.';
} else if (esporte === 'skate') {
bainers[0].querySelector('h6').innerText = 'História do Skate no Brasil';
bainers[0].querySelector('img').src = 'img/chegouska.jfif';
bainers[0].querySelector('p').innerText = 'As primeiras pranchas de skate chegaram ao Brasil na década de 1970, trazidas por surfistas que buscavam uma nova forma de se divertir fora dágua. A prática se popularizou rapidamente entre os jovens, principalmente nas grandes cidades, e logo surgiram os primeiros grupos e pistas improvisadas.';

bainers[1].querySelector('h6').innerText = 'Skate nas Olimpíadas';
bainers[1].querySelector('img').src = 'img/olimpskat.jfif';
bainers[1].querySelector('p').innerText = 'O skate foi oficialmente reconhecido como esporte olímpico em 2016, fazendo sua estreia nos Jogos Olímpicos de Tóquio 2020. Essa inclusão nos Jogos Olímpicos representou um marco histórico para a modalidade, elevando o skate a um novo patamar de profissionalismo e visibilidade.';

bainers[2].querySelector('h6').innerText = 'Skatistas em Destaque';
bainers[2].querySelector('img').src = 'img/atletaskate.jfif';
bainers[2].querySelector('p').innerText = 'Leticia Bufoni: Considerada uma das melhores skatistas de street do mundo, Leticia conquistou diversos títulos internacionais e foi a primeira brasileira a se classificar para as Olimpíadas.Kelvin Hoefler: Especialista em skate vertical, Kelvin também é um dos principais nomes do skate brasileiro e já conquistou diversas medalhas em competições mundiais.';
} else {
// Default to Taekwondo
bainers[0].querySelector('h6').innerText = 'Quando chegou no Brasil';
bainers[0].querySelector('img').src = 'img/chegoutake.jfif';
bainers[0].querySelector('p').innerText = 'A modalidade foi introduzida no país em 1970, trazida por mestres coreanos como Sang Min Cho, que fundaram a primeira academia em São Paulo. A partir daí, o Taekwondo se espalhou rapidamente por todo o território nacional, conquistando adeptos de todas as idades e classes sociais.';

bainers[1].querySelector('h6').innerText = 'Virou esporte olímpico';
bainers[1].querySelector('img').src = 'img/olimptake.jfif';
bainers[1].querySelector('p').innerText = 'Em 1980, o Taekwondo foi reconhecido como esporte olímpico e, em 2000, fez sua estreia nos Jogos Olímpicos de Sydney. Essa inclusão nos Jogos Olímpicos impulsionou ainda mais a prática da modalidade em todo o mundo, inclusive no Brasil.';

bainers[2].querySelector('h6').innerText = 'Atletas em destaque';
bainers[2].querySelector('img').src = 'img/atlettake.jfif';
bainers[2].querySelector('p').innerText = 'Josiane Trevisan: Uma das principais atletas brasileiras da modalidade, Josiane participou de diversas edições dos Jogos Olímpicos e conquistou importantes títulos internacionais. Natália Falavigna: Outra grande nome do Taekwondo brasileiro, Natália também representou o país em diversas competições internacionais e conquistou medalhas importantes.';
}
 }
//Criamos uma função para alterar a cor do circulo e comentario 
 function mudarComentario(numero) {
    // Remover a classe 'ativo' de todos os círculos
    var circulos = document.getElementsByClassName('circulo');
//Usamos for para cria um loop criamos uma variavel i que vai ser o contador iniciamos a variavel com valor 0  Essa variável será incrementada a cada iteração do loop.Verifica se o valor atual de i é menor que o comprimento do array
    for (var i = 0; i < circulos.length; i++) {
        circulos[i].classList.remove('ativo');
        circulos[i].classList.add('inativo');
    }

    // Adicionar a classe 'ativo' ao círculo clicado
    var circuloAtivo = document.getElementById('circulo' + numero);
    circuloAtivo.classList.remove('inativo');
    circuloAtivo.classList.add('ativo');

    // Alterar o texto do comentário
    var comentarios = [
        "Explorar o mundo dos atletas olímpicos com Atletas do Brasil tem sido uma experiência transformadora. Sua cobertura aprofundada e comentários perspicazes me deram uma nova apreciação pelo trabalho duro e sacrifício necessários para alcançar a grandeza nos esportes. Eu recomendo fortemente sua plataforma a todos os entusiastas de esportes.",
        "Já vi muitos documentários sobre esportes, mas Atletas do Brasil se destaca por trazer um olhar único sobre a história do esporte no Brasil. A plataforma vai além dos grandes nomes e mostra a importância de cada atleta, independentemente da modalidade. É um trabalho de pesquisa e paixão que merece ser reconhecido.",
        "Já acompanhei diversos canais sobre esportes, mas Atletas do Brasil se destaca pela qualidade e profundidade das informações. A plataforma vai além dos resultados e nos mostra o lado humano dos atletas, tornando a experiência ainda mais enriquecedora",
        "Atletas do Brasil me proporcionou uma verdadeira viagem no tempo! Descobrir como o esporte evoluiu no nosso país, desde os primórdios até os dias atuais, foi fascinante. A plataforma faz um trabalho incrível ao preservar a história e inspirar novas gerações de atletas."
    ];
    //pega o pCom e alterar o texto com base no comentario e utilizamos a formula numero - 1 para acessa o index correto
    document.getElementById('pCom').innerText = comentarios[numero - 1];

    // Alterar o nome da pessoa que está comentando
    var nomes = [
        "Francisco Soares",
        "Maria Silva",
        "João Pereira",
        "Ana Costa"
    ];
    document.getElementById('titCom').innerText = nomes[numero - 1];
}
