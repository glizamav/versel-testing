import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  contactoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    asunto: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    mensaje:new FormControl('',[Validators.required, Validators.maxLength(200)]),
  }
  )
  ngOnInit(): void {
  }

  submit(){
    console.log("Recibido")
    alert("¡Gracias por tus comentarios!");
  }

}
