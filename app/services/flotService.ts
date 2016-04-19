import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class FlotService {
  constructor(public _http:Http) {
  }
  getFlotEntries() {
    return this._http.get('assets/mock/entries.json').map(response => response.json());
  }
}
