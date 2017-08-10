var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var txt1 = document.getElementById("textarea1");
var txt2 = document.getElementById("textarea2");
var txt3 = document.getElementById("textarea3");
var txt4 = document.getElementById("textarea4");
var txt5 = document.getElementById("textarea5");

function clickBtn1() {
	if (testActive(btn1)) {
		btn1.classList.remove('active');
		document.getElementById("sidenav").style.width = "90%";
	} else {
		document.getElementById("sidenav").style.width = "20%";
		btn1.classList.add('active');
		btn2.classList.remove('active');
		btn3.classList.remove('active');
		btn4.classList.remove('active');
		btn5.classList.remove('active');
		document.getElementById("main").style.marginTop = "0";
	};
}
function clickBtn2() {
	if (testActive(btn2)) {
		btn2.classList.remove('active');
		document.getElementById("sidenav").style.width = "90%";
	} else {
		document.getElementById("sidenav").style.width = "20%";
		btn1.classList.remove('active');
		btn2.classList.add('active');
		btn3.classList.remove('active');
		btn4.classList.remove('active');
		btn5.classList.remove('active');
		document.getElementById("main").style.marginTop = "-" + window.innerHeight + "px";
	};
}
function clickBtn3() {
	if (testActive(btn3)) {
		btn3.classList.remove('active');
		document.getElementById("sidenav").style.width = "90%";
	} else {
		document.getElementById("sidenav").style.width = "20%";
		btn1.classList.remove('active');
		btn2.classList.remove('active');
		btn3.classList.add('active');
		btn4.classList.remove('active');
		btn5.classList.remove('active');
		document.getElementById("main").style.marginTop = "-" + 2*window.innerHeight + "px";
	};
}
function clickBtn4() {
	if (testActive(btn4)) {
		btn4.classList.remove('active');
		document.getElementById("sidenav").style.width = "90%";
	} else {
		document.getElementById("sidenav").style.width = "20%";
		btn1.classList.remove('active');
		btn2.classList.remove('active');
		btn3.classList.remove('active');
		btn4.classList.add('active');
		btn5.classList.remove('active');
		document.getElementById("main").style.marginTop = "-" + 3*window.innerHeight + "px";
	};
}
function clickBtn5() {
	if (testActive(btn5)) {
		btn5.classList.remove('active');
		document.getElementById("sidenav").style.width = "90%";
	} else {
		document.getElementById("sidenav").style.width = "20%";
		btn1.classList.remove('active');
		btn2.classList.remove('active');
		btn3.classList.remove('active');
		btn4.classList.remove('active');
		btn5.classList.add('active');
		document.getElementById("main").style.marginTop = "-" + 4*window.innerHeight + "px";
	};
}

function testActive(element) {
    return (' ' + element.className + ' ').indexOf(' active ') > -1;
}

function clearData() {
	if(localStorage && confirm("Sure you want to delete everything?")) {
		txt1.value = "";
		txt2.value = "";
		txt3.value = "";
		txt4.value = "";
		txt5.value = "";
		localStorage.removeItem('txt1');
		localStorage.removeItem('txt2');
		localStorage.removeItem('txt3');
		localStorage.removeItem('txt4');
		localStorage.removeItem('txt5');
	} else {
		alert("Uh oh... local storage is not supported!");
	}
}

function storeData() {
	if(localStorage) {
		localStorage.setItem('txt1', txt1.value);
		localStorage.setItem('txt2', txt2.value);
		localStorage.setItem('txt3', txt3.value);
		localStorage.setItem('txt4', txt4.value);
		localStorage.setItem('txt5', txt5.value);
	} else {
		alert("Uh oh... local storage is not supported!");
	}
}

window.onload = function () {
	if(localStorage) {
		txt1.value = localStorage.getItem('txt1');
		txt2.value = localStorage.getItem('txt2');
		txt3.value = localStorage.getItem('txt3');
		txt4.value = localStorage.getItem('txt4');
		txt5.value = localStorage.getItem('txt5');
	} else {
		alert("Uh oh... local storage is not supported!");
	}
}

function saveData() {
	var dataString = 
		"Brainstorm topic 1\n" + txt1.value
		+ "\n\nBrainstorm topic 2\n" + txt2.value
		+ "\n\nBrainstorm topic 3\n" + txt3.value
		+ "\n\nBrainstorm topic 4\n" + txt4.value
		+ "\n\nBrainstorm topic 5\n" + txt5.value;
	var currentTime = new Date();
	var ss = ("0" + currentTime.getSeconds()).slice(-2);
	var min = ("0" + currentTime.getMinutes()).slice(-2);
	var hh = ("0" + currentTime.getHours()).slice(-2);
	var dd = ("0" + currentTime.getDate()).slice(-2);
	var mm = ("0" + (currentTime.getMonth() + 1)).slice(-2);
	var yyyy = currentTime.getFullYear();
	var filename = "brainstormdata-" + yyyy + mm + dd + "-" + hh + min + ss + ".txt"
	var BB = new Blob([dataString], {type: "text/plain;charset=utf-8"});
	saveAs(BB, filename);
}