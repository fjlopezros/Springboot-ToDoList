const boton = document.getElementById("botonRegistrarTarea");
boton.addEventListener("click", evento => {
    evento.preventDefault();
    registrarTarea();
});

const botonVerTareas = document.getElementById("botonVerTarea");
botonVerTareas.addEventListener("click", evento => {
    evento.preventDefault();
    window.location.href = "tabla.html";
});

const registrarTarea = async () => {

    const nombre = document.getElementById("titulo").value;
    const description = document.getElementById("descripcion").value;
    const completado = document.getElementById("tareaCompletada").checked;
    
    const task = {
        nombre,
        description,
        completado
    };
    
    await fetch('http://localhost:5050/api/tareas', {
        method: 'POST', 
        headers: {  
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    alert("Tarea registrada exitosamente");
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("tareaCompletada").checked = false;

}
