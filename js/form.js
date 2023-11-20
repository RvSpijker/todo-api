// setup form
window.onload = function () {
    getTodos();

    form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
};

// form submit event handler
function handleFormSubmit(event)
{    
    event.preventDefault();
    createNewTodo();
}

async function createNewTodo()
{
    // get form data
    const task = document.getElementById("task").value;
    const name = localStorage.name;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("task", task);
    urlencoded.append("name", name);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    await fetch("http://localhost/todo-api/api/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    // refresh page
    window.location.href = "todos.html";
}