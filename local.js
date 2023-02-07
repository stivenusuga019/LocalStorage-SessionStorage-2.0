
document.addEventListener("DOMContentLoaded", function () {
    mostrarDatos();
});

let profesiones = "profesiones";
let nombre = document.querySelector("#nombre");
let profesion = document.querySelector("#profesion");
let salario = document.querySelector("#salario");
let boton = document.querySelector(".btn");

boton.addEventListener("click", function () {
    obtenerDatos();
    mostrarDatos();
});

function obtenerDatos() {
    if ( nombre.value.length === 0 && profesion.value.length === 0 && salario.value.length === 0 ) {
        alert("Debes llenar un campo")
    }
    let usuarios = {
        "nombre": nombre.value,
        "profesion": profesion.value,
        "salario": salario.value
    }
    nombre.value = "";
    profesion.value = "";
    salario.value = "";  

    guardarDatos(usuarios)
}

function guardarDatos( datos ) {
    let users = [];
    let datosDelNavegador = localStorage.getItem(profesiones);
    if (  datosDelNavegador !== null ) {
        users = JSON.parse(datosDelNavegador);
    }
    users.push(datos);
    localStorage.setItem(profesiones, JSON.stringify(users));
  
}

function mostrarDatos() {
    let users = [];
    let datosDelNavegador = localStorage.getItem(profesiones);
    if (  datosDelNavegador !== null ) {
        users = JSON.parse(datosDelNavegador);
    }

    let tabla = document.querySelector("table > tbody");
    tabla.innerHTML = "";
    users.forEach( (texto, indice) => {
        let tr = document.createElement("tr");
        let tNombre = document.createElement("td");
        let tProfesion = document.createElement("td");
        let tSalario = document.createElement("td");
        let tEliminar = document.createElement("td");
        tNombre.innerHTML = texto.nombre;
        tProfesion.innerHTML = texto.profesion;
        tSalario.innerHTML = texto.salario;
        tEliminar.innerHTML = `<span style="color:red;" onclick="eliminarDato(${indice})">  X </span>`;
        tr.appendChild(tNombre);
        tr.appendChild(tProfesion);
        tr.appendChild(tSalario);
        tr.appendChild(tEliminar);
        tabla.appendChild(tr);

        //agregar boton para eliminar el registro
          
    });
 
}
function eliminarDato(indice) {
    let user = [];
    let datosGuardador = localStorage.getItem(profesiones);
    user = JSON.parse(datosGuardador);
    //splice con un rango de datos para eliminar 
    user.splice(indice, 1);
    localStorage.setItem(profesiones, JSON.stringify(user))
    //localStorage.removeItem(u);
    //console.log(u)
    mostrarDatos();
}




