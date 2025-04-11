const listarTareas = async () => {
    try {
        const peticion = await fetch("http://localhost:5050/api/tareas", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const tareas = await peticion.json();

        let contenidoTabla = "";
        for (const tarea of tareas) {
            const contenidoFila = `<tr>
                <td>${tarea.id}</td>
                <td>${tarea.nombre}</td>
                <td>${tarea.description}</td>
                <td>${tarea.completado ? "Sí" : "No"}</td>
                <td>
                    <i onclick ="editarTarea(${tarea.id})" class="material-icons button edit">edit</i>
                    <i onclick ="borrarTarea(${tarea.id})" class="material-icons button delete">delete</i>
                </td>
            </tr>`;
            contenidoTabla += contenidoFila;
        }

        document.querySelector("#tabla tbody").innerHTML = contenidoTabla;
    } catch (error) {
        console.error("Error al listar tareas:", error);
    }
};

let borrarTarea = async(id)=>{

    const peticion = await fetch("http://localhost:5050/api/tareas/"+id,
    {   method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        }, 
    });

    listarTareas();
    ocultarModificar();  
}


let idEditar
const editarTarea = async(id)=>{

    idEditar = id;
    mostrarModificar();

    const peticion = await fetch("http://localhost:5050/api/tareas/"+id,
    {   method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        }, 
    });

    const tarea = await peticion.json();

    document.getElementsByClassName("formbold-form-input")[0].value=tarea.nombre;
    document.getElementsByClassName("formbold-form-input")[1].value=tarea.description;
    document.getElementsByClassName("formbold-form-input")[2].checked=tarea.completado;
    const btnModificar = document.getElementById("btnModificar");

}

btnModificar.addEventListener("click", evento =>{
    aplicarActualizacion(idEditar);
})

const aplicarActualizacion = async(id)=>{

    const campos = {};
    campos.id = id;
    campos.nombre = document.getElementById("titulo").value;
    campos.description = document.getElementById("description").value;
    campos.completado = document.getElementById("completado").checked;

    const tarea = await fetch("http://localhost:5050/api/tareas/"+id,
    {   method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(campos)  
    });

    listarTareas();
}


function ocultarModificar(){
    const formulario = document.getElementById("formulario").style.visibility="hidden";
    document.getElementsByTagName("h1")[0].style.visibility="hidden";
}

function mostrarModificar(){
    const formulario = document.getElementById("formulario").style.visibility="visible";
    document.getElementsByTagName("h1")[0].style.visibility="visible";
}


window.onload = function () {
    ocultarModificar(); 
    listarTareas();
};
