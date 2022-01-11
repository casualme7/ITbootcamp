import { generateList, generateListItem } from "./modules/list.js";

let list = generateList(document.body);
generateListItem(list, "Images/1.jpg");
generateListItem(list, "Images/2.jpg");
generateListItem(list, "Images/3.jpg");

