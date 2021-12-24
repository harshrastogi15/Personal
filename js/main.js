var ro = document.querySelector(':root');
var mode= document.querySelector(".mode");

mode.addEventListener('click',()=>{
    if(ro.style.getPropertyValue('--back-color')=='rgb(0, 0, 0)'){
        ro.style.setProperty('--main-color', 'rgb(83, 88, 92)');
        ro.style.setProperty('--back-color', 'rgb(255, 255, 255)');
    }
    else{
        ro.style.setProperty('--main-color', 'rgb(255, 255, 255)');
        ro.style.setProperty('--back-color', 'rgb(0, 0, 0)');
    }
});