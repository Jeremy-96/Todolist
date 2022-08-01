const add = document.getElementById("newtask__button");


const eltList = document.getElementsByTagName("li");
let i;
for(i = 0; i < eltList.length ; i++) {
  const crossBox = document.createElement("span");
  const cross = document.createTextNode("\u00D7");
  crossBox.className = "delete";
  crossBox.appendChild(cross);
  eltList[i].appendChild(crossBox);
}
const deleteBtn = document.getElementsByClassName("delete");
for(i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].onclick = function() {
    const bloc = this.parentElement;
    bloc.style.display = "none";
  }
}


function newElement() {
  const newElt = document.createElement("li");
  newElt.classList.add("todo__item");
  const inputElt = document.getElementById("newtask__input").value;
  const textElt = document.createTextNode(inputElt);
  newElt.appendChild(textElt);
  const listElt = document.getElementById("todo");

  if(inputElt === '') {
    alert("Please, write something to do !")
  }else {
    listElt.appendChild(newElt);
  }

  const crossBox = document.createElement("span");
  const cross = document.createTextNode("\u00D7");
  crossBox.className = "delete";
  crossBox.appendChild(cross);
  newElt.appendChild(crossBox);

  for(i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function() {
      const bloc = this.parentElement;
      bloc.style.display = "none";
    }
  }
}






