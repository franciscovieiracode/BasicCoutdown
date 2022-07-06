const timerEl = document.getElementById("timer");
document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);


const startMin =60;
let time = startMin *60-1;
let count = 0;


function start(){

    if(time >0 && count ==0){
        myInterval = setInterval(decrement,1000);
	count =1;
    }
}

    function decrement(){
        
        if (time <= 0){
            alert("Time is up!");
            pause();
        }

        const minutes = Math.floor(time/60);
        let seconds = time % 60;

        timerEl.innerHTML = minutes+':'+seconds;

        time--;
    }


function reset(){
    pause()
    time = startMin *60-1;
    timerEl.innerHTML = 60;
    count = 0;    
}

function pause(){
    clearInterval(myInterval);
    count = 0;
}