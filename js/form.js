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
// variable with form data
    let formData = new FormData(form);

// api call
await fetch("http://localhost/todo-api/api/", 
    {
        method: "POST",
        body: formData
    }
)
// JSON response
    .then(response => response.json())
    .then(data => {
        antwoord_van_server = data;
        console.log(antwoord_van_server);
    })
    .catch(error => console.log('error', error)); // error message in console
}



// document.getElementById("form").addEventListener("submit", (event) => {
//     event.preventDefault();

//     const task = document.getElementById("task").value;

//     const data = {
//         task: task
//     };

//     postData("http://localhost/todo-api/api/", data)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//         });
// });

// async function postData(url = "", data = {}) {
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });

//     return await response.json();
// }