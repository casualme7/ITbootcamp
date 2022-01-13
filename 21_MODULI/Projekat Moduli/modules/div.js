import generateImage from "./general.js";

function generateDiv(parent) {
    let divic = document.createElement("div")
    divic.style.overflow = "hidden"
    parent.appendChild(divic);
    return divic;
}

function generateItem(parent, src) {
    let img = generateImage(src);
    parent.appendChild(img);
    return img
}

export { generateDiv, generateItem };