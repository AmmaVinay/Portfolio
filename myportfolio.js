let listConatinerElement = document.getElementById("listConatiner");
let liItems = [{
    item1: "Name: ",
    item2: "Amma Vinay"
}, {
    item1: "Birthday: ",
    item2: "27/10/2001"
}, {
    item1: "Age:",
    item2: "22"
}, {
    item1: "Degree: ",
    item2: "Bachelor of Technology"
}, {
    item1: "Email: ",
    item2: "ammavinay2486@gmail.com"
}, {
    item1: "Phone: ",
    item2: "+919391183207"
}, {
    item1: "Address: ",
    item2: "Warangal, Telangana, India"
}];

let liItemsJSON = JSON.stringify(liItems);
localStorage.setItem('liItemsData', liItemsJSON);

for (let item of liItems) {
    let liElement = document.createElement("li");

    let strongElement = document.createElement("strong");
    strongElement.textContent = item.item1;
    liElement.appendChild(strongElement);

    let textNode = document.createTextNode(item.item2);
    liElement.appendChild(textNode);

    listConatinerElement.appendChild(liElement);
}