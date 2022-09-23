const input = document.getElementById("inpuT")
const addTasks = document.getElementById("addtask")
const clearTasks = document.getElementById("cleartasks")

addTasks.addEventListener("click", addtasks)
clearTasks.addEventListener("click", cleartasks)

if (tasks.innerHTML == ""){
    provide.innerHTML = '<p  class="knoting">You do not have tasks!:)</p>'
}

function addtasks() {
    if (input.value != "") {
        provide.innerHTML = ""
        tasks.innerHTML += '<input type="checkbox" id="taskCheck" ><p id="taskslist"> ' + input.value + ' </p>'
        tasks.innerHTML += '<br>'
        input.value = ""
    } else {
        provide.innerHTML = '<p class="provideP">  Please provide your input</p>'
    }
}

function cleartasks() {
    tasks.innerHTML = "";
    provide.innerHTML = '<p class="knoting">You do not have tasks!:)</p>'
}
