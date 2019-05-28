var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemsArray = document.querySelectorAll("li");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li= document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
	if (inputLength()>0) {
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength()>0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event){
	event.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

itemsArray.forEach(function(item){
	item.addEventListener("click", toggleDone);
})

var deleteButtons = document.getElementsByClassName("delete");

function deleteItem(event){
	var node=event.target;
	node.parentNode.removeChild(node);
}

deleteButtons.forEach(function(del){
	console.log(deleteButtons);
	// del.addEventListener("click", deleteItem);
})