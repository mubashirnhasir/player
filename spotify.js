
let songIndex =0;
let audioElement = new Audio("./1.mp3")
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById("gif")
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName("songItem"))


let songs = [
    {songName:"warriyo", filePath:"./1.mp3",coverPath:"covers/2.jpg"},
    {songName:"Ncs Songs 2", filePath:"./2.mp3",coverPath:"covers/3.jpg"},
    {songName:"Ncs Songs 3", filePath:"./3.mp3",coverPath:"covers/4.jpg"},
    {songName:"Ncs Songs 4", filePath:"./4.mp3",coverPath:"covers/5.jpg"},
    {songName:"Ncs Songs 5", filePath:"./5.mp3",coverPath:"covers/6.jpg"},
    {songName:"Ncs Songs 6", filePath:"./6.mp3",coverPath:"covers/7.jpg"},

]
//audioElement.play()
songItem.forEach((element, i) => {  
      element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].textContent = songs[i].songName
    
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress

})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100)
})
const  makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')

    })

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `${index+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})