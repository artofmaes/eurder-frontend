import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _title: string;
  private _year: number;

  constructor() {
    this._title = 'Örder';
    this._year = Date.now();
  }

  ngOnInit(): void {
  }


  get title(): string {
    return this._title;
  }

  get year(): number {
    return this._year;
  }
}
