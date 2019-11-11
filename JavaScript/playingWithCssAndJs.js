document.getElementById("para").innerHTML = "i like to go out with my people";
document.getElementById("head").innerHTML = "Mpho";
document.getElementById("mydiv2").style.backgroundColor = "green";
document.getElementById("mydiv2").style.padding = "10px";
document.getElementById("mydiv").style.backgroundColor = "blue";


var listItems1 = document.createElement("li");
var listItems2 = document.createElement("li");
var listItems3 = document.createElement("li");
listItems1.innerHTML = "item1";
listItems2.innerHTML = "item2";
listItems3.innerHTML = "item3";

document.getElementById("unorderlist").appendChild(listItems1);
document.getElementById("unorderlist").appendChild(listItems2);
document.getElementById("unorderlist").appendChild(listItems3);