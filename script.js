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

// console.log(btnCambio);