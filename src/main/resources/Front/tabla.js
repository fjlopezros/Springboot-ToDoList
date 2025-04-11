const listarTareas = async () => {
    const peticion = await fetch('http://localhost:5050/api/tareas');
    const tareas = await peticion.json();
    console.log(tareas);
    let contenido = "";
    tareas.forEach(tarea => {
        contenido += `
        <tr>
            <td>${tarea.nombre}</td>
            <td>${tarea.description}</td>
            <td>${tarea.completado}</td>
        </tr>
        `;
    });
    document.querySelector("#contenido").innerHTML = contenido;
}