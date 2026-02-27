function verify() {
  const answers = {
    gf_f: "ဦးအောင်မောင်း",
    gm_f: "ဒေါ်ချစ်စု",
    gf_m: "ဦးခင်ဖေဝင်း",
    gm_m: "ဒေါ်မိပွေး",
    father: "ဦးထိန်လင်း",
    mother: "ဒေါ်ဝင်းဝင်းစု"
  };

  for (let id in answers) {
    const val = document.getElementById(id).value.trim();
    if (val !== answers[id]) {
      document.getElementById("msg").innerText =
        "Verification failed. Please check your information.";
      return;
    }
  }

  localStorage.setItem("verified", "yes");
  window.location.href = "todo.html";
}

// Redirect if not verified (optional)
// Security check
if (localStorage.getItem("verified") !== "yes") {
  window.location.href = "index.html";
}

/* Navigation */
function showSection(id){
  document.querySelectorAll(".section").forEach(s=>s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".sidebar nav a")
    .forEach(a=>a.classList.remove("active"));
  event.target.classList.add("active");
}

/* ToDo Logic */
function addTask(){
  const input=document.getElementById("taskInput");
  if(!input.value) return;

  const li=document.createElement("li");
  li.innerHTML=`
    <input value="${input.value}" />
    <button onclick="toggleDone(this)">Done</button>
  `;
  document.getElementById("list").appendChild(li);
  save();
  input.value="";
}

function toggleDone(btn){
  const input=btn.parentElement.querySelector("input");
  input.classList.toggle("done");
  save();
}

function save(){
  localStorage.setItem("tasks",
    document.getElementById("list").innerHTML);
}

window.onload=()=>{
  const data=localStorage.getItem("tasks");
  if(data) document.getElementById("list").innerHTML=data;
};
