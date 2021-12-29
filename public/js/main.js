var ro = document.querySelector(':root');
var mode= document.querySelector(".mode");
var form= document.querySelector(".formdisplay");
var contactform= document.getElementById("contactform");

mode.addEventListener('click',()=>{
    if(ro.style.getPropertyValue('--back-color')=='rgb(255, 255, 255)'){
        ro.style.setProperty('--main-color', 'rgb(255, 255, 255)');
        ro.style.setProperty('--back-color', 'rgb(51, 52, 53)');
    }
    else{
        ro.style.setProperty('--main-color', 'rgb(83, 88, 92)');
        ro.style.setProperty('--back-color', 'rgb(255, 255, 255)');
    }
});

form.addEventListener('click',()=>{
    contactform.style.display="block";
});

function dnone(){
    contactform.style.display="none";
}

var form = document.querySelector('form');

form.addEventListener('submit',()=>{
    contactform.style.display="none";
    location.reload();

});
