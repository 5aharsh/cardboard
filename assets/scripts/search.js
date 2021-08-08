// Variables

const searchMap = {
    "google": "https://www.google.com/search?q=",
    "duckduckgo": "https://duckduckgo.com/?q=",
    "bing": "https://www.bing.com/search?q="
}

var selectedEngine = "google"

// DOM elements to be read/updated
var searchBox = document.getElementById("search-txt")
var searchLink = document.getElementById("search-link")

var googleBtn = document.getElementById("search-engines-ggl")
var ddgBtn = document.getElementById("search-engines-dg")
var bingBtn = document.getElementById("search-engines-bng")

// Methods
const highlightSearchEngine = (e)=>{

    /*
        updates active search engine based on clicked element.
        also highlights icon by adding 'selected' class
    */

    googleBtn.classList.remove('selected')
    ddgBtn.classList.remove('selected')
    bingBtn.classList.remove('selected')
    e.target.classList.add('selected')
    selectedEngine = e.target.getAttribute("name")
    updateSearchLink()
}

const updateSearchLink = ()=>{
    /* 
        updates search button with anchor link to open search query in respective engine website.
        also returns the effective web url
    */
    searchLink.setAttribute("href", searchMap[selectedEngine]+searchBox.value)
    return searchMap[selectedEngine]+searchBox.value
}

// DOM actions

searchBox.oninput = ()=>{
    if(searchBox.value.trim()==""){
        searchLink.setAttribute("href", "javascript:void(0)")
    } else {
        updateSearchLink()
    }
}

searchBox.addEventListener("keyup", (e)=>{
    if(e.key=="Enter"){
        window.open(updateSearchLink(), "_blank")
    }
})

googleBtn.onclick = highlightSearchEngine
ddgBtn.onclick = highlightSearchEngine
bingBtn.onclick = highlightSearchEngine