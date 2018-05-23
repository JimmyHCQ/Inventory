var inventoryJSON = {
  "bag":{
    "item":[
      {
        "id":1,
        "name":"sword",
        "description":"This is a sword made of steel.",
        "price":200,
        "weight":45,},
      {
        "id":2,
        "name":"armor",
        "description":"This is an armor made of leather.",
        "price":300,
        "weight":50},
      {
        "id":3,
        "name":"shield",
        "description":"This is a shield made of iron.",
        "price":500,
        "weight":50},
      {
        "id":4,
        "name":"potion",
        "description":"Hell yeah ! This is a fucking potion fucking usefull ! Fuck !",
        "price":1000,
        "weight": 2}
    ]
  }
}

var currentItem = 0;
var currentBoxItem = 0;
var containerD = document.getElementById('containerDescription');
var inventory = document.getElementById('Inventory');

function start(){
  bag=inventoryJSON.bag;
  for (i=0;i < bag.item.length;i++) {
    item=bag.item[currentItem].name;
    document.getElementById("containerButton").innerHTML += "<button onclick=\"selectedItem='" + i + "', currentBox='boxItem" + i + "', addItem()\">Buy " + item + "</button>";
    document.getElementById("containerButton").innerHTML += "<button onclick=\"selectedItem='" + i + "', currentBox='boxItem" + i + "', removeItem()\">Sell " + item + "</button>";
    currentItem++;
  }
}

function addItem() {
  currentItem = selectedItem;
  item=bag.item[currentItem].name;
    inventory.innerHTML += "<div id='item" + currentItem + "' class='boxItem' onclick=\"selectedItem='" + currentItem + "', addDescription()\">"+ item + "</div>";
}

function addDescription() {
  currentItem = selectedItem;
  description=bag.item[currentItem].description;
    containerD.innerHTML = "<div id='item" + currentItem + "'>"+ description + "</div>";
    document.getElementById('containerDescription').style.display = 'flex';

}


function removeItem() {
  currentItem = selectedItem;
  var remove = document.getElementById('item' + currentItem + '');
  remove.parentNode.removeChild(remove);
}

function openBag() {
  document.getElementById('closedBag').style.display = 'none';
  document.getElementById('openedBag').style.display = 'flex';
  document.getElementById('containerInventory').style.display = 'flex';
}
function closeBag() {
  document.getElementById('containerInventory').style.display = 'none';
  document.getElementById('containerDescription').style.display = 'none';
  document.getElementById('closedBag').style.display = 'flex';
  document.getElementById('openedBag').style.display = 'none';
  containerD.innerHTML = "";
}
