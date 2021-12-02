import { Component, OnInit } from '@angular/core';
import {Item} from "../../item/Item";
import {ItemService} from "../../service/itemService/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Array<Item> = [];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void{
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
