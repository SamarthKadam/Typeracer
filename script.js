const SectionElement=document.querySelector('.section');
let text;
let lenght;
let start;
let end;
let  random;
let replaceitem;

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
    console.log(text); 
    SectionElement.innerHTML='';
    SectionElement.insertAdjacentHTML('beforeend',text); 
    start=start+1;
    end=end+1;
}


const data=fetch('backend.json').then(response=>{
    return response.json();
}).then(data=>{
    random=Math.floor(Math.random()*18);
    text=`<div class="decor"></div>${data.paragraphs[0]}`;
    SectionElement.insertAdjacentHTML('beforeend',text); 
    lenght=text.length;
    start=19;
    end=24;
    console.log(text[start],text[end]);
    replaceitem=text[end+1];
});

window.addEventListener('keypress',function(e){
    console.log(e.key);
    replace();
})