import "./styles.css";

const app = document.getElementById("app");
const list = document.createElement("ul");
const newItemForm = document.getElementById("new_item");
app.appendChild(list);

function addRow(item) {
  let row = document.createElement("li");
  row.innerHTML = item;
  let remover = document.createElement("span");
  remover.classList.add("remove_row");
  remover.innerHTML = " X";
  remover.addEventListener("click", e => {
    e.target.parentNode.remove();
    countListItem();
  });
  row.appendChild(remover);
  list.appendChild(row);
  countListItem();
}

function countListItem() {
  let collection = list.getElementsByTagName("li");
  document.getElementById("list_counter").innerText = collection.length;
}

newItemForm.addEventListener("submit", e => {
  e.preventDefault();
  let newItem = document.getElementById("new_item_field").value;
  addRow(newItem);
  document.getElementById("new_item_field").value = null;
});
addRow("Zrobić zakupy");
addRow("Sprzedać auto");
addRow("Pojechać w himalaje");
addRow("Zjeść barszcz");
addRow("Zjeść barszcz");
