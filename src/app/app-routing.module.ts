import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path: "home", component:AppComponent},
  {path: "usuarios", component: UsuarioComponent},

  {
    path:'',
    children:[
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'login', component:LoginComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
