const timerEl = document.getElementById("timer");
const alert = document.getElementById("alert");
document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);


const startMin =0.05;
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
            alert.style.display = "block";
            pause();
        }

        const minutes = Math.floor(time/60);
        let seconds = time % 60;

        timerEl.innerHTML = minutes+':'+seconds;

        time--;
    }


function reset(){
    alert.style.display = "none";
    pause();
    time = startMin *60-1;
    timerEl.innerHTML = 60;
    count = 0;    
}

function pause(){
    clearInterval(myInterval);
    count = 0;
}