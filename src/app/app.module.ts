import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LayoutModule} from "./layout/layout.module";
import {ItemsComponent} from "./layout/items/items.component";
import {ItemsDetailComponent} from "./layout/items-detail/items-detail.component";
import {ItemSearchComponent} from "./layout/item-search/item-search.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { ItemEditComponent } from './layout/item-edit/item-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ItemCreateComponent } from './layout/item-create/item-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsDetailComponent,
    ItemSearchComponent,
    ItemEditComponent,
    ItemCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
