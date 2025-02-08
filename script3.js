// Main access of tags from HTML code
let myH1 = document.getElementById("myH1"),
  myBtn = document.getElementById("myBtn"),
  myForm = document.getElementById("myForm"),
  myInput = document.getElementById("myInput"),
  dataSaver = document.getElementById("dataSaver");
let clickSound = document.getElementById("click");

// Prevent default form submission
myForm.addEventListener("submit", (e) => e.preventDefault());

// Function to create buttons or elements dynamically
function creatElement(elementName, innerText, classList) {
  const button = document.createElement(elementName);
  button.innerText = innerText;
  button.classList = classList;
  return button;
}

// Set data to localStorage
function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Get data from localStorage
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Initialize the task array
let arr = getLocalStorage("item") || [];
// Display welcome message if the user is visiting for the first time

if (localStorage.getItem("visited") === null) {
  let userName;

  do {
    userName = prompt("Enter your name");

    if (userName === null) {
      alert("Please enter your name to continue.");
    }
  } while (userName === null || userName === "");

  userName = userName.toUpperCase()

  alert(`Hello ${userName}! Welcome to our Todo App. Remember to use it offline for best experience !`);
  setLocalStorage("visited", "true");
}


// Populate existing tasks from localStorage
if (arr.length > 0) {
  arr.forEach(task => {
    let pTag = creatElement("p", task, "pTag"),
      newDiv = creatElement("div", " ", "newDiv"),
      deleteBtn = creatElement("button", "Delete", "deleteBtn");
    newDiv.append(pTag, deleteBtn);
    dataSaver.append(newDiv);

    // Delete button functionality
    deleteBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this item?")) {
        let index = arr.indexOf(task);
        arr.splice(index, 1);
        setLocalStorage("item", arr);
        newDiv.remove();
      }
    });
  });
}

// Add new task functionality
myBtn.addEventListener("click", () => {
  let valueOfInput = myInput.value.trim().toLowerCase();

  if (valueOfInput !== "") {
    clickSound.play()
    if (!arr.includes(valueOfInput)) {
      arr.push(valueOfInput);
      setLocalStorage("item", arr);
      myInput.value = "";

      let pTag = creatElement("p", valueOfInput, "pTag"),
        newDiv = creatElement("div", "", "newDiv"),
        deleteBtn = creatElement("button", "Delete", "deleteBtn");

      newDiv.append(pTag, deleteBtn);
      dataSaver.append(newDiv);

      // Delete button functionality for new tasks
      deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this item?")) {
          let index = arr.indexOf(valueOfInput);
          arr.splice(index, 1);
          setLocalStorage("item", arr);
          newDiv.remove();
        }
      });
    }

    else {
      alert(`"${valueOfInput}" is already exist`);
      myInput.value = "";
    }
  }

  else {
    alert("Sorry invalid input. Please try again");
  }
});