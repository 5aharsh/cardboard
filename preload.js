// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const ls = localStorage

window.addEventListener("DOMContentLoaded", () => {
    appInit();

    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const dependency of ["chrome", "node", "electron"]) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }

    setInterval(() => {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Set to true to use a 12 hour date format
        var format_12hour = true;

        var d = new Date();
        var mm = months[d.getMonth()];
        var dd = d.getDate();
        var week = d.getDay();
        var min = (mins = ("0" + d.getMinutes()).slice(-2));
        var hh = d.getHours();
        var ampm = "";

        if (format_12hour) {
            ampm = hh >= 12 ? " pm" : " am";
            hh = hh % 12;
            hh = hh ? hh : 12; //show mod 0 as 12
        }

        document.getElementById("hour").innerText = hh;
        document.getElementById("min").innerText = min + ampm;
        document.getElementById("weekday").innerHTML = weeks[week];
        document.getElementById("month").innerText = mm;
        document.getElementById("day").innerText = dd;
    }, 1000);
});

const appInit = ()=>{
    if(ls.getItem("init")==undefined){
        console.log("Initialization setup...");
        ls.setItem("init", true)
        ls.setItem("username", "")
        ls.setItem("darkmode", true)
        console.log("Initialization setup complete.");
    }
}