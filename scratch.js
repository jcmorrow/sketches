var ITEMS = [
  "/assets/fire",
  "/assets/book",
]

function objFile(noun) {
  return "/assets/" + noun + ".obj";
}

ITEMS[Math.floor(Math.random() * Items.length)];

function randomItem(collection) {
  collection[Math.floor(Math.random() * collection.length)];
}

var item = randomItem(ITEMS);

getItem(item)
getMtl(item)
