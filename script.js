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


// Variables

const inputTarea = document.querySelector("#agregarTarea");
const contTareas = document.querySelector("#todo-list");
const addTarea = document.querySelector(".list-group-item");

// Actualiza el número de tareas restantes
const itemsLeft = document.querySelector("#n-items");
itemsLeft.textContent = printItemsLeft();

const filtro = document.querySelectorAll(".options")[0];
const filtroCel = document.querySelectorAll(".options")[1];
const clearTarea = document.querySelector(".clear");

// Eventos
inputTarea.addEventListener("keyup", insertTarea);
contTareas.addEventListener("click", complete);
filtro.addEventListener("click", filtrarTareas);
filtroCel.addEventListener("click", filtrarTareas);
clearTarea.addEventListener("click", clearItems)


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

                itemsLeft.textContent = printElementsLeft();
        
        }        
    
    }

}

function complete(e){
    
    // Elimina el card al dar click en X
    if(e.target.classList.contains("cross")){    
        e.target.parentElement.remove();
        itemsLeft.textContent = printItemsLeft();
    }else{
        // Añade clase cuando la tarea se complete
        if(e.target.checked == true){  
            e.target.parentElement.parentElement.classList.add("tarea-completada");
            itemsLeft.textContent = printItemsLeft();
        }else{
            e.target.parentElement.parentElement.classList.remove("tarea-completada");
            itemsLeft.textContent = printItemsLeft();
        }
    }

}

function filtrarTareas(e){

    const tarea = Array.from(contTareas.children);

    tarea.forEach(function(tareaTarjeta){

        if(e.target.id == "all"){
            tareaTarjeta.classList.add("d-flex");

            // // Estilo de Focus
            e.target.classList.add("add-color");
            e.target.nextElementSibling.classList.remove("add-color");
            e.target.nextElementSibling.nextElementSibling.classList.remove("add-color");

        }else if(e.target.id == "active"){

            if(tareaTarjeta.classList.contains("tarea-completada")){
                tareaTarjeta.classList.add("d-none");
                tareaTarjeta.classList.remove("d-flex");
            }else{
                tareaTarjeta.classList.add("d-flex");
                tareaTarjeta.classList.remove("d-none");
            }

            // Estilo de Focus
            e.target.classList.add("add-color");
            e.target.previousElementSibling.classList.remove("add-color");
            e.target.nextElementSibling.classList.remove("add-color");
            
        }else if(e.target.id == "completed"){

            if(tareaTarjeta.classList.contains("tarea-completada")){
                tareaTarjeta.classList.add("d-flex");
                tareaTarjeta.classList.remove("d-none");
            }else{
                tareaTarjeta.classList.add("d-none");
                tareaTarjeta.classList.remove("d-flex");
            }

            // Estilo de Focus
            e.target.classList.add("add-color");
            e.target.previousElementSibling.classList.remove("add-color");
            e.target.previousElementSibling.previousElementSibling.classList.remove("add-color");

        }

    })

}

function clearItems(e){
    const tareas = Array.from(contTareas.children);
    // console.log(tareas);

    let arrayCompleted = tareas.filter(function(tareaTarjeta){
        if(tareaTarjeta.classList.contains("tarea-completada")){
            return tareaTarjeta;
        }
    });

    arrayCompleted.forEach(function(element, i){
        arrayCompleted[i].remove();
    });

}

function printItemsLeft(){

    const tareas = Array.from(contTareas.children);
    // console.log(tareas);

    let toDoCompleted = tareas.filter(function(tareaTarjeta){
        if(!tareaTarjeta.classList.contains("tarea-completada")){
            return tareaTarjeta;
        }
    });

    return toDoCompleted.length;

}




// Recorrido por el DOM

/*contTareas.children[1].children[0].children[1].textContent = "Estudiar JavaScript";
contTareas.children[1].remove();
console.log(contTareas.firstElementChild);
console.log(contTareas.lastElementChild);
console.log(contTareas.firstElementChild.nextElementSibling.nextElementSibling);
console.log(contTareas.firstElementChild.previousElementSibling.previousElementSibling);
console.log(contTareas.parentElement.parentElement);
console.log(contTareas.children[0].children[1]);
const nuevoEnlace = document.createElement("a");
nuevoEnlace.href = "http://www.jango.com";
nuevoEnlace.textContent = "Escucha Radio Online";
nuevoEnlace.classLists.add("link");
console.log(nuevoEnlace);
contTareas.appendChild(nuevoEnlace);
contTareas.insertBefore(nuevoEnlace, contTareas.children[0]);*/