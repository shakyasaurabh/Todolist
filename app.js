// Welcome to my timepass project , do follow me on github 
// #### https://github.com/shakyasaurabh #######
// for more simple projects like this ;) <3

// Variables

const inputbox = document.getElementById("inputbox");
const listitems = document.getElementById("listitems");
const items = document.querySelectorAll("li");
const button = document.querySelector("button");
const backgroundContainer = document.getElementById('container');
const changeBackgroundButton = document.getElementById('change-background');



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

// ##Changing Background wall ## 

// Function to set the background image from local storage
function setBackgroundFromLocalStorage() {
    const backgroundImage = localStorage.getItem('backgroundImage');
    if (backgroundImage) {
        backgroundContainer.style.backgroundImage = `url(${backgroundImage})`;
        changeBackgroundButton.innerHTML = "Change Wallpaper" ;
    }
}

// Function to handle the "Change Wallpaper" button click

function changeBackground() {
    const currentBackground = backgroundContainer.style.backgroundImage;
    if (currentBackground && currentBackground !== 'none') {
        // If there's a background image, remove it
        backgroundContainer.style.backgroundImage = 'none';
        localStorage.removeItem('backgroundImage');
        changeBackgroundButton.innerHTML = "Add wallpaper";
    } else {
        // Prompt user to upload an image
        const imageInput = document.createElement('input');
        imageInput.type = 'file';
        imageInput.accept = 'image/*';

        // Listen for file selection
        imageInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const backgroundImageURL = e.target.result;
                    backgroundContainer.style.backgroundImage = `url(${backgroundImageURL})`;
                    localStorage.setItem('backgroundImage', backgroundImageURL);
                    changeBackgroundButton.innerHTML = "Remove Wallpaper";
                };
                reader.readAsDataURL(file);
            }
        });

        // Trigger the file input dialog
        imageInput.click();
    }
}

// Add event listener for the "Change Wallpaper" button
changeBackgroundButton.addEventListener('click', changeBackground);





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
// Initialize the background from local storage
setBackgroundFromLocalStorage();
getData();