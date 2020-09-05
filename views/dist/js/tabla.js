var contenido = document.querySelector('#tabla2')

function tabla() {
    fetch('./views/dist/js/tabla.json')
        .then(res => res.json())
        .then(data => {
            /*  console.log(data); */
            tabla1(data)
        })

}

function tabla1(data) {
    /* console.log(data); */
    tabla2.innerHTML = ''
    for (let valor of data) {
        /* console.log(valor); */
        /* ? = if | : = else  */
        tabla2.innerHTML += `
                            <div class="container">
                                <tbody id="tabla2">
                                    <tr>
                                        <th scope="row">${valor.id}</th>
                                        <td>${valor.nombre}</td>
                                        <td>${valor.email}</td>
                                        <td>${valor.estado ? '<i class="fas fa-check" style="color:green;" ></i> ': '<i class="fas fa-times" style="color:red;" ></i>'}</td> 
                                    </tr>
                                 </tbody>
                            </div>`

    }

}