import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  constructor() { }

  somar(a: number, b: number) {
    return a + b;
  }

}
