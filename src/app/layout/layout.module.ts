import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from "@angular/router";
import { ItemsComponent } from './items/items.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { ItemSearchComponent } from './item-search/item-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ItemsComponent,
    ItemsDetailComponent,
    ItemSearchComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
