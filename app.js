import { playList } from "./playlist"

const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stop = document.getElementById('stop')

play.addEventListener('click', () => audio.play())

play.addEventListener('click', () => audio.pause())

rewind.addEventListener('click', ()=> audio.currentTime -= 10)

forward.addEventListener('click', ()=> audio.currentTime += 10)

stop.addEventListener('click', () =>{
    audio.pause()
    audio.currentTime = 0
})