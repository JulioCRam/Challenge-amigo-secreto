// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let amigo = document.querySelector('#amigo');
let guardar = document.querySelector('#guardar');
let listaAmigos = document.querySelector('#listaAmigos');
let listaResultado = document.querySelector('#resultado')

function agregarAmigo(){
    let nombreAmigos = amigo.value.trim();  
    if(nombreAmigos !== ''){
        amigo.value = '';
        nombres.push(nombreAmigos);
         console.log(nombres); 
             mostrarlista(); 

    }else {
    alert("este campo no puede estar vacio");
    }
};


function mostrarlista(){
    listaAmigos.innerHTML = '';

nombres.forEach(nombres => {
    let li = document.createElement('li');
    li.textContent = nombres;
    listaAmigos.appendChild(li);
})
}

function sortearAmigo(){
    //validacion minimo de amigos
    if(nombres.length < 2){
        alert("el numero minimo de participantes debe ser 2")
        return null;
    }
    let aleatorio = Math.floor(Math.random() * nombres.length)
    return nombres[aleatorio];
    
}
function mostrarAmigo(){

    let nombreAleatorio = sortearAmigo();
   if (nombreAleatorio !== null) {
        
        alert("Tu amigo secreto es: " + nombreAleatorio);

   }
}



   
