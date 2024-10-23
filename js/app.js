// Importar la lista de reproducción
import { playList } from './playlist.js'; // Asegúrate de que la ruta sea correcta

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const next = document.getElementById('next');
const former = document.getElementById('former');
const img = document.querySelector('.player__img');
const artist = document.querySelector('.player__artist');
const songTitle = document.querySelector('.player__song');

let currentSongIndex = 0; // Índice de la canción actual

// Función para cargar una canción
function loadSong(index) {
    audio.src = playList[index].song; // Cargar la ruta de la canción
    artist.textContent = playList[index].artist; // Actualizar el artista
    songTitle.textContent = playList[index].title; // Actualizar el título de la canción
    img.src = playList[index].img; // Actualizar la imagen del álbum
    audio.load(); // Cargar la nueva canción en el reproductor
}

// Reproducir o pausar la canción
play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        play.classList.remove('bx-play');
        play.classList.add('bx-pause');
    } else {
        audio.pause();
        play.classList.remove('bx-pause');
        play.classList.add('bx-play');
    }
});

// Retroceder 10 segundos
rewind.addEventListener('click', () => audio.currentTime -= 10);

// Adelantar 10 segundos
forward.addEventListener('click', () => audio.currentTime += 10);

// Pasar a la siguiente canción
next.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playList.length; // Incrementar el índice
    loadSong(currentSongIndex); // Cargar la siguiente canción
    audio.play(); // Reproducir la nueva canción
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});

// Volver a la canción anterior
former.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length; // Decrementar el índice
    loadSong(currentSongIndex); // Cargar la canción anterior
    audio.play(); // Reproducir la nueva canción
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});

// Cargar la primera canción al inicio
loadSong(currentSongIndex);