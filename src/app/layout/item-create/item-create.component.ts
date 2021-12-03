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

  items: Array<CreateItem> = [];
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

  addItem() {
    this.itemService.addItem(this.createItem.value)
      .subscribe(item => {this.items.push(item); this.goBack(); })
  }

  goBack() {
    this.location.back();
  }
}
