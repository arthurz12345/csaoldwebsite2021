function showEvent(num, listType) {
	console.log(num);
	var e = document.getElementById("event".concat(num.toString()));
	var li = document.getElementById("li".concat(num.toString()));
    var temp1 = document.getElementById("evententry-container1");
    var temp2 = document.getElementById("evententry-container2");
	hideAllEvents(listType);
    if(num === 5 || num === 10 || num === 11 ||
         num === 13 || num === 14 || num === 15) {
        temp1.style.display = "none";
        temp2.style.display = "block";
    }
	e.style.display = "block";
	li.style.color = "white";
	li.style.backgroundColor = "rgb(47, 224, 160)";
}

function hideAllEvents(listType) {
	var numEvents = 16, i = 0, event = "", li = "";
    var eventElement = "";
    var liElement = "";
    var temp1 = document.getElementById("evententry-container1");
    var temp2 = document.getElementById("evententry-container2");
    temp1.style.display = "block";
    temp2.style.display = "none";
	for(i = 0; i < numEvents; i++) {
        event = "event";
        li = "li";
        event = event.concat(i.toString());
        li = li.concat(i.toString());
        eventElement = document.getElementById(event);
        eventElement.style.display = "none";
            liElement = document.getElementById(li);
            liElement.style.backgroundColor = "white";
            liElement.style.color = "black";
	}
}