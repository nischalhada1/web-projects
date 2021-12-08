var takeInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[1];
var modeToggle = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTaskHolder = document.getElementById("completed-tasks");


var createNewTaskElement = function(taskString){
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    label.innerHTML = taskString;

    checkBox.type = "checkbox";
    editInput.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

var addTask = function(){
    console.log("Add task...");
    var listItem = createNewTaskElement(takeInput.value);
    console.log(takeInput.value);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompeted);
    takeInput.value = "";
}

var editTask = function(){
    console.log("edit task...");
    console.log("change 'edit' to 'save'");

    var listItem = this.parentNode;

    var editInput = listItem.querySelector('input[type=text]');
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");
    var saveChange = listItem.querySelector('button.edit');

    if(containsClass){ 
        label.innerText = editInput.value;
        saveChange.innerHTML = "Edit";
    }else{
        editInput.value = label.innerText;
        saveChange.innerHTML = "Save";

    }
    listItem.classList.toggle("editMode");
}

var deleteTask = function(){
    console.log("delete task...");

    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

var taskCompeted = function(){
    console.log("task completed");

    var listItem = this.parentNode;
    completedTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function(){
    console.log("task incomplete");
    var listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompeted)
}

var ajaxRequest = function(){
    console.log("AJAX requests");
}

function modeSelect(){
    console.log("click");
    
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        modeToggle.innerHTML = "○○Light";
    }else{
        modeToggle.innerHTML = "●●Dark";
    }
}
//⚪⚫
// addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);
modeToggle.addEventListener("click", modeSelect);

var bindTaskEvents = function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");

    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler; //taskCompleted
}

for(var i=0; i<incompleteTaskHolder.children.length; i++){
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompeted);
}

for(var i =0; i<completedTaskHolder.children.length; i++){
    bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}