

const pizzas = [
    {
        id: 0,
        nombre: "Margarita",
        precio: 1000,
        ingredientes: ["albahaca", "Pimienta", "tomate", "mozarella", "aceite de oliva"],
        porciones: 8,
    },

    {
        id: 1,
        nombre: "Bacon",
        precio: 1300,
        ingredientes: ["huevo", "bacon", "mozarella"],
        porciones: 8
    },

    {
        id: 2,
        nombre: "Italiana",
        precio: 1000,
        ingredientes: ["tomate", "Queso parmezano", "hongos", "salame"],
        porciones: 8
    },

    {
        id: 3,
        nombre: "Marinera",
        precio: 570,
        ingredientes: ["Muzarella", "tomate", "aceitunas", "anchoas"],
        porciones: 3
    },


    {
        id: 4,
        nombre: "Mexicana",
        precio: 600,
        ingredientes: ["Muzarella", "salame", "jalapeño", "albahaca"],
        porciones: 3
    },

    {
        id: 5,
        nombre: "Gringa",
        precio: 490,
        ingredientes: ["Cheddar", "Muzarella", "Bacon", "verdeo"],
        porciones: 3
    },

];


const form = document.getElementById("form")
const renderZone = document.getElementById("render__conteiner")

function inputId(){
    let inputNumbers = document.getElementById("number_input").value;
    this.inputId.inputNumbers = inputNumbers
    
    return inputNumbers
}


const valid = () => {
    inputId()

    if(inputId.inputNumbers == ""){
        ShowErrorEmptyInput()
    }  else if (inputId.inputNumbers >= 0 && inputId.inputNumbers <=5){
        renderNumber()
    }  else if(inputId.inputNumbers < 0 || inputId.inputNumbers >= 6){
        showErrorNumber()
    }
}





const renderNumber = () => {
    renderZone.style.border="1px solid green"
    renderZone.style.backgroundColor="#32b67a"

    renderZone.innerHTML = 
    `<h2 class ="pizza__name"> NOMBRE: ${pizzas[inputId.inputNumbers].nombre}</h2>
    <h3 class ="pizza__precio"> PRECIO: $${pizzas[inputId.inputNumbers].precio}</h3>`
}

const showErrorNumber = () => {
    renderZone.style.backgroundColor="#3c485e"
    renderZone.style.border="1px solid red"
  
    renderZone.innerHTML =  `<h2 class="error__msj"> el ID: ${inputId.inputNumbers} no coincide con niguna pizza </h2>`
}

const ShowErrorEmptyInput = () => {
    renderZone.style.backgroundColor="#005397"
    renderZone.style.border="1px solid crimson"

    renderZone.innerHTML = 
    ` <h2 class ="input__empty">El input esta vacio, elige un numero para continuar</h2>`
}

const init = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();         
        valid()                //se evita el comportamiento por default del form,hace que no se recargue la pagina cada vez que se toque el boton "Buscar"
    })
}

init()

