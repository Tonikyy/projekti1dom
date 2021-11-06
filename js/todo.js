let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');

let taskList = [];
        //*Delete function*//
function deleteListItem(i) {
  taskList.splice(i, 1);
  populateList();
  //* alert("Tehtävä poistettu"); <-- lähinnä ärsyttävä, joten ei käytössä *//
}
        //*Populate list*//
function populateList() {
  listElement.innerHTML = "";
  taskList.forEach((item, i) => {
    let newItem = document.createElement('li');

    let span = document.createElement('span');
    span.innerHTML = item;
    newItem.appendChild(span);

        //delete nappi//
    let anchorElement = document.createElement('a');
    anchorElement.innerHTML = '<i class="fas fa-trash-alt"></i>';
    newItem.appendChild(anchorElement);
    listElement.appendChild(newItem);
    anchorElement.addEventListener('click', () => deleteListItem(i));
  });
  inputElement.value = '';
}
populateList();

        //*Lisaa tehtävä*/
function addTask() {
  if (inputElement.value) {
    taskList.push(inputElement.value);
    populateList();
  }
};

        //*merkkaa "tehdyksi"*//
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');}}, false);

formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

        //*Local storage tehtävälaskuri*//
function laskuri() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.count) {
      localStorage.count = Number(localStorage.count) + 1;
    } else {
      localStorage.count = 1;
    }
    document.getElementById("result").innerHTML = "Olet luonut yhteensä " + localStorage.count + " tehtävää.";
  } else {
    document.getElementById("result").innerHTML = "Selain ei tue local storagen käyttöä...";
  }
};
        

        //* Local storagen tyhjennys *//
function tyhjenna() {
  localStorage.clear();
}
