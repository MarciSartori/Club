import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrerComponent } from './components/user/registrer/registrer.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { PlanesComponent } from './components/admin/planes/planes.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "admin/usuarios", component: UsuariosComponent },
  {path: "admin/planes", component: PlanesComponent},
  {path: "user/login", component: LoginComponent },
  {path: "user/registrer", component: RegistrerComponent },
  {path: "user/profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
