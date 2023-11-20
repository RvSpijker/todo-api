function cardSwap() {
    document.getElementById("addcard").style.display = "none"; 
    document.getElementById("addtask").style.display = "block"; 
}

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }

})