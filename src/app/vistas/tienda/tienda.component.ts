import { Component, OnInit } from '@angular/core';


interface animalito{
    especie: string;
    imagen: string;
    descripcion: string;
    precio: number;
    cantidad: number;
  }

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
    binding: any = '';
    animalitosList: animalito[] = [
        {
            especie: "Catitas",
            imagen: "/assets/img/catita.jpg",
            descripcion: "Las aves son el animal exotico más comun visto, quizas algunos incluso desconoscan que tienen esta categoria. Ideal para gente que quiere un amigo emplumado.",
            precio: 4000,
            cantidad: 10
        },
        {
            especie: "Perrito",
            imagen: "/assets/img/perro.jpg",
            descripcion: "Perritos pequeños y peludos de todas las razas y colores.",
            precio: 7000,
            cantidad: 10
        },
        {
            especie: "Conejito",
            imagen: "/assets/img/conejito.jpg",
            descripcion: " Una pequeña bolita de algodon, con largas orejas quiere ser tu nuevo amigo es dificil resistirse a esos ojitos.",
            precio: 20000,
            cantidad: 10
        },
        {
            especie: "Cuyo",
            imagen: "/assets/img/cuyo.jpg",
            descripcion: " Muy populares entre los niños, a quien no les gustan.",
            precio: 1000,
            cantidad: 10
        },
        {
            especie: "Gatitos",
            imagen: "/assets/img/gato.jpg",
            descripcion: "El mejor amigo del humano moderno, ademas dan buena suerte.",
            precio: 3000,
            cantidad: 10
        },
        {
            especie: "Sapo con sombrero",
            imagen: "/assets/img/froggos.jpg",
            descripcion: "Una mascota imperdible, especial para los amantes de lo exotico, los sapos con sombrero son una rareza en el reino animal.",
            precio: 100000,
            cantidad: 10
        },

    ];
   agregado = 0;
   carritoList:String[]=[];
   carritoPreciosList:number[]=[];
   total = 0;

  constructor() { }

  ngOnInit(): void {
  }

 
 agregarMascota(string:String){
  if(string == "Cuyo"){
      this.carritoList.push("Cuyo");
      this.carritoPreciosList.push(1000);
      this.total = this.total + 1000; 
  }
  if(string == "Catita"){
      this.carritoList.push("Catita");
      this.carritoPreciosList.push(4000);
      this.total = this.total + 4000; 
  }
  if(string == "Sapo con sombrero"){
      this.carritoList.push("Sapo con sombrero");
      this.carritoPreciosList.push(100000);
      this.total = this.total + 100000; 
  }
  if(string == "Perrito"){
      this.carritoList.push("Perrito");
      this.carritoPreciosList.push(7000);
      this.total = this.total + 7000; 
  }
  if(string == "Conejito"){
      this.carritoList.push("Conejito");
      this.carritoPreciosList.push(20000);
      this.total = this.total + 20000; 
  }
  if(string == "Gatitos"){
      this.carritoList.push("Gatitos");
      this.carritoPreciosList.push(3000);
      this.total = this.total + 3000; 
  }
  console.log(this.carritoList);
  this.agregado++;
  //this.showAgregado();
}
revisarCarrito(){

}

}
