import {data} from "../data/data.js";

const items = document.getElementById('items');
const templateCard = document.getElementById('template-Card').content;
const fragmen = document.createDocumentFragment();
let like = {};

document.addEventListener('DOMContentLoaded', () => {
    loadData(data)
})

const loadData = data => {
    data.forEach(Restaurante => {
        const { id, name, image } = Restaurante;
        templateCard.querySelector('h5').textcontent = name;
        templateCard.querySelector('img').setAtribute('src', img);
        templateCard.querySelector('.btn-dark').dataset.id = id

        const clone = templateCard.cloneNode(true)
        fragmen.appendChild(clone)
    })

    items.appendChild(fragmen)
}