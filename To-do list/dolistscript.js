const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");  // input box is empty then it pass the alert
    }
    else{
         let li = document.createElement("li");
         li.innerHTML = inputBox.value;
         listContainer.appendChild(li);    // input box is not empty or any text then display the list
         let span = document.createElement("span");   //creating the into icon
         span.innerHTML = "\u00d7";   
         li.appendChild(span);   // dispaly the icon

    } 
    inputBox.value= "";
    saveData();
} 

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //we have to click on the element text then it shoud be checked
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();   // click on the span or icon then it should be deleted
        saveData();
    }
 }, false);

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //to save the  list data
 }
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");  // to show the saved data
 }
 showTask();