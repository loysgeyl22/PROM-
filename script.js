document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("response").classList.remove("hidden");
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
