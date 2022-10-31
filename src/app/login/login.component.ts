import { Usuario } from './../model/usuario';
import { AutenticationService } from './../service/autentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  usuario!:Usuario;

  constructor(private formBuilder:FormBuilder, private autenticationService:AutenticationService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:["", Validators.required],
      password:["", Validators.required],

    })
  }

  onSubmit() {
    console.log("Formulario", this.form.value)
    if(this.form.value.valid){
      return;
    }


      }
    }



