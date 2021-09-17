let colours = ['red', 'blue', 'green', 'yellow', 'aqua', 'beige', 'turquoise','red', 'blue', 'green', 'yellow', 'aqua', 'beige', 'turquoise'];

const searchColor = (data) => {
	document.getElementById('1').innerHTML = data;
	if(colours.includes(data)) {
		replace();
		renderColor(data);
	}
	else {
		replace();
		colours.map(renderColor);
	}
}

const renderColor = (color) => {
		var colorDiv = document.createElement('div');
		colorDiv.id = color;
		colorDiv.style.backgroundColor = color;
		colorDiv.className = "colors";
		document.getElementById('colors').appendChild(colorDiv);
};

const replace = () => {
	console.log(document.getElementById('colors').innerHTML ='');
}