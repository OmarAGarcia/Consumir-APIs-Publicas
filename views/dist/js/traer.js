var contenido = document.querySelector('#contenido')

function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => { //promesas
            console.log(data.results['0']);
            contenido.innerHTML = `         <div class="mt-2 separacion" id="">
                                                <div class="card sombra" style="width: ">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Informacion Personal</h5>
                                                        <h6 class="card-subtitle mb-2 text-muted">Atraves de fetch</h6>
                                                         <img src="${data.results['0'].picture.large}" alt="" width="100px" class="img-fluid rounded-circle">

                                                            <p class="mt-5">Nombre: ${data.results['0'].name.title} ${data.results['0'].name.first} ${data.results['0'].name.last}</p>
                                                            <p>Celular: ${data.results['0'].cell}</p>
                                                            <p>Email:   ${data.results['0'].email}</p>
                                                            <p>Ciudad:  ${data.results['0'].location.country}</p>
                                                                <br>
                                                            <i class="fas fa-random" onclick="traer()"></i>
                                                    </div>


                                                </div>
                                                
                                            </div>`

        })
}