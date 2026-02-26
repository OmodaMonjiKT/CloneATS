function verify(){
const a={gf_f:"ဦးအောင်မောင်း",gm_f:"ဒေါ်ချစ်စု",gf_m:"ဦးခင်ဖေဝင်း",gm_m:"ဒေါ်မိပွေး",father:"ဦးထိန်လင်း",mother:"ဒေါ်ဝင်းဝင်းစု"};
for(let k in a){if(document.getElementById(k).value.trim()!==a[k]){
document.getElementById("msg").innerText="အချက်အလက်မှားနေပါတယ် ❌";return;}}
localStorage.setItem("verified","yes");
window.location.href="todo.html";}
if(window.location.pathname.includes("todo.html")){
if(localStorage.getItem("verified")!=="yes"){window.location.href="index.html";}}
function addTask(){
let input=document.getElementById("taskInput");
if(!input.value)return;
let li=document.createElement("li");
li.innerHTML=`<span onclick="toggle(this)">${input.value}</span><button onclick="removeTask(this)">X</button>`;
document.getElementById("list").appendChild(li);
save();input.value="";}
function toggle(el){el.classList.toggle("done");save();}
function removeTask(btn){btn.parentElement.remove();save();}
function save(){localStorage.setItem("tasks",document.getElementById("list").innerHTML);}
window.onload=()=>{if(localStorage.getItem("tasks")){
document.getElementById("list").innerHTML=localStorage.getItem("tasks");}};