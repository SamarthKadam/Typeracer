const SectionElement=document.querySelector('.section');
const world=document.querySelector('body');
const restart=document.querySelector('.restart');
let typenumber;
let speed;
let html;
let error;
let border;
let text;
let lenght;
let timer;
let start;
let end;
let  random;
let replaceitem;
let check;
let i=0;
let j;
let countdownstart=0;
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}


function replace()
{
    let x=start;
    let y=end;


    while(x<=y)
    {
    text=text.replaceAt(y+1,text[y]);
    y=y-1;
    }
    text=text.replaceAt(y+1,replaceitem);
    SectionElement.innerHTML='';
    SectionElement.insertAdjacentHTML('afterbegin',text); 
    start=start+1;
    end=end+1;
}

function starttimer()
{
    speed=`<div class="typingspeed">${timer}</div>`;
    SectionElement.innerHTML='';
    SectionElement.insertAdjacentHTML('beforebegin',speed);
    typenumber=document.querySelector('.typingspeed');
    setInterval(function(){
        timer=timer-1;
        typenumber.textContent=`${timer}`;
    },1000);
}

init();
function init()
{
    error=0;
    start=20;
    end=26;
    SectionElement.innerHTML='';
const data=fetch('backend.json').then(response=>{
    return response.json();
}).then(data=>{
    random=Math.floor(Math.random()*18);
    text=`<span class="decor"></span>${data.paragraphs[random]}`;
    SectionElement.insertAdjacentHTML('beforeend',text); 
   border=document.querySelector('.decor');
    lenght=text.length;
    check=data.paragraphs[random];
    // start=19;
    // end=24;
    // replaceitem=text[end+1];
});
}
window.addEventListener('keypress',function(e){
      if(countdownstart===0)
      {
          timer=30;
     starttimer();
    typenumber.classList.remove('hidden');
    countdownstart=1;
      }

    if(end>lenght-3)
    {
        console.log('End');
        countdownstart=0;
        SectionElement.innerHTML='';
        typenumber.textContent='';
        typenumber.classList.add('hidden');
        html=`<div class="done">Accuracy ${(100-(error/lenght*100)).toFixed(2)}%</div>`
        SectionElement.insertAdjacentHTML('beforeend',html);
        return;
    }
    else{
    replaceitem=text[end+1];
    if(e.key===replaceitem)
    {
    replace();
    }
    else{
        error=error+1;
        world.style.transition='.3s';
        world.style.backgroundColor='rgb(255, 127, 127)';
        setTimeout(function()
        {
            world.style.backgroundColor='#191826';
        }, 200);
    }
    }
})

restart.addEventListener('click',init);