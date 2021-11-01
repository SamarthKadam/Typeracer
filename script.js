const SectionElement=document.querySelector('.section');
let border;
let text;
let lenght;
let start;
let end;
let  random;
let replaceitem;
let check;
let i;
let j;
start=20;
end=26;
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
    // random=Math.floor(Math.random()*18);
    text=`<span class="decor"></span>${data.paragraphs[0]}`;
    SectionElement.insertAdjacentHTML('beforeend',text); 
   border=document.querySelector('.decor');
    lenght=text.length;
    console.log(text[20],text[26])
    // start=19;
    // end=24;
    console.log(text[start],text[end]);
    // replaceitem=text[end+1];
});

window.addEventListener('keypress',function(e){
    console.log(e.key);
    console.log(text[start],text[end]);
    if(end>lenght-2)
    {
        console.log('End');
        return;
    }
    else{
    replaceitem=text[end+1];
    console.log(replaceitem);
    replace();
    }
})