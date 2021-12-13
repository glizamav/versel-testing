import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formContacto = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(6)])
    
  });


  constructor(private router: Router) { }

 

  ngOnInit(): void {
  }

  submit(){
    //const {nombre,email,password,password2} = this.formContacto.value;
    if(this.formContacto.valid){
      let dataList = this.formContacto.value.password;
      let dataList2 = this.formContacto.value.password2;
      console.log("Datos: ", dataList);
      console.log("Datos: ", dataList2);
      if (dataList == dataList2){ 
        this.router.navigate(['/']);}
    } else {
      alert("campos incompletos");
    }

  }
}
