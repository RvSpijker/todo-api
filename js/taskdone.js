async function taskDone(id) {
    var requestOptions = {
        method: 'PUT',
        redirect: 'follow'
    };
    
    await fetch("http://localhost/todo-api/api/?id=" + id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    // refresh page
    // window.location.href = "todos.html";

    const done = document.createElement("img");
    done.className = "done";
    done.src = "img/done.png";
    const element3 = document.getElementById("flex" + id);
    element3.appendChild(done);
}