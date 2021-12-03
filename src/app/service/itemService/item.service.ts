import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Item} from "../../item/Item";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  private itemsUrl= `${environment.backendUrl}/items`;
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getItem(id: string | any): Observable<Item>{
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  updateItem(item: Item): Observable<any> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.put(url, item, this.httpOptions);
  }

  searchItems(term: string): Observable<Item[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`);

  }
}
