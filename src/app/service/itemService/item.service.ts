import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../item/Item";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl= `${environment.backendUrl}/items`;
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }
}
