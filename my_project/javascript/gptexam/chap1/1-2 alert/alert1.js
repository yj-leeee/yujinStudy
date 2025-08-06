const btn = document.getElementById("btn");

function showAlert(btn){
    alert("조심하세요!")
    btn.style.backgroundColor = "yellow"
}

btn.addEventListener("click", function(){
    showAlert(btn);
});