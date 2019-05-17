let scorecard_score=0;
let scorecard_wicket=0;
let cpuscore=0;
const div_easy=document.getElementById("easy");
const div_medium=document.getElementById("medium");
const div_hard=document.getElementById("hard");
const div_cScore=document.getElementById("cscore");
const div_batInner=document.getElementById("batInner");
const span_wicket=document.getElementById("wicket");
const span_run=document.getElementById("run");
const div_img=document.getElementById("batimg");
const div_scoreRuns=document.getElementById("ScoreRuns");

CpuScoreBox();
scorecalculation();





function scorecalculation()
{
function win()
{
    div_scoreRuns.style.fontSize='60px';
    div_scoreRuns.innerHTML="you won the match !!";
}
function lose()
{
    div_scoreRuns.style.fontSize='60px';
    div_scoreRuns.innerHTML="you lost the match !!";
}
function draw()
{
    div_scoreRuns.style.fontSize='60px';
    div_scoreRuns.innerHTML="Its a tie!";
}
function getScore()
{
    return Math.floor(Math.random()*10);
}
div_batInner.addEventListener('click',function(){
if((cpuscore-scorecard_score)>0 && (scorecard_wicket!=7))
{
    if(scorecard_wicket==7 && scorecard_score<=cpuscore)
    {
        if(scorecard_score<cpuscore){
            lose();
        }
        else
        {
            draw();
        }
    }
    else{
        run=getScore();
        div_scoreRuns.style.fontSize='40px';
        if(run==0)
        {
            
            div_scoreRuns.innerHTML="Its OUT!!!!!"
            scorecard_wicket++;
            span_wicket.innerHTML=scorecard_wicket;
            div_img.src='image/duck.jpg'
            div_batInner.classList.add('red-glow');
            setTimeout(() => {
                div_batInner.classList.remove('red-glow');
            }, 200);
        }
        else
        {

            switch(run)
            {
                case 1:
                case 2:
                case 3:div_img.src='image/two.jpg'
                       div_batInner.classList.add('gray-glow');
                       setTimeout(() => {
                       div_batInner.classList.remove('gray-glow');
                       }, 200);
                       break;
                case 4:
                case 5:
                case 6:div_img.src='image/four.jpg'
                       div_batInner.classList.add('blue-glow');
                       setTimeout(() => {
                       div_batInner.classList.remove('blue-glow');
                       }, 200);
                       break;
                case 7:
                case 8:
                case 9:div_img.src='image/six.jpg'
                              div_batInner.classList.add('green-glow');
                              setTimeout(() => {
                              div_batInner.classList.remove('green-glow');
                              }, 200);
                              break;
            }
            div_scoreRuns.innerHTML=`${run} runs! <br> Need ${cpuscore-scorecard_score} run and ${7-scorecard_wicket} wicket in hands.`;
            scorecard_score+=run;
            span_run.innerHTML=scorecard_score;
            
        }
    }
}
else
{
    if(scorecard_wicket==7)
    {
        lose();
    }
    else
    {
         win();
    }
}
});
}




function CpuScoreBox()
{
function cpuRuns(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}
function leveldecider(level)
{
    
    switch(level)
    {
        case "easy": cpuscore=cpuRuns(150,300);
                            break;
        case "medium": cpuscore=cpuRuns(300,450);
                            break;
        case "hard": cpuscore=cpuRuns(450,600);
    }
    
    div_cScore.style.fontSize='60px';
    div_cScore.innerHTML=cpuscore;
}
function level(){
div_easy.addEventListener('click',function(){
    leveldecider("easy");
});
div_medium.addEventListener('click',function(){
    leveldecider("medium");
});
div_hard.addEventListener('click',function(){
    leveldecider("hard");
});
}
level();
}