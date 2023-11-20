window.onload = function () {
    form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
};

function handleFormSubmit(event)
{    
    event.preventDefault();
    getName();
}

function getName() {
    localStorage.name = document.getElementById("task").value;
    window.location.href = "../todos.html";
}

