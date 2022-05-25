document.getElementById("changeColor").addEventListener("click", function() {
    var pickedColor = document.getElementById("background-color").value;
    document.getElementById("main-content").style.color = pickedColor;
})
