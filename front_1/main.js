// EU ESQUECI QUE TINHA UM CÓDIGO JS AQUI PARA OUTRO PROJETO QUE NÃO CONTINUEI (AKA ABANDONADO) //

// Create a "close" button and append it to each list item //

var myNodelist = document.getElementsByTagName('li');
var i;	

for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item //

var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// Add a "checked" symbol when clicking on a list item //

var list = document.querySelector("ul");

list.addEventListener('click', function(ev) {
	if (ev.target.targetName === 'li') {
	ev.target.classList.toggle('checked');
	}
}, false);


// Create a new list item when clicking on the "Add" button //

function newElement () {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	var input = document.getElementById("myInput");


	li.appendChild(t);
	
	if (inputValue === "") {
		alert ("Escreva algo aqui pfvr");
	} else {
		document.getElementById("myList").appendChild(li);
	}   
		document.getElementById("myDiv").value = "";

		input.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
	}
});

		myList.forEach(function(item) {
			li.addEventListener('keypress', function(event) {
				if (event.key === 'Enter') {
					
				}
			})
		});


	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);


	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}





