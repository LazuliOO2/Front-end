document.addEventListener('DOMContentLoaded', (event) => {
    const musicList = [
        {
            nome: "3 porquinhos",
            arquivo: "3-PORQUINHOS-♫.mp3",  
          },
          {
            nome: "COELHO E TARTARUGA",
            arquivo:"COELHO-E-TARTARUGA-♫.mp3",
          },
          {
          nome:"k a m a i t a c h i - Bob",
          arquivo:"k-a-m-a-i-t-a-c-h-i-Bob-_prodEAGLE_.mp3",
          },
          {
          nome:"O casamento",
          arquivo:"O-Casamento.mp3"
          },
          {
              nome:"Sitio do tio Harry",
              arquivo:"Sitio-do-Tio-Harry.mp3",
          },  
    ];
    
    const voltar = document.getElementById('voltar');
    const play = document.getElementById('play');
    const avançar = document.getElementById('avançar');
    const tempo = document.getElementById('tempo');
    const progress = document.getElementById('progresso');
    let currentMusicIndex = 0;
    const audioPlayer = new Audio(musicList[currentMusicIndex].arquivo);

    let isPlaying = false;

    function playSong(){
       play.classList.remove('bi-play-circle-fill');
       play.classList.add('bi-pause-circle-fill');
        audioPlayer.play();
        isPlaying = true;
    }

    function pauseSong(){
        play.classList.add('bi-play-circle-fill');
        play.classList.remove('bi-pause-circle-fill');
        audioPlayer.pause();
        isPlaying = false;
    }

    function playPauseDecider(){
        if(isPlaying === true){
            pauseSong();
        }
        else {
            playSong();
        }
    }
  
    function updateProgressBar(){
        if(audioPlayer.duration > 0){
            const barWidth = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            document.getElementById('barra-de-progresso').style.setProperty('--progress', barWidth + '%')
            progress.textContent = formatTime(audioPlayer.currentTime);
        }
    }
    function initializeSong(){
        audioPlayer.src = musicList[currentMusicIndex].arquivo;
    }

    function previousSong(){
        if (currentMusicIndex === 0 ){
            currentMusicIndex = musicList.length - 1;
        }else {
            currentMusicIndex -= 1 ;
        }
        initializeSong();
        playSong();
    }
    function nextSong(){
        if(currentMusicIndex === musicList.length - 1){
            currentMusicIndex = 0;
        }else{
            currentMusicIndex += 1 ;
        }
        initializeSong();
        playSong();
    }
    function jumpTo(event){
        const width = tempo.clientWidth;
        const clickPosition = event.offsetX;
        const jumpToTime = (clickPosition/width)* audioPlayer.duration;
        audioPlayer.currentTime = jumpToTime;
    }
   function formatTime(seconds){
    const minute = Math.floor(seconds / 60);
   
   const secondLeft = Math.floor(seconds - minute * 60);
   return `${minute}:${secondLeft < 10 ? '0' : ''}${secondLeft}`;
  }
    play.addEventListener('click', playPauseDecider);
    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    voltar.addEventListener('click', previousSong);
    avançar.addEventListener('click', nextSong);
    tempo.addEventListener('click', jumpTo)
    
});
