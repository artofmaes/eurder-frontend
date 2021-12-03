import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./layout/items/items.component";
import {ItemsDetailComponent} from "./layout/items-detail/items-detail.component";
import {ItemEditComponent} from "./layout/item-edit/item-edit.component";
const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'items/detail/:id', component: ItemsDetailComponent},
  {path: 'items/detail/:id/edit', component: ItemEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
