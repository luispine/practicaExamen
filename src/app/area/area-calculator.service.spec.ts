import { TestBed } from '@angular/core/testing';

import { AreaCalculatorService } from './area-calculator.service';

describe('AreaCalculatorService', () => {
  let service: AreaCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

  it('debería calcular el área correctamente', () => {
    const base = 10;
    const altura = 5;
    const resultado = service.calcularArea(base, altura);
    expect(resultado).toEqual(25);
  });

});
