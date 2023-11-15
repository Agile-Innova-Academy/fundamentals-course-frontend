const list = document.getElementById('list');

const render = (data) => {
    let child = '';
    data.forEach(element => {
        child += `<p><b>userId:</b> ${element.userId} - <b>id:</b> ${element.id} - <b>title:</b> ${element.title} - <b>body:</b> ${element.body}</p>`
    });

    list.innerHTML = child;
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => render(data))
    .catch(err => console.log(err.message))