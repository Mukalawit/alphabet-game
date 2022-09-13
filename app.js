let alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]
let player = document.querySelector('#player');
let letter = document.querySelector('#letter');
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
function loadNextLetter(letter){
    let currentLetter = letter.innerText;
    if(!currentLetter){
        return alphabet[0];
    }else{
        let currentIndex = alphabet.indexOf(currentLetter);
        console.log(currentIndex)
        if(currentIndex === alphabet.length){
            //game ends
            //return gameOver();
        }else{
            currentIndex++;
            currentLetter = alphabet[currentIndex];
            return currentLetter;
        }
    }
    //
}

function movePlayerVertical(element , position){
    const currentTop = extractPosition(element.style.top);
    element.style.top = `${currentTop + position}px`;
    
}

function movePlayerHorizontal(element , position){
    const currentLeft = extractPosition(element.style.left);
    element.style.left = `${currentLeft + position}px`;
   
}

function extractPosition(position){
    if(!position){

        return 100;
    }else{
        return parseInt(position.slice(0,-2));
    }
}
function moveLetter(){
    let x = Math.floor(Math.random()* window.innerWidth);
    let y = Math.floor(Math.random()* window.innerHeight);
    letter.style.top = `${y}px`;
    letter.style.left = `${x}px`;

}

function gameOver(){
    letter.innerText = "GAME OVER";
}

moveLetter();
letter.innerText = loadNextLetter(letter);

window.addEventListener('keyup' , function(e){ 
     if(e.key === 'ArrowUp'|| e.key === 'Up'){
        movePlayerVertical(player , -50);
        

     }else if(e.key === 'ArrowDown'|| e.key === 'Down'){
        movePlayerVertical(player , 50);
        
     }else if(e.key === 'ArrowRight'|| e.key === 'Right'){

        movePlayerHorizontal(player , 50); 
        player.style.transform = 'scale(1,1)'
     }else if(e.key === 'ArrowLeft'|| e.key === 'Left'){

        movePlayerHorizontal(player , -50);
        player.style.transform = 'scale(-1,1)' 
     }
     if(isTouching(player , letter)){
        moveLetter(); 
        letter.innerText = loadNextLetter(letter);
     } 
});