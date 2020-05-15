function autoActionSlide(keyClass){
	setInterval(function(){
		showDiv(slideIndex,keyClass);
		slideIndex++;
	},2000);
	setInterval(function(){
		showDivMain(slideIndex);
	},4000);

}
function plusDivs(n,keyClass){
	showDiv(slideIndex +=n, keyClass);
}
function showDiv(n , keyClass){
	var i;
	var x= document.getElementsByClassName(keyClass);
	if(n+4<0){
		slideIndex=x.length;
	}
	if(n+4>x.length){
		slideIndex=0;
	}
	for(i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	x[slideIndex].style.display = "block";
	x[slideIndex+1].style.display = "block";
	x[slideIndex+2].style.display = "block";
	x[slideIndex+3].style.display = "block";

}
var buttonLeft = document.getElementById('button-left');
buttonLeft.addEventListener('click',function(event){
	plusDivs(-1);
})
var buttonRight = document.getElementById('button-right');
buttonRight.addEventListener('click',function(event){
	plusDivs(1);
})

// action slide main
function currentDiv(n){
	showDivMain(slideIndex = n);
}
function plusDivsMain(n){
	showDivMain(slideIndex +=n);
}
function showDivMain(n){
	var i;
	var x= document.getElementsByClassName('mySlides-main');
	var y= document.getElementsByClassName('circle-slide');
	if(n<0){
		slideIndex=x.length;
	}
	if(n>=x.length){
		slideIndex=0;
	}
	for(i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	for(i = 0; i < y.length; i++) {
		y[i].className = y[i].className.replace("circle-slide-while", "");
	}
	x[slideIndex].style.display = "block";
	y[slideIndex].className += 'circle-slide-while';

}
var buttonLeft = document.getElementById('button-left-slide-main');
buttonLeft.addEventListener('click',function(event){
	plusDivsMain(-1);
})
var buttonRight = document.getElementById('button-right-slide-main');
buttonRight.addEventListener('click',function(event){
	plusDivsMain(1);
})