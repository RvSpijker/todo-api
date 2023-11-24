async function taskDelete(id) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
    
    await fetch("http://localhost/todo-api/api/?id=" + id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    // refresh page
    // window.location.href = "todos.html";

    const card = "card" + id
    document.getElementById(card).remove();
}