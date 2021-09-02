const ls = localStorage
var false_anchors = document.querySelectorAll(".false-anchor")      // false click anchor
var username = document.getElementById("greet-name")                // greeting name input field
var darkmode = document.getElementById("dark-mode")

false_anchors.forEach((anchor)=>{
    anchor.onclick = (e)=>{e.preventDefault()}
})

username.value = ls.getItem("username")
darkmode.checked = ls.getItem("darkmode")
