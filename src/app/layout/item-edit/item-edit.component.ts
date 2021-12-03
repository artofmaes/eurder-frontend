import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../item/Item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../service/itemService/item.service";
import {Location} from "@angular/common";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  @Input() item?: Item;
  updateItemForm = this.formBuilder.group({
    name: '',
    price:'',
    description:'',
    amountOfStock:''
  });

  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private location: Location,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  save(): void {
    if(this.item){
      this.itemService.updateItem(this.item).subscribe(()=> this.goBack())
    }
  }

  goBack() {
    this.location.back();
  }

}
