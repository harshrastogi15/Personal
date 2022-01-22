var ro = document.querySelector(':root');
var mode= document.querySelector(".mode");
var form= document.querySelector(".formdisplay");
var formbutton= document.querySelector(".contactbutton");
var formclick= document.querySelector(".contactclick");
var contactform= document.getElementById("contactform");

mode.addEventListener('click',()=>{
    if(ro.style.getPropertyValue('--back-color')=='rgb(51, 52, 53)'){
        ro.style.setProperty('--main-color', 'rgb(83, 88, 92)');
        ro.style.setProperty('--back-color', 'rgb(255, 255, 255)');
        mode.children[0].className="fa fa-toggle-off";
    }
    else{
        ro.style.setProperty('--main-color', 'rgb(255, 255, 255)');
        ro.style.setProperty('--back-color', 'rgb(51, 52, 53)');
        mode.children[0].className="fa fa-toggle-on";
    }
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navscroll").style.position = "fixed";
    document.getElementById("navscroll").style.borderBottom = "1px solid rgb(158, 166, 173)";
    document.getElementById("navscroll").style.zIndex = "2";
    
} 
else {
    document.getElementById("navscroll").style.position = "relative";
    document.getElementById("navscroll").style.backgroundColor = "var(--back-color)";
    document.getElementById("navscroll").style.borderBottom = "0px solid rgb(158, 166, 173)";
    document.getElementById("navscroll").style.zIndex = "0";
  }
}

form.addEventListener('click',()=>{
    contactform.style.display="block";
});

formbutton.addEventListener('click',()=>{
    contactform.style.display="block";
});

formclick.addEventListener('click',()=>{
    contactform.style.display="block";
});

function dnone(){
    contactform.style.display="none";
}

var form = document.querySelector('form');

form.addEventListener('submit',()=>{
    alert("Thanks for filling the form.\nwe communicate soon by harshrastogi172000@gmail.com");
    contactform.style.display="none";
    location.reload();

});


