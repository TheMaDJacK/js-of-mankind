//Creating button
let btn = document.createElement("BUTTON");
btn.style.width = '62px';
btn.innerHTML = 'Menu';
document.body.appendChild(btn);
//Button created
//Creating div with list of elements
let dropDownPart = document.createElement('div');
document.body.appendChild(dropDownPart);
let ul = document.createElement('ul');
for (let i = 0; i < 5; i++) {
    li = document.createElement('li');
    li.innerHTML = "option " + i;
    li.style.listStyleType = 'none';
    li.setAttribute('onmouseover', 'hover(this);');
    li.setAttribute('onmouseout', 'hoverOff(this);');
    li.setAttribute('onclick', 'clickFunction(this);');
    ul.appendChild(li);
}
dropDownPart.appendChild(ul);
dropDownPart.style.display = 'block';
dropDownPart.style.border = '1px solid black';
dropDownPart.style.width = '60px';
dropDownPart.style.display = 'none';
ul.style.padding = '0px';
ul.style.margin = '0px';
//Div created
//All the useful functions
function hover(element) {
    element.style.background = "grey";
}
function hoverOff(element) {
    element.style.background = "white";
}
function clickFunction(element){
    btn.innerHTML = element.innerHTML;
    hide();
}
function hide() {
    dropDownPart.style.display = 'none';
}
function show() {
    dropDownPart.style.display = 'block';
}
//This part opens and closes the menu on "onclick"
btn.onclick=function(){
    if (dropDownPart.style.display === 'none') {
        show();
    }else if (dropDownPart.style.display === 'block') {
        hide();
    }
};
//This part is responsible for closing the list on "window.onclick"
let flag = 0;
btn.onmouseover = function(){
    flag = 1;
};
btn.onmouseout = function(){
    flag = 0;
};
window.onclick=function(){
    if (dropDownPart.style.display === 'block' && flag === 0) {
        hide();
    }
};