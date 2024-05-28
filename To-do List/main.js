// Crear un array para almacenar las tareas
// Agregar una tarea nueva al array
const agregarTareas = (tareasArray) => {
    let tarea ="";
    let cantidadDeTareas=parseInt(prompt("Ingrese la cantidad de tareas que desea agregar"));
    for(let i =0;i<cantidadDeTareas;i++){
        tareasArray.push(prompt("Ingrese la tarea que desea agregar : "));
    }
    alert("El array quedo como: " + tareasArray);
    return tareasArray;
}
// Eliminar una tarea del array
const eliminarTareas = (tareasArray) => {
    const tareaEliminar = prompt("Ingrese la tarea que desee eliminar");
    
    let pos = tareasArray.indexOf(tareaEliminar);
    if (pos >= 0) {
        tareasArray.splice(pos, 1);
        console.log(`El nuevo array es ${tareasArray}`);
    } else {
        console.log("La tarea seleccionada no existe");
    }

    return tareasArray;
}

// Marcar una tarea como completada en el array
const marcarTareasCompletas=(tareasArray)=>{

}
// Mostrar todas las tareas al usuario
const mostrarTareas=(tareasArray)=>{
    for(tarea of tareasArray){
        console.log(tarea);
    }
}

let tareasPendientesArray=[];
let tareasCompletadas=[];
let op=0;
do{
    op=parseInt(prompt("Ingrese una de las siguientes opciones: 1-Agregar tareas \n 2-Eliminar Tareas \n 3-Marcar Tareas completas \n 4-Mostrar todas las tareas \n 5-Salir"));

switch(op){
    case 1:
        tareasArray=agregarTareas(tareasArray);
    break;
    case 2:
        tareasArray=eliminarTareas(tareasArray);
        break;
        case 3:
            tareasArray=marcarTareasCompletas(tareasArray);
            break;
case 4: MostrarTareas(tareasArray); break;
case 5:
    console.log("Chau loco suerte");
    break;
    default:alert("Ingrese un valor valido.(1-5)");
    break;
}
}while(op!=5)
// NOTA: Podes implementar esta aplicación utilizando arrays para almacenar las tareas y manipularlas mediante funciones JavaScript.