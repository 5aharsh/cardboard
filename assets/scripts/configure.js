var false_anchors = document.querySelectorAll(".false-anchor")      // false click anchor

const anchorHandle = (e)=>{
    e.preventDefault()
}

false_anchors.forEach((anchor)=>{
    anchor.addEventListener('click', anchorHandle, false)
})

var config_btn = document.getElementById("config-btn")
var config_box = document.getElementById("configure")
var main_display = document.getElementById("display-box")
var username = document.getElementById("greet-name")                // greeting name input field
var darkmode = document.getElementById("dark-mode")
var save_config = document.getElementById("save-config")
var close_config = document.getElementById("close-config")

// DOM magicks
var name_display = document.getElementById("user-name")

// load data from localstorage
username.value = ls.getItem("username")
darkmode.checked = JSON.parse(ls.getItem("darkmode").toLowerCase())

//save configs
save_config.onclick = (e)=>{
    ls.setItem("username", username.value)
    ls.setItem("darkmode", darkmode.checked)
    console.log(username.value, darkmode.checked);

    // set stuffs
    name_display.innerText = ls.getItem("username")

    save_config.value = "Saved!"
    setTimeout(()=>{save_config.value = "Save"}, 2000)
}

close_config.onclick = (e)=>{
    config_box.style.display = "none"
    main_display.style.display = "grid"
}

config_btn.onclick = (e)=>{
    config_box.style.display = "grid"
    main_display.style.display = "none"
}