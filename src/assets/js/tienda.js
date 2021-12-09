var agregado = 0;
var carritoList=[];
var carritoPreciosList=[];
var total = 0;

function revisarCarrito(){
    document.getElementById("total").innerHTML = this.total;
    this.mostrarDatos(this.carritoList);
}


function agregarMascota(string){
    if(string == "cuyo"){
        this.carritoList.push("cuyo");
        this.carritoPreciosList.push(1000);
        this.total = this.total + 1000; 
    }
    if(string == "catita"){
        this.carritoList.push("catita");
        this.carritoPreciosList.push(4000);
        this.total = this.total + 4000; 
    }
    if(string == "sapo"){
        this.carritoList.push("sapo");
        this.carritoPreciosList.push(100000);
        this.total = this.total + 100000; 
    }
    if(string == "perro"){
        this.carritoList.push("perro");
        this.carritoPreciosList.push(7000);
        this.total = this.total + 7000; 
    }
    if(string == "conejo"){
        this.carritoList.push("conejo");
        this.carritoPreciosList.push(20000);
        this.total = this.total + 20000; 
    }
    if(string == "gato"){
        this.carritoList.push("gato");
        this.carritoPreciosList.push(3000);
        this.total = this.total + 3000; 
    }
    console.log(this.carritoList);
    this.agregado++;
    this.showAgregado();
}

function showAgregado(){
    document.getElementById("carritoValue").innerHTML = this.agregado;
}

function mostrarDatos(posts){
    posts.map((post,i) => {
     let mascota = document.createElement('p');
     let contenido = document.createElement('p');
     mascota.innerHTML = (i + 1)+ " . " + post + "...................................$"+ this.carritoPreciosList[i];
     contenido.innerHTML = post.body;
     contenedor.appendChild(mascota);
    })
  }