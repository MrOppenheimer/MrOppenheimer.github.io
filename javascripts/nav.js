document.getElementById("logo").addEventListener("click", e => {
    document.getElementById("home").style.display = "Block";
    document.getElementById("portfolio").style.display = "None";
})

document.getElementById("portfolio-btn").addEventListener("click", e => {
    document.getElementById("home").style.display = "None";
    document.getElementById("portfolio").style.display = "Block";
})