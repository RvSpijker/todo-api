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

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var formdata = new FormData();
    formdata.append("task", task);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://localhost/todo-api/api/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}