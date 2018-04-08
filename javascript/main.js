var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки
window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}
document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}
function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('tabborder');
    }
}
function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('tabborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}
//показать скрыть HTML
var ul_html = document.querySelector('#ul_html');
var btn_show_html = document.querySelector('#btn_show_html');
var btn_hide_html = document.querySelector('#btn_hide_html');
  btn_show_html.onclick = function(){
    ul_html.style.display='block';
  };
  btn_hide_html.onclick = function(){
    ul_html.style.display='none';
  }

//показать скрыть CSS
function showHide(element_id) {
  if (document.getElementById(element_id)) { 
  var obj = document.getElementById(element_id); 
    if (obj.style.display != "block") { 
      obj.style.display = "block";
    }else obj.style.display = "none";
  }else alert("Элемент с id: " + element_id + " не найден!"); 
}

//ОТКРЫТЬ ЗАКРЫТЬ КОНСОЛЬ-------------------------------------------------------
function Console_On_Off(terminal) {
  var obj = document.getElementById("terminal");
      if (obj.style.display != "block") {
          obj.style.display = "block";
      }
      else obj.style.display = "none";  
}
