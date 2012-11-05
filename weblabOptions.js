//paste in html
//script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js" type="text/javascript"></script>
//<script src="weblabOptions.js" type="text/javascript"></script>
window.onload = function() {
	alert(walk());
}

function walk() {
	var s = $$('body *');
	var str = ['BODY'];
	var len = 1;
	for(var i=0;i<s.length;i++) {
		if(str.indexOf(s[i].nodeName) == -1) {
			str[len] = s[i].nodeName;
			len++;
		}
	}
	return str;
}
