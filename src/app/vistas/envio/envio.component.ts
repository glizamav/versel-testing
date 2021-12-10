import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {
  Visible = true;

  formEnvio = new FormGroup({
    pais: new FormControl('',[Validators.required, Validators.minLength(4)]),
    calle: new FormControl('',[Validators.required, Validators.minLength(4)]),
    cuidad: new FormControl('',[Validators.required, Validators.minLength(4)]),
    region: new FormControl('',[Validators.required, Validators.minLength(4)]),
    codigoPostal: new FormControl('',[Validators.required, Validators.minLength(4)]),
   
  });



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    //const {pais,calle,cuidad,region,codigoPostal} = this.formEnvio.value;
    if(this.formEnvio.valid){
      alert("Guardado datos de envio en el usuario");
      this.Visible = false;
    } 
    else alert("campos incompletos");
  }
}
