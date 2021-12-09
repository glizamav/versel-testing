import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
   agregado = 0;
   carritoList:String[]=[];
   carritoPreciosList:number[]=[];
   total = 0;

  constructor() { }

  ngOnInit(): void {
  }

 
 agregarMascota(string:String){
  if(string == "cuyo"){
      this.carritoList.push("Cuyo");
      this.carritoPreciosList.push(1000);
      this.total = this.total + 1000; 
  }
  if(string == "catita"){
      this.carritoList.push("Catita");
      this.carritoPreciosList.push(4000);
      this.total = this.total + 4000; 
  }
  if(string == "sapo"){
      this.carritoList.push("Sapo");
      this.carritoPreciosList.push(100000);
      this.total = this.total + 100000; 
  }
  if(string == "perro"){
      this.carritoList.push("Perro");
      this.carritoPreciosList.push(7000);
      this.total = this.total + 7000; 
  }
  if(string == "conejo"){
      this.carritoList.push("Conejo");
      this.carritoPreciosList.push(20000);
      this.total = this.total + 20000; 
  }
  if(string == "gato"){
      this.carritoList.push("Gato");
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
