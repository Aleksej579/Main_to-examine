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
};

//ПОКАЗАТЬ СКРЫТЬ INFO ---------------------------------------------------------
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
  var obj = document.querySelector("#terminal");
      if (obj.style.display != "block") {
          obj.style.display = "block";
      }
      else obj.style.display = "none";  
}


//3D КУБ ------------------------------------------------------------------------
function rot_box_nature_1() {
    but_box3d_1.onclick = function() {
        document.querySelector('#box3d').style.transform = 'rotateY(90deg)';
        document.querySelector('#but_box3d_1').style.display="none";
        document.querySelector('#but_box3d_2').style.display="block";
    };
}

function rot_box_nature_2() {
    but_box3d_2.onclick = function() {
        document.querySelector('#box3d').style.transform = 'rotateY(180deg)';
        document.querySelector('#but_box3d_2').style.display="none";
        document.querySelector('#but_box3d_3').style.display="block";
    };
}

function rot_box_nature_3() {
    but_box3d_3.onclick = function() {
        document.querySelector('#box3d').style.transform = 'rotateY(270deg)';
        document.querySelector('#but_box3d_3').style.display="none";
        document.querySelector('#but_box3d_4').style.display="block";
    };
}
function rot_box_nature_4() {
    but_box3d_4.onclick = function() {
        document.querySelector('#box3d').style.transform = 'rotateY(360deg)';
        document.querySelector('#but_box3d_4').style.display="none";
        document.querySelector('#but_box3d_1').style.display="block";
    };
};

/*--------------------------------------------------------------------------------
var app = new Vue({
    el: '#line',
    data: {
        message: 'border-bottom: 1px solid #1f1f28;'
    }
 })*/

 