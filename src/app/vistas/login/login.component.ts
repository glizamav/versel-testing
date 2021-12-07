import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datos:any='';
  mostrar ="";
  formContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    asunto: new FormControl('',[Validators.required, Validators.maxLength(40)])
  });
  constructor() { }

  ngOnInit(): void {
  }
  
  check(){
    if(this.formContacto.controls['nombre'].errors?.['required']){
      alert("NOMBRE FEOOOOO?")
    }
  }
  submit(){
    if (this.formContacto.valid) {
      this.mostrar = "Datos son correctos";
    } else {
      this.mostrar = "Existen datos con error";
    }
  }
  
}
