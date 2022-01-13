// import { generateList, generateItem as generateListItem } from "./modules/list.js";
// import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js";

// let list = generateList(document.body);
// generateListItem(list, "Images/1.jpg");
// generateListItem(list, "Images/2.jpg");
// generateListItem(list, "Images/3.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, "images/1.jpg")
// generateTableItem(tr, "images/2.jpg")
// generateTableItem(tr, "images/3.jpg")


import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";
import * as Divic from "./modules/div.js";

let list = List.generateList(document.body);
List.generateItem(list, "Images/1.jpg");
List.generateItem(list, "Images/2.jpg");
List.generateItem(list, "Images/3.jpg");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "Images/1.jpg");
Table.generateItem(tr, "Images/2.jpg");
Table.generateItem(tr, "Images/3.jpg");

let div = Divic.generateDiv(document.body);
Divic.generateItem(div, "Images/1.jpg");
Divic.generateItem(div, "Images/2.jpg");
Divic.generateItem(div, "Images/3.jpg");