document.addEventListener('DOMContentLoaded', function() {
    const inputDescription = document.getElementById('descripcion');
    const selectCriticidad = document.getElementById('criticidad');
    const inputFecha = document.getElementById('fecha');
    const addButton = document.getElementById('agregar-tarea');
    const listaTareas = document.getElementById('lista-tareas');
    const estadoVacio = document.getElementById('estado-vacio');

    function agregarTarea() {
        const criticidad = selectCriticidad.value;
        const descripcion = inputDescription.value.trim();
        const fecha = inputFecha.value;

        resultado = descripcion === '' ? 'Incorrecto' : 'Aceptado';

        // Caso base
        if (resultado === 'Incorrecto') {
            alert("Por favor, introduce una descripción a la tarea");
            inputDescription.focus();
            return;
        }

        //Elimino visualmente el estado vacío si ya existe porque voy a crear una tarea
        if (estadoVacio) {
            estadoVacio.style.display = 'none';
        }

        // Creacion de tarea
        const tarea = document.createElement('div');
        tarea.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-criticidad criticidad-' + criticidad;

        const taskText = document.createElement('div');
        taskText.className = 'task-text';
        taskText.innerHTML = `<strong>${descripcion}</strong>`;

        const taskFecha = document.createElement('div');
        taskFecha.className = 'task-fecha';

        if (fecha) {
            const fechaObj = new Date(Fecha);
            taskFecha.textContent = fechaObj.toLocaleDateString('es-Es');
        } else {
            taskFecha.textContent = 'Fecha no especificada';
        }

        tarea.appendChild(checkbox);
        tarea.appendChild(taskText);
        tarea.appendChild(taskFecha);

        listaTareas.appendChild(tarea);

        // Limpieza de inputs una vez se ha añadido la tarea
        inputDescription.value = '';
        inputFecha.value = '';
    }

    addButton.addEventListener('click', agregarTarea);

    inputDescription.addEventListener('keypress', function(e){
        if (e.key === 'Enter'){
            agregarTarea();
        }
    });
});