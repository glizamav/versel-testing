import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  datos: Usuario[] = [new Usuario(1,'pablo@nttdata.cl','123456123456'),
  new Usuario(2,"juan@nttdata.cl",'qwertyqwerty'),
  new Usuario(3,"amy@nttdata.cl",'nttdatanttdata')];

  formContacto = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  
  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }
  
  check(){
    if(this.formContacto.controls['email'].errors?.['required']){
      alert("El usuario no existe o hay errores en las credenciales")
    }
  }

  submit(){

    const { email, password } = this.formContacto.value
    
    /*Esto hace lo mismo
    let email = this.formContacto.value.email;
    let password = this.formContacto.value.password;
    */

    if (this.formContacto.valid) {
      const dataList = this.datos.filter((user)=>(user.email === email && user.password === password));
      console.log("Datos: ", dataList);
      if (dataList.length) this.router.navigate(['/']);
    } else alert("El usuario no existe o hay errores en las credenciales"); 
  }
}

export class Usuario{
  constructor (public codigo: number, 
  public email: string, public password: string){
  }
}
