const show=document.getElementById("toggler");
const hide=document.getElementById("p2");
const pwd=document.getElementById("pwd");
const user=document.getElementById("UserName")
show.addEventListener('click',show1)
hide.addEventListener('click',show2)
function show1(){
    wait(20);
  pwd.setAttribute('type','text');
  show.style.visibility="hidden";
  hide.style.visibility="visible";
}
function show2(){
    wait(20);
    pwd.setAttribute('type','password');
    show.style.visibility="visible";
    hide.style.visibility="hidden";
}



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
