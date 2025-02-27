var btn=document.querySelector ('.btn');
var menu=document.querySelector('.menu');
btn.addEventlistener('click',function(){
    menu.classList.toggle ('active');
});
var navlink=document.querySelector('ul li a');
for(var i=0;i<navlink.length;i++){
    navlink [i].addEventlistener('click',function ()
    {
menu.classList.remove('active');
})
}
