// Cambio de Dark a Light

const btnCambio = document.querySelector("#cambio-sun");
let x = 0;

btnCambio.addEventListener("click", function(){
    document.body.classList.toggle("light");
    if(x == 0){
        btnCambio.children[0].src = "images/icon-moon.svg";
        x = 1;
    }else{
        btnCambio.children[0].src = "images/icon-sun.svg";
        x = 0;
    }
});



// Añadir Tarea a la lista

// Variables
const inputTarea = document.querySelector("#agregarTarea");
const contTareas = document.querySelector("#todo-list");
const addTarea = document.querySelector(".list-group-item");

console.log();


// Eventos
inputTarea.addEventListener("keyup", insertTarea);



// Funciones

function insertTarea(e){

    if(e.keyCode === 13){
    
        e.preventDefault();
        console.log("Hola Mundo");

    }

}





// contTareas.children[1].children[0].children[1].textContent = "Estudiar JavaScript";
// contTareas.children[1].remove();
/*console.log(contTareas.firstElementChild);
console.log(contTareas.lastElementChild);
console.log(contTareas.firstElementChild.nextElementSibling.nextElementSibling);
console.log(contTareas.firstElementChild.previousElementSibling.previousElementSibling);*/
// console.log(contTareas.parentElement.parentElement);
// console.log(contTareas.children[0].children[1]);
// const nuevoEnlace = document.createElement("a");
// nuevoEnlace.href = "http://www.jango.com";
// nuevoEnlace.textContent = "Escucha Radio Online";
// nuevoEnlace.classLists.add("link");
// console.log(nuevoEnlace);
// contTareas.appendChild(nuevoEnlace);
// contTareas.insertBefore(nuevoEnlace, contTareas.children[0]);



