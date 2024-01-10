import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaCalculatorService {
  calcularArea(base: number, altura: number): number {
    return (base * altura) / 2;
  }
}
