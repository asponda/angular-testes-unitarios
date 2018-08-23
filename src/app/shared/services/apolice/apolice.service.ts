import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ApolicesMock } from './apolices.mock';

@Injectable()
export class ApoliceService {

  constructor(
    private http: HttpClient
  ) { }

  // Consumindo uma API
  getApolices(): Observable<any> {
    return Observable.of(
      ApolicesMock
    ).map(retorno => retorno.data);
  }

}
