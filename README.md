# 📝 ToDo List - Spring Boot + HTML/CSS/JS
Esta es una aplicación sencilla desarrollada como introducción a Spring Boot. Consiste en una lista de tareas con funcionalidades CRUD (Crear, Leer, Actualizar y Eliminar), que permite practicar la integración entre backend y frontend.

## 🧠 Estructura del proyecto
La estructura de src está organizada en tres paquetes principales:

- repository: contiene la interfaz que extiende de JpaRepository, lo cual permite realizar operaciones CRUD automáticamente sin necesidad de escribir SQL manual. Spring Data JPA se encarga de generar las consultas a partir del nombre de los métodos.

- model: incluye una única entidad, que representa la tabla task en la base de datos.

- controller: define los endpoints (rutas) y gestiona las peticiones HTTP (GET, POST, PUT, DELETE), conectando el frontend con la lógica del backend.

## 🛠️ Funcionalidad
La funcionalidad principal es una lista de tareas, donde puedes:

- Agregar nuevas tareas

- Ver todas las tareas

- Editar una tarea existente (mediante un formulario oculto que se despliega)

- Eliminar tareas

## 💻 Interfaz de usuario
- El frontend está construido con HTML, CSS y JavaScript.

- Cuenta con un formulario para agregar nuevas tareas.

- Al hacer clic en "¿QUÉ TAREAS TENGO?", se redirige a otra página con una tabla que muestra todas las tareas.

- Las acciones de editar y eliminar se hacen directamente desde esa tabla.

- JavaScript se encarga de enviar y recibir peticiones HTTP al backend (API REST).

### 📚 Créditos
Inspirado y guiado en parte por aportes de la comunidad en [@AraOverflow](https://github.com/AraOverFlow), donde encontré recursos y respuestas útiles para resolver dudas durante el desarrollo. [apiRest-SB](https://github.com/AraOverflow/apiRest-SB)
