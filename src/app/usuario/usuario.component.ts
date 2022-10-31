import { UsuarioService } from './../service/usuario.service';
import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario!: Usuario;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  onSubmit() {
    this.usuarioService.cadastrar(this.form.value)
  .subscribe((response)=>
  this.usuario = response)
  }


}
