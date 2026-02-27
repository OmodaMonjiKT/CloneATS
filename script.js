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
if (window.location.pathname.includes("todo.html")) {
  if (localStorage.getItem("verified") !== "yes") {
    window.location.href = "index.html";
  }
}

// Add Task
function addTask(){
  const input = document.getElementById("taskInput");
  if(!input.value) return;

  const li = document.createElement("li");
  li.innerHTML = `<span onclick="toggleDone(this)">${input.value}</span>
                  <button onclick="removeTask(this)">X</button>`;
  document.getElementById("list").appendChild(li);
  saveTasks();
  input.value="";
}

// Toggle Done
function toggleDone(el){
  el.classList.toggle("done");
  saveTasks();
}

// Remove Task
function removeTask(btn){
  btn.parentElement.remove();
  saveTasks();
}

// Clear All Tasks
function clearAll(){
  if(confirm("လုံးဝ ဖျက်မလား?")) {
    document.getElementById("list").innerHTML="";
    saveTasks();
  }
}

// Save to localStorage
function saveTasks(){
  localStorage.setItem("tasks", document.getElementById("list").innerHTML);
}

// Load tasks on page load
window.onload = () => {
  if(localStorage.getItem("tasks")){
    document.getElementById("list").innerHTML = localStorage.getItem("tasks");
  }
};
