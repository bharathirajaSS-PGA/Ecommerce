import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorySettingsComponent } from './category-settings/category-settings.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
