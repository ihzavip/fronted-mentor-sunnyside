const menu = document.getElementById("menu");
const navigation = document.getElementById("navigation");

menu.addEventListener("click", function(){
    navigation.classList.toggle("mobile-active");
})

//it will be called if the size of the window is being changed
window.onresize = myFunction;

function myFunction(){
    if(document.documentElement.clientWidth >= 900){
        navigation.classList.remove("mobile-active");
    }
}

// scroll to top function 
const topBtn = document.getElementById("to__top");
window.onscroll = function(){
    window.scrollY >= 1000 ? topBtn.classList.add("transform") : topBtn.classList.remove("transform") ;
}

topBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})

