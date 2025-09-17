// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let amigo = document.querySelector('#amigo');
let guardar = document.querySelector('#guardar')

function agregarAmigo(){
    let nombreAmigos = amigo.value.trim();  
    if(nombreAmigos !== ''){
        amigo.value = '';
        nombres.push(nombreAmigos);
         console.log(nombres);  
    }else {
    alert("este campo no puede estar vacio");
    }
};



