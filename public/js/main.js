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
    }
    else{
        ro.style.setProperty('--main-color', 'rgb(255, 255, 255)');
        ro.style.setProperty('--back-color', 'rgb(51, 52, 53)');
    }
});


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


