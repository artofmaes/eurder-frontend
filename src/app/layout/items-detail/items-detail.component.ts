import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../item/Item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../service/itemService/item.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.css']
})
export class ItemsDetailComponent implements OnInit {

  @Input() item?: Item;

  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private location: Location) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  goBack() {
    this.location.back();
  }
}
