import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./layout/items/items.component";
import {ItemsDetailComponent} from "./layout/items-detail/items-detail.component";
const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'items/detail/:id', component: ItemsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
