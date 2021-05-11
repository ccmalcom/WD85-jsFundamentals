const addStore = document.getElementById('addStoreForm');
const storeLoc = document.getElementById('storeName')
const addInventory = document.getElementById('addInventoryForm');
const selectStore = document.getElementById('storeArr');
const displayInfo = document.getElementById('displayStore');
addStore.addEventListener('submit', storeFront);
addInventory.addEventListener('submit', stockStore);
let storeArr = [];
addInventory.style.display = 'none';
function setOptions() {
    while(selectStore.firstChild) {
        selectStore.removeChild(selectStore.firstChild);
    }
    storeArr.forEach((x,i) => {
        let option = document.createElement('option')
        option.value = x.location;
        option.name = x.location;
        option.innerText = x.location;
        option.setAttribute('index', i);
        selectStore.appendChild(option);
    })
} 
function storeFront(e) {
    e.preventDefault();
    let newLocation = new CupcakeShop(storeLoc.value);
    storeArr.push(newLocation);
    console.log(storeArr);
    dashBoard();
    storeLoc.value = '';
}
function dashBoard() {
    while(displayInfo.firstChild) {
        displayInfo.removeChild(displayInfo.firstChild);
    }
    storeArr.map((store,index) => {
        // BUILD ELEMENTS
        let container = document.createElement('div');
        let header = document.createElement('h2');
        let inv = document.createElement('p');
        let cash = document.createElement('p');
        let sellOne = document.createElement('button');
        // SET ATTRIBUTES
        container.setAttribute('id', index)
        header.innerText = store.location;
        inv.innerText = `Inventory Qty: ${store.inventory.length}`;
        cash.innerText = `$${store.cash}`;
        sellOne.innerText = 'Sell One';
        sellOne.onclick = ringOut;
        // APPEND TO DOM
        container.appendChild(header);
        container.appendChild(inv);
        container.appendChild(cash);
        container.appendChild(sellOne);
        displayInfo.appendChild(container);
    })
    addInventory.style.display = 'block';
    setOptions();
}
function stockStore(e) {
    e.preventDefault();
    const shipToStore = document.getElementById('storeArr')
    const qty = document.getElementById('qty');
    const batter = document.getElementById('batter');
    const icing = document.getElementById('icing');
    const cost = document.getElementById('number');
    let storeIndex = shipToStore.options[shipToStore.selectedIndex].index;
    let storeFront = storeArr[storeIndex];
    console.log(storeFront);
    let stock = storeFront.bakeBatch(qty.value, batter.value, icing.value, cost.value);
    dashBoard()
}
function ringOut() {
    let i = document.activeElement.parentElement.id;
    let storeLoc = storeArr[i];
    storeLoc.sellCupcake(); // returns a string
    dashBoard();
}