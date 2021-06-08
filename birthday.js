var fld = document.querySelector('textarea');
var backUp = fld.getAttribute('placeholder');


fld.onfocus = function(){
	this.setAttribute('placeholder', '');
	this.style.borderColor = blue;
}

fld.onblur = function(){
	this.setAttribute('placeholder', backUp);
}