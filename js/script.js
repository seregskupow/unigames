function onlineFunc() {
	var status = document.getElementById("status");
	status.innerHTML="В мережі";
	var acc = document.getElementById("acc");
	acc.style.color="green";
};
function offlineFunc() {
	var status = document.getElementById("status");
	status.innerHTML="Не в мережі";
	var acc = document.getElementById("acc");
	acc.style.color="#ba0000";
	
};
function disturbFunc() {
	var status = document.getElementById("status");
	status.innerHTML="Відійшов";
	var acc = document.getElementById("acc");
	acc.style.color="#f4bf42";
};
function homeFunc() {
	var home = document.getElementById("home");
	home.style.display="block";
	var store =document.getElementById("store");
	store.style.display="none";
	var libr =document.getElementById("libr");
	libr.style.display="none";
	var set =document.getElementById("settings");
	set.style.display="none";
};
function storeFunc() {
	var home = document.getElementById("home");
	home.style.display="none";
	var store =document.getElementById("store");
	store.style.display="block";
	var libr =document.getElementById("libr");
	libr.style.display="none";
	var set =document.getElementById("settings");
	set.style.display="none";
};
function librFunc() {
	var home = document.getElementById("home");
	home.style.display="none";
	var store =document.getElementById("store");
	store.style.display="none";
	var libr =document.getElementById("libr");
	libr.style.display="block";
	var set =document.getElementById("settings");
	set.style.display="none";
};
function setFunc() {
	var home = document.getElementById("home");
	home.style.display="none";
	var store =document.getElementById("store");
	store.style.display="none";
	var libr =document.getElementById("libr");
	libr.style.display="none";
	var set =document.getElementById("settings");
	set.style.display="block";
};/*
function changeFunc() {
	
	var buttext =document.getElementsByClassName("btn3");
	var toggle=document.getElementsByClassName("dropdown-item");
	var p=document.getElementById("change");
	console.log(buttext.innerHTML);
	console.log(p.innerHTML);
	 	toggle.addEventListener("click",textFunc(buttext,p));
};
function textFunc(a,b){
	a.innerHTML=b.innerHTML;

};
*/

$(".page").click(function(e){
	e.preventDefault();
	var val = $(this);
	$(".b1").text(val.find("p").text());

});
$(".error").click(function(e){
	e.preventDefault();
	var val = $(this);
	$(".b2").text(val.find("p").text());

});
$(".limit").click(function(e){
	e.preventDefault();
	var val = $(this);
	$(".b3").text(val.find("p").text());

});
$(".limit2").click(function(e){
	e.preventDefault();
	var val = $(this);
	$(".b4").text(val.find("p").text());

});
$(".error2").click(function(e){
	e.preventDefault();
	var val = $(this);
	$(".b5").text(val.find("p").text());

});

$(".akk").click(function(e){
	e.preventDefault();
	
	$(".registration").css("margin-top","20px");

});

$(".akk-close").click(function(e){
	e.preventDefault();
	
		$(".registration").css("margin-top","-1000px");
});

  var menu = document.querySelector( "#menu" );
  var sidebar = document.querySelector( "#side-menu" );
  var overlay = document.querySelector( "#overlay" );

    menu.addEventListener( "click", function(){
    this.classList.toggle( "active" );
    sidebar.classList.toggle( "active" );
    overlay.classList.toggle( "active" );
    overlay.onclick = function () {
      menu.classList.toggle( "active" );
      sidebar.classList.toggle( "active" );
      overlay.classList.toggle( "active" );
    }
  });

  var microphone = document.getElementById('micro');
  microphone.onclick=function(){
	  
	  var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
	  recognition.lang = 'RU';
	  recognition.start();
	
	  recognition.onresult = function(event){
		  var input = event.results[0][0].transcript;
		var search = document.getElementById('sear');
		search.value=(input);	
		}
	  
  }