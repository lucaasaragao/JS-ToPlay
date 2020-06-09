const bpm = document.getElementById('bpm');
const valueBpm = document.querySelector('h2');
const play = document.getElementById('play');
let currentBpm= 40;
const audio= document.querySelector('audio');
let isPlaying = false;


function bump() {
    audio.currentTime = 0;
    audio.play();
}

bpm.addEventListener('change', function(){
    valueBpm.innerHTML = this.value +'bpm' 
    currentBpm = parseInt(this.value)
    if(isPlaying){
        clearInterval(timer)
        timer = setInterval(bump, (60*1000)/currentBpm)
    }
});
play.addEventListener('click', function(){
    if(isPlaying){
        play.innerHTML = 'Play'
        clearInterval(timer);
    }else{
        play.innerHTML = 'Stop'
        bump()
        timer = setInterval(bump, (60*1000)/currentBpm)
    }
    isPlaying = !isPlaying;
});

