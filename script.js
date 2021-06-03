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
contTareas.addEventListener("click", complete);


// Funciones

function insertTarea(e){

    if(e.keyCode === 13){
    
        e.preventDefault();

        if(inputTarea.value != ""){
        
            // Creación li tareas añadidas
            const addTarea = document.createElement("li");
            addTarea.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "active");
            contTareas.appendChild(addTarea);

                // Creación del div contenedor de texto
                const divTarea = document.createElement("div");
                divTarea.classList.add("todo", "d-flex", "align-items-center");
                addTarea.appendChild(divTarea);

                    // Creación del input contenedor de circulo
                    const inputCheckbox = document.createElement("input");
                    inputCheckbox.type = "checkbox";
                    divTarea.appendChild(inputCheckbox);
                    // console.log(inputCheckbox);

                    // Creación del p contenedor de texto
                    const textTarea = document.createElement("p");
                    textTarea.classList.add("text", "mb-0", "ml-4");
                    textTarea.textContent = inputTarea.value;
                    divTarea.appendChild(textTarea);
                    inputTarea.value = "";
                
                // Creación boton X
                const btnX = document.createElement("div");
                btnX.classList.add("cross");
                addTarea.appendChild(btnX);
        
        }        
    
    }

}

function complete(e){
    
    // Elimina el card al dar click en X
    if(e.target.classList.contains("cross")){
        
        e.target.parentElement.remove();

    }

    // Añade clase cuando la tarea se complete
    if(e.target.checked == true){
        
        e.target.parentElement.parentElement.classList.add("tarea-completada");

    }else{

        e.target.parentElement.parentElement.classList.remove("tarea-completada");

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