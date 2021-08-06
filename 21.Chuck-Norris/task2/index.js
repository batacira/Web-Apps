//import * as helpers from './character.js';

const container = document.querySelector('.container');

 const url = 'https://rickandmortyapi.com/api/character';

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(myResponse => {
        //console.log(myResponse.results);
        myResponse.results.forEach(el => {
            //console.log(el);
            let id = el.id;
            //console.log(id);
            let name = el.name;
            //console.log(name);
            let image = el.image;
            let div = document.createElement('div');
            div.setAttribute('id', `character-${id}`);
            div.setAttribute('class', 'characters');
            let characterImage = document.createElement('img');
            characterImage.setAttribute('src', image);
            let title = document.createElement('h2');
            title.textContent = name;
            let btn = document.createElement('button');
           // btn.textContent = 'Like';
            btn.innerHTML = '<i class="fas fa-thumbs-up">    Like</i>'
            div.appendChild(characterImage);
            div.appendChild(title);
            div.appendChild(btn);
            container.appendChild(div);
        })
    })

