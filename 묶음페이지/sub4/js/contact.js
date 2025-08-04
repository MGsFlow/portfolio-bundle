$(function(){
    Dots4.generate({speed: 20000});
 });

 var burger = $('.menu-trigger');

burger.each(function (index) {
var $this = $(this);

$this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
    
})
});


function copyToClipboard(val) {
const t = document.createElement("textarea");
document.body.appendChild(t);
t.value = val;
t.select();
document.execCommand('copy');
document.body.removeChild(t);
}
function copy() {
copyToClipboard('alsrb7276@naver.com');
alert('Copied!');
}

function copyToClipboard2(val2) {
const t2 = document.createElement("textarea");
document.body.appendChild(t2);
t2.value = val2;
t2.select();
document.execCommand('copy');
document.body.removeChild(t2);
}
function copy2() {
copyToClipboard('010-6894-7498');
alert('Copied!');
}

function copyToClipboard3(val3) {
const t3 = document.createElement("textarea");
document.body.appendChild(t3);
t3.value = val3;
t3.select();
document.execCommand('copy');
document.body.removeChild(t3);
}
function copy3() {
copyToClipboard('https://www.instagram.com/_ming.92');
alert('Copied!');
}

function copyToClipboard3(val4) {
const t4 = document.createElement("textarea");
document.body.appendChild(t4);
t4.value = val4;
t4.select();
document.execCommand('copy');
document.body.removeChild(t4);
}
function copy4() {
copyToClipboard('alsrb7276');
alert('Copied!');
}
