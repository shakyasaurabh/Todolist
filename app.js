// Welcome to my timepass project , do follow me on github 
// #### https://github.com/shakyasaurabh #######
// for more simple projects like this ;) <3

// Variables

const inputbox = document.getElementById("inputbox");
const listitems = document.getElementById("listitems");
const items = document.querySelectorAll("li");
const button = document.querySelector("button");

// Adding items in list function

function additem(){

// checking if filed is empty, if not add a item

    if(inputbox.value == ""){
        alert('Please enter a task');
    }else{
        const item = document.createElement("li");
        item.innerHTML = inputbox.value;
        listitems.appendChild(item);
        const span = document.createElement("span");
        item.appendChild(span);
    }
    inputbox.value = "";
    saveData();
    console.log("added");
}; 

// Enter to call additem function 

document.body.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      additem();
    }
});

// click feature to check and delete item

listitems.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
         saveData();
    }
});

// functions to save data in browser`s memory

function saveData(){
    localStorage.setItem("data", listitems.innerHTML);
}

// retrive data from browser`s memory

function getData(){
    listitems.innerHTML = localStorage.getItem("data");
}

// Calling retrive data automatically so it can show
// previously added items
getData();