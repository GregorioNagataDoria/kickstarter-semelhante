function bookmark(){

document.getElementById('imgbook').style.backgroundColor = ''



} 






function open_money2(){

 document.getElementById('radio2').checked = true

 document.getElementById('notseen2').style.display = 'block'
  
  
  }





function open_money1(){

document.getElementById('radio1').checked = true

document.getElementById('notseen1').style.display = 'block'

}



function money_enter1(){

var x = parseInt(document.getElementById('money1').value)

if(x > 25){

document.getElementById('myModal2').style.display = 'none'
document.getElementById('myModal').style.display = 'block'

}
else{
  window.alert('Valor menor que o necessário para essa recompensa, por favor mude o valor ou escolha outra opção.')
}

}

function money_enter2(){

  var x = parseInt(document.getElementById('money2').value)
  
  if(x > 75){

  document.getElementById('myModal2').style.display = 'none'
  document.getElementById('myModal').style.display = 'block'
  
  }
  else{
    window.alert('Valor menor que o necessário para essa recompensa, por favor mude o valor ou escolha outra opção.')
  }
  
  }



function select1() {

  document.getElementById('myModal2').style.display = 'block'

  document.getElementById('radio1').checked = true

document.getElementById('notseen1').style.display = 'block'


}

function select2() {

  document.getElementById('myModal2').style.display = 'block'

  document.getElementById('radio2').checked = true

document.getElementById('notseen2').style.display = 'block'


}



function openham(){
    
  document.getElementById('hamburger_modal').style.display = 'block'

}





function openwindow(){
    
    document.getElementById('myModal').style.display = 'block'

}


function close1() {

  document.getElementById('myModal').style.display = 'none'
}


function close2() {

  document.getElementById('myModal2').style.display = 'none'
}


function close3() {

  document.getElementById('hamburger_modal').style.display = 'none'
}

let vw = window.innerWidth * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vw', `${vw}px`);


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);