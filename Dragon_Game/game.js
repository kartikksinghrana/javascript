score=0;
cross=true;
audiogo = new Audio('music.mp3');
gameOverAudio = new Audio('gameOver.mp3');
setTimeout(()=>{
    audiogo.play();
},1000);

document.onkeydown = function(e){
    // console.log("key code is :"+ e.keyCode);
    if (e.keyCode==38){
        dino= document.querySelector('.dino');
        dino.classList.add('dinoJump');
        setTimeout(()=>{
            dino.classList.remove('dinoJump')
        },1000)
    }
    if (e.keyCode==39){
        dino= document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino ,null ).getPropertyValue('left'));
        dino.style.left = (dinoX + 100) +'px';
    }
    if (e.keyCode==37){
        dino= document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino ,null ).getPropertyValue('left'));
        dino.style.left = (dinoX - 100) +'px';
    }
}

setInterval(()=>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx =parseInt(window.getComputedStyle(dino ,null ).getPropertyValue('left'));
    dy =parseInt(window.getComputedStyle(dino ,null ).getPropertyValue('top'));
    // console.log("dino",dx,dy);

    ox =parseInt(window.getComputedStyle(obstacle ,null ).getPropertyValue('left'));
    oy =parseInt(window.getComputedStyle(obstacle,null ).getPropertyValue('top'));
    // console.log("enemy",ox,oy);

    offsetX= Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);
    // console.log("differ",offsetX,offsetY);
    
    if(offsetX<120 && offsetY<55){
        gameOver.innerHTML="Game Over -Reload to start Over";
        obstacle.classList.remove('obstacleAnimation');
        gameOverAudio.play();
        setTimeout(()=>{
            audiogo.pause();
            gameOverAudio.pause();
        },1000);
    }

    else if (offsetX<100 && cross){
        score+=1;
        console.log("updation done")
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            animationDur=parseFloat(window.getComputedStyle(obstacle,null ).getPropertyValue('animation-duration'));
        newDuration=animationDur-0.1;
        obstacle.style.animationDuration= newDuration + 's';
        },1000);
        
    }

},10);

function updateScore(score){
    scoreCount.innerHTML ="Your Score: "+ score;
}