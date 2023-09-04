const inputbox = document.getElementById("inputbox");
const listitems = document.getElementById("listitems");
const items = document.querySelectorAll("li");
const bt = document.querySelector("button");



function additem(){
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

bt.addEventListener('keydown', function(event){
    console.log("key pressed");
    if (event.keyCode === 13 || event.key === `Enter`){
        additem();
        // btn.click();
    }
});

listitems.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
         saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listitems.innerHTML);
}

function getData(){
    listitems.innerHTML = localStorage.getItem("data");
}
getData();