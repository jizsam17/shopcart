import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlantsComponent } from './plants/plants.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'', component:LoginComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'plants', component: PlantsComponent
  },
  {
    path:'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
