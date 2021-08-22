function increment(){
    let countEl=document.getElementById("count");
    let currentCount=countEl.innerText;
    let updatedCount=parseInt(currentCount)+1;
    countEl.innerHTML=updatedCount;
}
function decrement(){
    let countEl=document.getElementById("count");
    let currentCount=countEl.innerText;
    let updatedCount=parseInt(currentCount)-1;
    countEl.innerHTML=updatedCount;
}
function reset(){
    let countEl=document.getElementById("count");
    countEl.innerHTML=0;
}