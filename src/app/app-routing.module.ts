import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewComponent } from './pages/create-new/create-new.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewByIdComponent } from './pages/view-by-id/view-by-id.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'view-by-id/:abc', component: ViewByIdComponent},
  {path:'create-new', component: CreateNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
