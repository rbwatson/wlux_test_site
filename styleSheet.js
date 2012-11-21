//need to have the script tag added to html file
//need to generate random number 1-#ofCases if it is first time
//need to decide how we are passing parameters (query string, etc.)

window.onload = function(){
	cssLoad();
	endbutton();
	addClicks();
};

//updates the html to use the stylesheet options.css
function cssLoad(){
	var cssId = 'style';
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.id   = cssId;
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = 'options.css'; //name of css file (from server?)
	link.media = 'all';
	head.appendChild(link);
}

//adds a endbutton to page that is in fixed position
function endButton() {
	var body = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	div.id = 'endButton';
	div.style.position = 'fixed';
	div.style.left = '10px';
	div.style.top = '10px';
	div.style.width = '100px';
	div.style.height = '30px';
	var button = document.createElement('button');
	button.type = 'button';
	button.innerHTML = 'End Survey';
	div.appendChild(button);
	body.appendChild(div);
	//('button').onClick = someFunction
}

//adds an onclick handler to all of the links in the page that updates the server
function addClicks(){
	var allLinks = document.getElementsByTagName('a');
	for(var i =0; i<allLinks.length; i++){
		allLinks[i].onclick = update;
	}
}

//updates server with to/from, time stamp info when link is pressed
function update(){
 //needs to update server with link/navigation information
 //ajax
}