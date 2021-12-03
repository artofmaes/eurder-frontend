import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from "../../service/itemService/item.service";
import {Item} from "../../item/Item";
import {CreateItem} from "../../create-item/CreateItem";
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  items: Array<Item> = [];
  createItem = this.formBuilder.group({
    name:'',
    price:'',
    description:'',
    amountOfStock:''
  })
  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              private location: Location) { }

  ngOnInit(): void {
  }

  addItem(name: string, price: number, description: string, amountOfStock: number) {
    name= name.trim();
    description = description.trim();
    if (!name || !price || !description || !amountOfStock){
      return;
    }
    this.itemService.addItem({name, price, description, amountOfStock} as CreateItem )
      .subscribe(item => {this.items.push(item); })
  }

  goBack() {
    this.location.back();
  }
}
