


// CALENDAR
function createCalendar(id, month, year) {
	var div = document.createElement('div');
	div.id = id;
	div.style = "margin: 15px; padding: 15px; border: 1px solid #d6e9c6; border-radius: 4px; color: #3c763d; background-color: #dff0d8";
	div.innerHTML = 'Click to calendar: '+month+' '+year;
	return div;
}

div = createCalendar('calendar', 12, 2016);

document.body.insertBefore(div, document.body.firstChild);
div = document.getElementById('calendar');
//div.innerHTML = 'Click to';


	// Инициализируем счетчик тегов
function countTags(n) {
		var numtags = 0;
		if(n.nodeType == 1) numtags++;
		var children = n.childNodes;
		for(var i=0; i<children.length; i++) {
			numtags += countTags(children[i]);
		}
		return numtags;
}
console.log(countTags(document.body));

var div_two = document.createElement('div');
div_two.style = "margin: 15px; padding: 15px; border: 1px solid #d6e9c6; border-radius: 4px; color: #3c763d; background-color: #dff0d8";
div_two.innerHTML = "This element have "+countTags(document.body)+" elements";
div_two.id = 'div_two';
document.body.appendChild(div_two);
//document.body.insertBefore(div_two, document.body.children[0]);

// delite at 3 secund
//setTimeout(div_two.hidden = false , 25000);
