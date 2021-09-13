// 1. elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');
const fullscreen = player.querySelector('.fullscreen')

// 2. functions 
function togglePlay() {  
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // or if(video.paused){ video.play();} else {video.pause()};
    // or video[video.paused ? 'play' : 'pause']();
}

function updatePlayingButtonIcon(){
    const playButtonIcon = this.paused ? '▶' : '❚❚';
    toggle.textContent = playButtonIcon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip); //data-skip attribute in HTML
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const progressInPercent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${progressInPercent}%`;
}

//play video on chosen moment from the progress bar
function scrub(e){ 
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
}

function toggleFullscreen(){
     if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.webkitRequestFullscreen) { /* Safari */
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) { /* IE11 */
            vidoe.msRequestFullscreen();
          }
}

// 3. event listeners
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updatePlayingButtonIcon);
video.addEventListener("pause", updatePlayingButtonIcon);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

video.addEventListener("timeupdate", handleProgress);

let mousedown = false;
progress.addEventListener("click", scrub);
//progress.addEventListener("mousemove", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

fullscreen.addEventListener("click", toggleFullscreen);