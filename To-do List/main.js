// Crear un array para almacenar las tareas
// Agregar una tarea nueva al array
//  Eliminar una tarea del array
//  Marcar una tarea como completada en el array
//  Mostrar todas las tareas al usuario
// NOTA: Podes implementar esta aplicación utilizando arrays para almacenar las tareas y manipularlas mediante funciones JavaScript.

// Solucion 2 utiliizando el DOM.
const nuevaTarea=document.getElementById("tarea");
const crearTarea=document.querySelector("#agregarTarea");
let listaTareas=document.querySelector(".TareasContainer");
let tareasArray=[];
// for(tarea of listaTareas.innerHTML){
//     tareasArray.push(tarea);
// };
console.log(nuevaTarea);
console.log(crearTarea);
console.log(listaTareas.innerHTML);
// console.log(tareasArray);
let agregarTareas=(tareas)=>{
    tareas.push(nuevaTarea.value);
    console.log(tareas);
    return tareas;
}
let mostrarTareas=(tareas)=>{
    console.log("se ejecuto la funcion mostrar tareas");
    // for ( let i=0;i<tareas.lenth;i++) {
    //     console.log("el ciclo for todo bien");
    //     listaTareas.insertAdjacentHTML("beforeend", `<li class="tareas">${tareas[i]}</li>`);
    // }
    for (let i = 0; i < tareas.length; i++) {
       
        console.log("el ciclo for todo bien");
        listaTareas.insertAdjacentHTML("beforeend", `<li class="tareas">${tareas[i]}</li>`);
    }
    console.log("termino la funcion :,(");
}
crearTarea.addEventListener("click", function (){
    tareasArray=agregarTareas(tareasArray);
    mostrarTareas(tareasArray);
});

// Solucion 1, utilizando la consola sin el DOM, esta divida por funciones y se las ejecuta utilizando un switch.

// const agregarTareas = (tareasArray) => {
//     let tarea ="";
//     let cantidadDeTareas=parseInt(prompt("Ingrese la cantidad de tareas que desea agregar"));
//     for(let i =0;i<cantidadDeTareas;i++){
//         tareasArray.push(prompt("Ingrese la tarea que desea agregar : "));
//     }
//     alert("El array quedo como: " + tareasArray);
//     return tareasArray;
// }

// const eliminarTareas = (tareasArray) => {
//     const tareaEliminar = prompt("Ingrese la tarea que desee eliminar");
    
//     let pos = tareasArray.indexOf(tareaEliminar);
//     if (pos >= 0) {
//         tareasArray.splice(pos, 1);
//         console.log(`El nuevo array es ${tareasArray}`);
//     } else {
//         console.log("La tarea seleccionada no existe");
//     }

//     return tareasArray;
// }
// const marcarTareasCompletas=(tareasArray)=>{
//  No entendi a que se referia con marcar Tareas Completadas xd, estoy seguro que con el DOM va a ser facil, podes fijarte ahi como lo soluciono.
// }

// const mostrarTareas=(tareasArray)=>{
//     for(tarea of tareasArray){
//         console.log(tarea);
//     }
// }

// let tareasPendientesArray=[];
// let tareasCompletadas=[];
// let op=0;
// do{
//     op=parseInt(prompt("Ingrese una de las siguientes opciones: 1-Agregar tareas \n 2-Eliminar Tareas \n 3-Marcar Tareas completas \n 4-Mostrar todas las tareas \n 5-Salir"));

// switch(op){
//     case 1:
//         tareasArray=agregarTareas(tareasArray);
//     break;
//     case 2:
//         tareasArray=eliminarTareas(tareasArray);
//         break;
//         case 3:
//             tareasArray=marcarTareasCompletas(tareasArray);
//             break;
// case 4: MostrarTareas(tareasArray); break;
// case 5:
//     console.log("Chau loco suerte");
//     break;
//     default:alert("Ingrese un valor valido.(1-5)");
//     break;
// }
// }while(op!=5)