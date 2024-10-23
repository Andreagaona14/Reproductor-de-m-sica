import { playList } from '../playlist.js';

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const former = document.getElementById('former');
const next = document.getElementById('next');

let currentSongIndex = 0; 

function loadSong(index) {
    const currentSong = playList[index];
    audio.src = currentSong.song;
    document.querySelector('.playerimg').src = currentSong.img;
    document.querySelector('.playerartist').textContent = currentSong.artist;
    document.querySelector('.player__song').textContent = currentSong.title;
    audio.play();
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
}

loadSong(currentSongIndex);

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

rewind.addEventListener('click', () => audio.currentTime -= 10);

forward.addEventListener('click', () => audio.currentTime += 10);

former.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : playList.length - 1; 
    loadSong(currentSongIndex);
});

next.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex < playList.length - 1) ? currentSongIndex + 1 : 0; 
    loadSong(currentSongIndex);
});

audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex < playList.length - 1) ? currentSongIndex + 1 : 0; 
    loadSong(currentSongIndex);
});