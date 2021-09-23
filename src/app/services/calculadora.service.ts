/** 
 *Serviço responsável pelas operações da calculadora
 *@author Welsley Brilhannte <uktony@hotmail.com>
 *@since v1.0.0
*/



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /**
   * Definindo as constantes utilizadas nas operações
   */

   static readonly SOMA: string = '+';
   static readonly SUBTRACAO: string = '-';
   static readonly DIVISAO: string = '/';
   static readonly MULTIPLICACAO: string = 'X';
   static readonly RAIZQUADRADA: string = '√';
   static readonly QUADRADO: string = '²';
   static readonly CUBO: string = '³';


  constructor() { }

  
  /** 
   * Método que calcula as operações matemáticas básicas dado dois números e uma operação
   * @param num1 Number
   * @param num2 Number
   * @param operacao String - Operação a ser calculada
   * @return Number - O resultado da operação
  */

    raiz(num1: number):number {
      let resultado: number;
      resultado = Math.sqrt(num1);
      num1 = resultado
      return resultado;
    }
    quadrado(num1: number):number {
      let resultado: number;
      resultado = Math.pow(num1, 2);;
      return resultado;
    }
    cubo(num1: number):number {
      let resultado: number;
      resultado = Math.pow(num1, 3);
      return resultado;
    }
   
   
    calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  }

}
