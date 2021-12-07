import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface Product{
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  especie: string;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  listaAnimales:Product[] = [];
  fakeId=0;
  animalForm = new FormGroup({
    id: new  FormControl(''),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    descripcion: new FormControl('',[Validators.required,Validators.maxLength(200)]),
    precio:new FormControl('',[Validators.required, Validators.max(1000000)]),
    especie: new FormControl('',[Validators.required, Validators.maxLength(16)]),
    }
  )

  /*
  formContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    asunto: new FormControl('',[Validators.required, Validators.maxLength(40)])
  });*/

  constructor() { }

  ngOnInit(): void {
  }


  submit(){
    if(this.animalForm.valid){
      if(this.encontraId(this.animalForm.value.id)){
        let animalitoEditado:Product = {
          id: this.animalForm.value.id,
          nombre: this.animalForm.value.nombre,
          descripcion: this.animalForm.value.descripcion,
          precio: this.animalForm.value.precio,
          especie: this.animalForm.value.especie,
        }
        this.listaAnimales[this.animalForm.value.id] = animalitoEditado;
      }
      else{
        let nuevoAnimalito:Product = {
          id: this.fakeId,
          nombre: this.animalForm.value.nombre,
          descripcion: this.animalForm.value.descripcion,
          precio: this.animalForm.value.precio,
          especie: this.animalForm.value.especie,
        }
        this.listaAnimales.push(nuevoAnimalito);
        this.fakeId++;
      }

      
      this.animalForm.reset();
      
    }
  }
  eliminar(i:number){
    //alert("Se quiere eliminar a la mascota" + this.listaAnimales[i].nombre)
    this.listaAnimales.splice(i,1);
  }
  editar(i:number){
    let animal = this.listaAnimales[i];
    this.animalForm.setValue({
      id: animal.id,
      nombre: animal.nombre,
      descripcion:animal.descripcion,
      precio: animal.precio,
      especie: animal.especie
    })
  }
  encontraId(i:number):boolean{
    for(let k in this.listaAnimales){
      if(i == this.listaAnimales[k].id){
        return true;
      }
    }
    return false;
  }
}
