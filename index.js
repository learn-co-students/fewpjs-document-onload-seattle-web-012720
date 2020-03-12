document.addEventListener("DOMContentLoaded", function() {
    let paragraph = document.getElementById('text')
    console.log(paragraph.innerHTML)
    paragraph.innerHTML = "This is really cool!"
})
console.log("this is firing before the content is loaded.")