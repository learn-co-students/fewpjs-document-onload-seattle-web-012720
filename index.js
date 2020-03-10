// Your code goes here


function modifyText() {
    let con = document.getElementById("text");
    con.textContent = 'This is really cool!';
  }

document.addEventListener("DOMContentLoaded", modifyText);
   
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );