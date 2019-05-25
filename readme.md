# Unidad 2: Lógica

## Display de 7 segmentos

La aplicación busca simular un display de 7 segmentos. Contiene dos secciones. Una de entrada donde el usuario indica un número en binario de 4 bits a través de 4 controles Checkbox, y otra de salida donde se muestra el número elegido en decimal.

## Etapa 1: Tabla de verdad

En este paso se muestra la tabla de verdad con todas las combinaciones posibles de las entradas y con el valor deseado para la salida. Para los números binarios mayores a 9, el display muestra una E de error.

* Entradas: (e1,e2,e3,e4)
* Salidas: (s1,s2,s3,s4,s5,s6,s7)

| Nro | e1 | e2 | e3 | e4 | s1 | s2 | s3 | s4 | s5 | s6 | s7 |
|-----|----|----|----|----|----|----|----|----|----|----|----|
| 0   | 0  | 0  | 0  | 0  | 1  | 1  | 1  | 0  | 1  | 1  | 1  |
| 1   | 0  | 0  | 0  | 1  | 0  | 0  | 1  | 0  | 0  | 1  | 0  |
| 2   | 0  | 0  | 1  | 0  | 1  | 0  | 1  | 1  | 1  | 0  | 1  |
| 3   | 0  | 0  | 1  | 1  | 1  | 0  | 1  | 1  | 0  | 1  | 1  |
| 4   | 0  | 1  | 0  | 0  | 0  | 1  | 1  | 1  | 0  | 1  | 0  |
| 5   | 0  | 1  | 0  | 1  | 1  | 1  | 0  | 1  | 0  | 1  | 1  |
| 6   | 0  | 1  | 1  | 0  | 1  | 1  | 0  | 1  | 1  | 1  | 1  |
| 7   | 0  | 1  | 1  | 1  | 1  | 0  | 1  | 0  | 0  | 1  | 0  |
| 8   | 1  | 0  | 0  | 0  | 1  | 1  | 1  | 1  | 1  | 1  | 1  |
| 9   | 1  | 0  | 0  | 1  | 1  | 1  | 1  | 1  | 0  | 1  | 0  |
| 10  | 1  | 0  | 1  | 0  | 1  | 1  | 0  | 1  | 1  | 0  | 1  |
| 11  | 1  | 0  | 1  | 1  | 1  | 1  | 0  | 1  | 1  | 0  | 1  |
| 12  | 1  | 1  | 0  | 0  | 1  | 1  | 0  | 1  | 1  | 0  | 1  |
| 13  | 1  | 1  | 0  | 1  | 1  | 1  | 0  | 1  | 1  | 0  | 1  |
| 14  | 1  | 1  | 1  | 0  | 1  | 1  | 0  | 1  | 1  | 0  | 1  |
| 15  | 1  | 1  | 1  | 1  | 1  | 1  | 0  | 1  | 1  | 0  | 1  |

## Etapa 2: Código informal

Sobre la tabla construida anteriormente, se escribió informalmente el código que describe el comportamiento de cada segmento del display.

* s1: e1' e2' e3' e4' + e1' e2' e3 e4' + e1' e2' e3 e4 + e1' e2 e3' e4 + e1' e2 e3 e4' + e1' e2 e3 e4 + e1 e2' e3' e4' + e1 e2' e3' e4 + e1 e2' e3 e4' + e1 e2' e3 e4 + e1 e2 e3' e4' + e1 e2 e3' e4 + e1 e2 e3 e4' + e1 e2 e3 e4

* s2: e1' e2' e3' e4' + e1' e2 e3' e4' + e1' e2 e3' e4 + e1' e2 e3 e4' + e1 e2' e3' e4' + e1 e2' e3' e4 + e1 e2' e3 e4' + e1 e2' e3 e4 + e1 e2 e3' e4' + e1 e2 e3' e4 + e1 e2 e3 e4' + e1 e2 e3 e4

* s3: e1' e2' e3' e4' + e1' e2' e3' e4 + e1' e2' e3 e4' + e1' e2' e3 e4 + e1' e2 e3' e4' + e1' e2 e3 e4 + e1 e2' e3' e4' + e1 e2' e3' e4 + e1 e2' e3 e4' + e1 e2' e3 e4 + e1 e2 e3' e4' + e1 e2 e3' e4 + e1 e2 e3 e4' + e1 e2 e3 e4

* s4: e1' e2' e3 e4' + e1' e2' e3 e4 + e1' e2 e3' e4' + e1' e2 e3' e4 + e1' e2 e3 e4' + e1 e2' e3' e4' + e1 e2' e3' e4 + e1 e2' e3 e4' + e1 e2' e3 e4 + e1 e2 e3' e4' + e1 e2 e3' e4 + e1 e2 e3 e4' + e1 e2 e3 e4

* s5: e1' e2' e3' e4' + e1' e2' e3 e4' + e1' e2 e3 e4' + e1 e2' e3' e4' + e1 e2' e3 e4' + e1 e2' e3 e4 + e1 e2 e3' e4' + e1 e2 e3' e4 + e1 e2 e3 e4' + e1 e2 e3 e4

* s6: e1' e2' e3' e4' + e1' e2' e3' e4 + e1' e2' e3 e4 + e1' e2 e3' e4' + e1' e2 e3' e4 + e1' e2 e3 e4' + e1' e2 e3 e4 + e1 e2' e3' e4' + e1 e2' e3' e4 + e1 e2' e3 e4' + e1 e2' e3 e4 + e1 e2 e3' e4' + e1 e2 e3' e4 + e1 e2 e3 e4' + e1 e2 e3 e4

* s7: e1' e2' e3' e4' + e1' e2' e3 e4' + e1' e2' e3 e4 + e1' e2 e3' e4 + e1' e2 e3 e4' + e1 e2' e3' e4' + e1 e2' e3 e4' + e1 e2' e3 e4 + e1 e2 e3' e4' + e1 e2 e3' e4 + e1 e2 e3 e4' + e1 e2 e3 e4

## Etapa 3: Implementación en Ionic 4 las condiciones de la etapa 2.