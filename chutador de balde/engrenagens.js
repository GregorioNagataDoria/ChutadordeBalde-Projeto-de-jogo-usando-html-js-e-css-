

const pontos_chute =  10000;

var auto_valor = 0;
var alien_valor = 0;
var centipede_valor = 0;

localStorage.clickcount = 0

var a = 1;

var auto_quantidade = 0
var alien_quantidade = 0
var centipede_quantidade = 0


var auto = 0
var alien = 0
var centipede = 0

var multi = 1;

function clicou() {

  //window.alert(a);

  var pontos_usados = pontos_chute

  if( a == 2){pontos_usados = (2 * multi) ;}
  else if (a == 4){pontos_usados = (4 * multi)}
  else if (a == 10){pontos_usados = (10 * multi)}


    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+ pontos_usados;} 
            else {localStorage.clickcount = 1;}
      document.getElementById("contador").innerHTML = 'Pontos = ' + localStorage.clickcount}

  }


function melhoria1(){if(localStorage.clickcount >= 20){   
  localStorage.clickcount = Number(localStorage.clickcount)- 20;
  document.getElementById("chutemaior").style.color = "green"
  a = 2;
return a;}
else{document.getElementById("chutemaior").style.color = "red"}}

function melhoria2(){

  if(localStorage.clickcount >= 50){   
    localStorage.clickcount = Number(localStorage.clickcount)- 50;
    document.getElementById("chutemaior2").style.color = "green"
  a = 4;
  return a;}
else{document.getElementById("chutemaior2").style.color = "red"}}





  function melhoria3(){

    if(localStorage.clickcount >= 200){   
      localStorage.clickcount = Number(localStorage.clickcount)- 200;
      document.getElementById("chutemaior3").style.color = "green"
    a = 10;
    return a;
    }
    else{document.getElementById("chutemaior3").style.color = "red"}}





function autochute_comprou(){

if(localStorage.clickcount >= 100){   
  localStorage.clickcount = Number(localStorage.clickcount)- 100;
  document.getElementById("autochute").style.color = "green"

  auto = 1;
  auto_valor = auto_valor + 1
  auto_quantidade = auto_quantidade + 1
  document.getElementById("auto_quantidade").innerHTML = ("Quantidade = " + auto_quantidade)
  
  return (auto,auto_valor);
  
  }
  else{document.getElementById("autochute3").style.color = "red"}}


function autochute_funcionando(){
if(auto == 1){localStorage.clickcount = Number(localStorage.clickcount)+ (auto_valor * multi);}
  
}



function alien_comprou(){

  if(localStorage.clickcount >= 1000){   
    localStorage.clickcount = Number(localStorage.clickcount)- 1000;
    document.getElementById("idalien").style.color = "green"
  
    alien = 1;
    alien_valor = alien_valor + 6
    alien_quantidade = alien_quantidade + 1
    document.getElementById("alien_quantidade").innerHTML = ("Quantidade = " + alien_quantidade)
    
    return (alien,alien_valor);
    
    }
    else{document.getElementById("idalien").style.color = "red"}}
  
  
function alien_funcionando(){
if(alien == 1){localStorage.clickcount = Number(localStorage.clickcount)+ (alien_valor  * multi);}
    
}




function centipede_comprou(){

  if(localStorage.clickcount >= 6000){   
    localStorage.clickcount = Number(localStorage.clickcount)- 6000;
    document.getElementById("idcentipede").style.color = "green"
  
    centipede = 1;
    centipede_valor = centipede_valor + 40
    centipede_quantidade = centipede_quantidade + 1
    document.getElementById("centipede_quantidade").innerHTML = ("Quantidade = " + centipede_quantidade)
    
    return (centipede,centipede_valor);
    
    }
    else{document.getElementById("idcentipede").style.color = "red"}}
  
  
function centipede_funcionando(){
if(centipede == 1){localStorage.clickcount = Number(localStorage.clickcount)+ (centipede_valor * multi);}
    
}


function duplicador_comprou(){
  if(localStorage.clickcount >= 20000){   
   localStorage.clickcount = Number(localStorage.clickcount)- 20000;
    document.getElementById("iddupli").style.color = "green"
  
    multi = 2
    return multi
  
  
  }


  else{document.getElementById("iddupli").style.color = "red"}}




  function triplicador_comprou(){
    if(localStorage.clickcount >= 100000){   
     localStorage.clickcount = Number(localStorage.clickcount)- 100000;
      document.getElementById("idtri").style.color = "green"
    
      multi = 3
      return multi
    
    
    }
  
  
    else{document.getElementById("idtri").style.color = "red"}}


setInterval(autochute_funcionando, 1000);
setInterval(alien_funcionando, 1000);
setInterval(centipede_funcionando, 1000);



//update

function update(){document.getElementById("contador").innerHTML = 'Pontos = ' + localStorage.clickcount}

setInterval(update, 100);

function update_segundo(){document.getElementById("psegundo").innerHTML = 'Pontos por segundo = ' + ((centipede_valor + alien_valor + auto_valor) * multi )}

setInterval(update_segundo, 100);





function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}