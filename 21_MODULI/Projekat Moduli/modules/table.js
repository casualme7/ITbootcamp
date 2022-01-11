import { generateImage } from "./general.js";

function generateTable(parent) {
    let newTable = document.createElement("table");
    newTable.style.border = "0";
    parent.appendChild(newTable);
    return newTable;
}

function generateTableRow(parent) {
    let newRow = document.createElement("tr");
    parent.appendChild(newRow);
    return newRow;
}

function generateTableItem(parent, src) {
    let newTableData = document.createElement("td");
    let img = generateImage(src);
    newTableData.appendChild(img);
    parent.appendChild(newTableData)
    return newTableData;
}

export { generateTable, generateTableRow, generateTableItem };