import {radioPlayerInit} from './radioPlayer.js'
import {videoPlayerInit} from './videoPlayer.js'
import {musicPlayerInit} from './musicPlayer.js'
import {closeAll} from './closeAll.js'

const playerBtn = document.querySelectorAll('.player-btn')
const playerBlock = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')


const diactivationPlayer = () =>{
	temp.style.display = 'none'
	playerBtn.forEach(item => item.classList.remove('active'))
	playerBlock.forEach(item => item.classList.remove('active'))
}


playerBtn.forEach((btn, i) => btn.addEventListener('click', () =>{
		diactivationPlayer()
		btn.classList.add('active')
		playerBlock[i].classList.add('active')
		
		closeAll()
		
	})
)


	radioPlayerInit() 
	videoPlayerInit() 
	musicPlayerInit() 




