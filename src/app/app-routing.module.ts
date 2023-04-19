import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path: 'updatedata', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
