window.onload = function ()
{
    form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event)
{    
    event.preventDefault();
    getName();
}

async function getName() {
    localStorage.name = document.getElementById("name").value;
    window.location.href = "todos.html";
}