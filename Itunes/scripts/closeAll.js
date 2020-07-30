
export const closeAll = () => {

    const videoPlayer = document.querySelector('.video-player')
    const audioPlayer = document.querySelector('.audio-player')
	const audio = document.querySelector('.audio')
    const audioButtonPlay = document.querySelector('.audio-button__play')

    videoPlayer.pause()
    videoPlayer.currentTime = 0

    audioPlayer.pause()
    audioPlayer.currentTime = 0
    audio.classList.remove('play')
    
    if (audio.classList.contains('active')){
        audioButtonPlay.classList.add('fa-play')
        audioButtonPlay.classList.remove('fa-pause')
    }
    

    
   

    
   





















}