//function encender(){
  //  let elementoimg = document.querySelector('img')
   // elementoimg.src= "pic_bulbon (1).gif"
//}
//function apagar(){
    //let elementoimg = document.querySelector('img')
    //elementoimg.src= "pic_bulboff.gif"
//}
let on = 0;

function encender() {
    let elementoimg = document.querySelector('img');

    if (on == 0) {
        elementoimg.src = "pic_bulbon (1).gif";
        on = 1;
    } else {
        elementoimg.src = "pic_bulboff.gif";
        on = 0;
    }
}
    
    



//estructura de control
//1 = verdadero

if(1==0){
    console.log("Condicion verdadera")
}else{
        console.log("No se cumplio la condicion ")
    }