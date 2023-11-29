const ShowCard = (template, container, data) => {
    let fragment = document.createDocumentFragment();
    data.forEach(item => {
        const {id, name, image } = item;
        template.querySelector('img').setAttribute('src', image );
        template.querySelector('img').setAttribute('alt', name );
        template.querySelector('h5').textContent = name;
        template.querySelector('a').setAttribute('id', id);
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    container.appendChild(fragment);
}

export default ShowCard;