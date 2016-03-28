import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
export var FlotEntries: Array<number>[] = [
    [1, 10],
    [2, 40],
    [3, 80],
    [4, 160],
    [5, 159],
    [6, 370],
    [7, 330],
    [8, 350],
    [9, 370],
    [10, 400],
    [11, 330],
    [12, 350]
];


 
@Injectable()
export class FlotService {
  constructor(public _http:Http) {
    
  }
  getFlotEntries() {
    return this._http.get('assets/mock/entries.json').map(response => response.json());
  }
}
///assets/mock/entries.json